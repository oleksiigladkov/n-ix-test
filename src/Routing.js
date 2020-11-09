import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Layout from './Views/Layout/Layout'
import IndexPage from './Views/Pages/IndexPage'
import StationsPage from './Views/Pages/StationsPage'
import AboutPage from './Views/Pages/AboutPage'
import NotFoundPage from './Views/Pages/NotFoundPage'
import ServerErrorPage from './Views/Pages/ServerErrorPage'

export const history = createBrowserHistory()

const Routing = () => (
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" render={() => <Layout><IndexPage /></Layout>} />
            <Route exact path="/index" render={() => <Layout><IndexPage /></Layout>} />
            <Route exact path="/stations" render={() => <Layout><StationsPage /></Layout>} />
            <Route exact path="/about" render={() => <Layout><AboutPage /></Layout>} />
            <Route exact path="/404" render={() => <Layout><NotFoundPage /></Layout>} />
            <Route exact path="/500" render={() => <Layout><ServerErrorPage /></Layout>} />
            <Route path="*" render={() => <Layout><NotFoundPage /></Layout>} />
        </Switch>
    </BrowserRouter>
)

export default Routing;