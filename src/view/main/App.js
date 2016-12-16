import React, {Component} from 'react'
import 'whatwg-fetch'
import MainHeader from './MainHeader'

class App extends Component {
  render () {
    return (
      <div>
        <MainHeader />
        {this.props.children}
      </div>
    )
  }
}

export default App

