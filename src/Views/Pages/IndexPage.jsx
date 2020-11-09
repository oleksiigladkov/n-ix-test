import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="landing">
                <img src="/n-ix-logo.svg" className="landing-logo" alt="logo" />
                <p>
                Keep tune in!&nbsp;
                <NavLink to="/stations" rel="noopener noreferrer">
                    Stations
                </NavLink>
                </p>
            </div>
        )
    }

}
