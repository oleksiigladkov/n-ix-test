import * as React from 'react'
// import HttpActionsService from '../../Services/HttpActionsService'
import ConfigStore from '../../app/ConfigStore'

export default class OverlayView extends React.Component {

    // hs = HttpActionsService.getInstance()
    cs = ConfigStore.getInstance()

    render() {
        return (
            // <div className="overlay" hidden={!this.hs.reqNum && !this.cs.spinnerMode}>
            <div className="overlay" hidden={!this.cs.spinnerMode}>
                <img className="spinner" src="/images/spinner.png" alt="Loading..." />
            </div>
        )
    }
}
