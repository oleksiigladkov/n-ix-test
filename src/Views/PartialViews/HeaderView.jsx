import * as React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

class HeaderView extends React.Component {
    render() {
        return (
            <Navbar className="header">
                <Navbar.Brand className="d-none d-sm-block">
                    {/* <NavLink to="/" title="Home page"><img src="/n-ix-logo.svg" alt="Home" /></NavLink> */}
                    {/* <NavLink to="/stations" title="Listen radio"><img src="/radio.svg" alt="Stations" /></NavLink> */}
                    <img src="/radio.svg" alt="Stations" />
                </Navbar.Brand>
                <Navbar.Collapse className="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/index" className="header-menu-item">Home</NavLink>
                        <NavLink 
                            to="/stations" 
                            className="header-menu-item { '/stations' === window.location.path ? 'active' : ''}">
                                Stations
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className="header-menu-item { '/about' === window.location.path ? 'active' : ''}">
                                About
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(HeaderView)
