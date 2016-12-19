import React, {Component} from 'react'
import 'whatwg-fetch'
// import MainHeader from './MainHeader'
import TabBar from './TabBar'

class App extends Component {
  render () {
    return (
      <div>
        <div id='container'>
          {this.props.children}
        </div>
        <TabBar />
      </div>
    )
  }
}

// <MainHeader />

export default App
