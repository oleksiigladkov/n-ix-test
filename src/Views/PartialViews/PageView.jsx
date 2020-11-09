import * as React from 'react'

export default class PageView extends React.Component {
    render() {
        return (
            <div className="container page">
                {this.props.children}
            </div>
        )
    }
}
