import * as React from 'react'

export default class FooterView extends React.PureComponent {
    
    constructor() {
        super();
        this.year = (new Date()).getFullYear();
    }

    render() {
        const self = this;
        
        return (
            <footer className="footer">
                <p className="copy">
                    Copyright&nbsp;&copy;&nbsp;{self.year}&nbsp;N-iX LTD
                </p>
            </footer>
        )
    }
}
