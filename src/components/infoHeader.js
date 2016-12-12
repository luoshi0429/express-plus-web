// infoHeader.js
import React, {Component} from 'react'

class InfoHeader extends Component {
  render () {
    return (
      <div className='info-header'>
        <div className='clearfix'>
          <div className='float-left'>
            <span className='ep-number'>{this.props.info.num}</span>
            <i className='fa fa-refresh info' onClick={this.refreshData.bind(this)} />
          </div>
          <i className='float-right fa warning fa-star-o' onClick={this.stared.bind(this)} />
        </div>
        <p>公司：<span>{this.props.info.com}</span></p>
        <p>耗时：<span>{this.props.info.time}</span></p>
      </div>
    )
  }

  stared (e) {
    console.log('stared...' + e.target)
    // 保存数据
    // window.localStorage.setItem()
  }

  refreshData () {
    console.log('刷新数据')
    this.props.refreshData()
  }
}

export default InfoHeader

