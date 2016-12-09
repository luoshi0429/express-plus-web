// info.js
import React, {Component} from 'react'
import InfoHeader from './infoHeader'
import InfoList from './infoList'

class Info extends Component {
  render () {
    return (
      <div>
        <InfoHeader />
        <InfoList />
      </div>
    )
  }
}

export default Info
