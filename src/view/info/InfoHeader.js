// infoHeader.js
import React, {Component} from 'react'
import Button from '../../components/Button'
import {getDetailLocal, saveDetailLocal} from '../../tool/data'

class InfoHeader extends Component {
  constructor (props) {
    super(props)
    var saved = false
    var index
    const items = getDetailLocal()
    if (items) {
      items.map(function (item, currentIndex, array) {
        if (item.num === props.headerInfo.num) {
          saved = true
          index = currentIndex
        }
      })
    }
    this.state = {
      hasSaved: saved,
      index: index
    }
  }
  render () {
    var starStyle = 'fa warning iconBtn'
    starStyle = starStyle + (this.state.hasSaved ? ' fa-star' : ' fa-star-o')
    const headerInfo = this.props.headerInfo
    return (
      <div className='info-header'>
        <div className='clearfix'>
          <div className='float-left'>
            <span className='ep-number'>{headerInfo.num}</span>
            <Button iconClassName='fa fa-refresh info iconBtn' onClick={this.refreshData.bind(this)} />
          </div>
          <Button className='float-right ' iconClassName={starStyle} onClick={this.stared.bind(this)} />
        </div>
        <p>公司：<span>{headerInfo.cncom}</span></p>
        <p>耗时：<span>{headerInfo.time}</span></p>
      </div>
    )
  }
  stared (e) {
    this.setState({
      hasSaved: !this.state.hasSaved
    })
    // 保存数据 or 删除数据
    const {num, com} = this.props.headerInfo
    var items = getDetailLocal() || []
    if (!this.state.hasSaved) {
      var newItem = {
        num: num,
        com: com
      }
      items.unshift(newItem)
    } else {
      items.splice(this.state.index, 1)
    }
    saveDetailLocal(items)
  }

  refreshData () {
    this.props.refreshData()
  }
}
InfoHeader.propTypes = {
  headerInfo: React.PropTypes.object,
  refreshData: React.PropTypes.func
}

export default InfoHeader
