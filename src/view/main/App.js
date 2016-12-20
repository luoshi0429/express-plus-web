import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import 'whatwg-fetch'
import TabBar from './TabBar'
import NavBar from './NavBar'

class App extends Component {
  render () {
    const {hideRightBar, hideTab, hideNav, ...navbar} = this.props.routes[1]
    const rightBarClass = hideRightBar ? '' : 'fa fa-search'
    let title = this.props.location.query.num || this.props.routes[1].title
    return (
      <div>
        {hideNav ? <div /> : <NavBar {...navbar} title={title} rightBarClass={rightBarClass} leftBarClicked={this.back.bind(this)} rightBarClicked={this.onSearch.bind(this)} />}
        <div id='container'>
          {this.props.children}
        </div>
        {hideTab ? <div /> : <TabBar />}
      </div>
    )
  }

  onSearch () {
    const {rightBarTitle} = this.props.routes[1]
    if (rightBarTitle === '取消') {
      console.log(rightBarTitle)
      browserHistory.goBack()
      return
    }
    console.log('search...')
    browserHistory.push({
      pathname: '/search'
    })
  }

  back () {
    browserHistory.goBack()
  }
}

export default App
