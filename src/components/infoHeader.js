// infoHeader.js
import React, {Component} from 'react'

class InfoHeader extends Component {
  render () {
    return (
      <div className='info-header'>
        <div className='clearfix'>
          <div className='float-left'>
            <span className='ep-number'>3245235234523</span>
            <i className='fa fa-refresh info' />
          </div>
          <i className='float-right fa fa-star-o warning' />
        </div>
        <p>公司：<span>圆通</span></p>
        <p>耗时：<span>15小时内</span></p>
      </div>
    )
  }
}

export default InfoHeader

