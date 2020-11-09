import * as React from 'react';
import { Table } from 'react-bootstrap';
import HttpActionsService from '../../Services/HttpActionsService'

const SORT_DIRECTIONS = {
    ASC: 'asc',
    DESC: 'desc'
}
const SORTING_FIELDS = {
    NAME: 'name',
    DESCRIPTION: 'description',
    POPULARITY: 'popularity',
    RELIABILITY: 'reliability'
}

export default class StationsPage extends React.Component {
    
    _hs = HttpActionsService.getInstance();

    constructor(props) {
        super(props);
        
        this.state = {
            stations: [],
            tags: [],
            processed: [],
            expanded: [],
            filters: {
                tags: [],
                substr: '',
                sort: {}
            }
        }
    }

    getAllTags = (data) => {
        let res = data.map(s => s['tags']);
        res = res.reduce((acc, val) => acc.concat(val));
        res = res.filter((v, i, a) => a.indexOf(v) === i);
        return res;
    }

    handleTag = (t) => {
        let newState = { ...this.state };
        if (-1 === newState.filters.tags.indexOf(t)) {
            newState.filters.tags.push(t);
        } else {
            newState.filters.tags = newState.filters.tags.filter(ft => ft !== t)
        }
        this.applyFilters(newState);
    }

    handleResetTags = (event) => {
        let newState = Object.assign(this.state);
        newState.filters.tags = [];
        this.applyFilters(newState);
    }
    handleSearch = (event) =>  {
        let newState = Object.assign(this.state);
        newState.filters.substr = event.target.value.trim().toLowerCase();
        this.applyFilters(newState);
    }

    handleSort = (col) => {
        console.info('sort');
        if (!!SORTING_FIELDS[col]) {
            return;
        }
        let newState = { ...this.state };
        let sort = { ...newState.filters.sort };
        newState.filters.sort = {};
        newState.filters.sort[col] = sort[col] === SORT_DIRECTIONS.ASC ? SORT_DIRECTIONS.DESC : SORT_DIRECTIONS.ASC;
        this.applyFilters(newState);
    }
    
    handleExpandStationDetails = (sId) => {
        let newState = { ...this.state };
        if (newState.expanded.includes(sId)) {
            newState.expanded = newState.expanded.filter(s => s !== sId)
        } else {
            newState.expanded.push(sId);
        }
        this.applyFilters(newState);
    }

    applyFilters(state) {
        // tags filtering to be first!!!
        if (state.filters.tags.length) {
            state.processed = state.stations.filter((s) => {
                return s.tags.filter(t => state.filters.tags.includes(t)).length;
            });    
        } else {
            state.processed = state.stations;
        }
        
        // substring filter
        let substr = state.filters.substr = state.filters.substr.trim().toLowerCase();
        if (substr.length > 2) {
            state.filters.substr = substr;
            state.processed = state.processed.filter((s) => {
                return -1 !== s.name.toLowerCase().indexOf(substr) 
                    || -1 !== s.description.toLowerCase().indexOf(substr);
            });
        } else {
            state.filters.substr = '';
        }
        
        // sort
        let field = Object.keys(state.filters.sort)[0];
        // let dir = Object.values(state.filters.sort)[0];
        if (field) {
            state.processed.sort(
                (s1, s2) => {
                    if (SORT_DIRECTIONS.DESC === state.filters.sort[field]) {
                        return s1[field] > s2[field] ? 1 : -1;
                    } else {
                        return s1[field] < s2[field] ? 1 : -1;
                    }
                    // return 0;
                }
            );
        }
        this.setState(state);
    }

    componentDidMount() {
        const self = this;

        this._hs.getStations()
            .then((response) => {
                if (response['ok'] && 200 === response.status) {
                    response.json().then((data) => {
                        self.setState({
                            stations: data['data'],
                            processed: data['data'],
                            tags: this.getAllTags(data['data'])
                        });
                    });
                }
            })
            .catch((error) => {
            });
    }

    render() {
        const self = this;
        return (
            <div className="stations">
                <div className="stationslist">
                    <p className="search">
                        <label htmlFor="search-input">search</label>
                        <input type="search" id="search-input" onInput={this.handleSearch} />
                    </p>

                    {
                        self.state['tags']
                            ? (
                            <div className="tags">
                                <div className="title">Tags:</div>
                                <div className="list">
                                    {
                                        self.state['tags'].map(t => {
                                            if (-1 === this.state.filters.tags.indexOf(t)) {
                                                return (
                                                    <span className="tag" key={t} onClick={() => { this.handleTag(t)}}>{t}</span>
                                                )
                                            } else {
                                                return (
                                                    <span className="tag selected" key={t} onClick={() => { this.handleTag(t)}}>{t}</span>
                                                );
                                            }
                                        })
                                    }
                                    <span className="tag clear" onClick={this.handleResetTags}>x clear all</span>
                                </div>
                            </div> )
                            : null
                    }

                    <Table responsive="sm" className="list">
                        <thead>
                            <tr>
                                <th className="name">
                                    <span className="colH sortable name" onClick={() => this.handleSort('name')}>Name</span>&nbsp;
                                    <span className="colH sortable index popularity"
                                        onClick={() => this.handleSort('popularity')} 
                                        title="Popularity">
                                        <img src="/like.svg" alt="popularity"/>
                                    </span>&nbsp;
                                    <span className="colH sortable index reliability" 
                                        onClick={() => this.handleSort('reliability')}
                                        title="Reliability">
                                        <img src="/reliability.svg" alt="reliability"/>
                                    </span>
                                </th>
                                {/* <th className="colH sortable description" onClick={() => this.handleSort('descrition')}>Description</th> */}
                                <th>Tags</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                self.state['processed'] ? 
                                    self.state['processed'].map(s => {
                                        return (
                                            <tr key={s.id} 
                                                className="stationRow" 
                                                onClick={() => this.handleExpandStationDetails(s.id)}
                                            >
                                                <td className="station">
                                                    <p>{s.name}</p>
                                                    <div className="info">
                                                        <img className="logo" src={s.imgUrl ? s.imgUrl : '/radio.svg'} alt="s.name"/>
                                                        <div className="indexes">
                                                            <span className="index popularity">
                                                                <img src="/like.svg" alt="popularity"/>
                                                                <span>{s.popularity}</span>
                                                            </span><br/>
                                                            <span className="index reliability">
                                                                <img src="/reliability.svg" alt="popularity"/>
                                                                <span>{s.reliability}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <audio className={`audio ${ self.state.expanded.includes(s.id) ? '' : "hidden"}`} controls preload="none">
                                                        <source src={s.streamUrl} type="audio/mpeg" /><br/>
                                                        Your browser does not support the audio element.
                                                    </audio>
                                                </td>
                                                {/* <td>{s.description}</td> */}
                                                <td>
                                                    <p>{s.tags.map(t => t.replace(/\s+/, '\u00a0')).reduce((t1, t2) => [t1, t2].join(`, `)) }</p>
                                                    <p className={`description ${ self.state.expanded.includes(s.id) ? '' : "hidden"}`}>{s.description}</p>
                                                </td>
                                            </tr>
                                            )}
                                        )
                                    : null
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3">
                                    Total: {self.state['processed'].length}
                                </td>
                            </tr>
                        </tfoot>
                    </Table>
                </div>
            </div>
        )
    }
}