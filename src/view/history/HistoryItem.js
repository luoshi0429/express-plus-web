// HistoryItem.js
import React, {Component} from 'react'

class HistoryItem extends Component {
  render () {
    const detail = this.props.detail
    return (
      <div className='History-item'>
        <div className='item-header'>
          <span>{detail.cncom}</span>
          <span>{detail.nu}</span>
        </div>
        <div className='item-content'>
          <span>{detail.time}</span>
          <i className='fa fa-map-marker' />
          <span>{detail.context}</span>
        </div>
      </div>
    )
  }
}

export default HistoryItem
