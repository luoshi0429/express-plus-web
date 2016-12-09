// detailItem.js
import React, {Component} from 'react'
class DetailItem extends Component {
  render () {
    return (
      <div className='detailItem'>
        <div className='detailItem-header clearfix'>
          <div className='float-left'>
            <span className='detailItem-number'>40202889990</span>
            <i className='fa fa-truck warning' />
            <i className='fa fa-clipboard' />
          </div>
          <div className='float-right'>
            <i className='fa fa-search info' />
            <i className='fa fa-trash-o danger' />
          </div>
        </div>
        <div className='detailItem-content'>
          <span>20天前</span>
          <i className='fa fa-map-marker' />
          <span>客户 签收人: 本人签收 已签收 感谢使用圆通速递，期待再次为您服务</span>
        </div>
        <div className='detailItem-footer'>圆通</div>
      </div>
    )
  }
}

export default DetailItem
