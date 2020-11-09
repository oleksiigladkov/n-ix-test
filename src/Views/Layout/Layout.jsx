import * as React from 'react'
import { withRouter } from 'react-router-dom'
// import Overlay from './Overlay'
import HeaderView from '../PartialViews/HeaderView'
import FooterView from '../PartialViews/FooterView'
import PageView from '../PartialViews/PageView'

class Layout extends React.Component {
  render() {
    let header = -1 === ['/', '/index'].indexOf(window.location.pathname) ? <HeaderView /> : null;
    let wrapperClasses = header ? 'wrapper' : 'wrapper flex-centered';
    return (
      <div className="app container">
        {/* <Overlay /> */}
        <div className={wrapperClasses}>
          { header }
          <PageView>
            {this.props.children}
          </PageView>
        </div>
        <FooterView />
      </div>
    )
  }
}

export default withRouter(Layout)
