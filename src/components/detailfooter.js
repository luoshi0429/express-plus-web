// detailfooter.js
import React, {Component} from 'react'
class DetailFooter extends Component {
  render () {
    return (
      <div className='detail-footer'>
        <i className='fa fa-filter' />
        <input placeholder='过滤订阅列表...' type='text' />
      </div>
    )
  }
}

export default DetailFooter
