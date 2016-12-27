// setting.js
import React, {Component} from 'react'
import '../../styles/setting.css'
import {getCheckedEp, saveCheckedEp, getCheckedAuto, saveCheckedAuto, getSearchInterval, saveSearchInterval} from '../../tool/data'

class Setting extends Component {
  constructor () {
    super()
    const checkedEp = getCheckedEp() || '1'
    const checkedAuto = getCheckedAuto() || '1'
    const intervalValue = getSearchInterval() || 30
    this.state = {
      checkedEp: checkedEp,
      checkedAuto: checkedAuto,
      intervalValue: intervalValue
    }
  }

  render () {
    const {checkedEp, checkedAuto, intervalValue} = this.state
    return (
      <div className='setting'>
        <div className='setting-container'>
          <div className='setting-item'>
            <label><span>只提示已签收快递</span><input className='float-right' type='checkbox' checked={checkedEp === '1'} onChange={this.checkedEp.bind(this)} /></label>
          </div>
          <div className='setting-item'>
            <label><span>自动查询</span><input className='float-right' type='checkbox' checked={checkedAuto === '1'} onChange={this.checkedAuto.bind(this)} /></label>
          </div>
          <div className='setting-item'>
            <span>查询间隔</span>
            <select defaultValue={intervalValue} onChange={this.selectChanged.bind(this)} className='float-right'>
              <option value='10'>10分钟</option>
              <option value='20'>20分钟</option>
              <option value='30'>30分钟</option>
              <option value='60'>60分钟</option>
              <option value='120'>120分钟</option>
            </select>
          </div>
          <div className='setting-item'>
            <a href='#' className='setting-item'>给应用评分</a>
          </div>
        </div>

        <div className='copyright'>©2015 快递助手 - 由快递100强力驱动</div>
      </div>
    )
  }

  checkedEp (e) {
    this.setState({
      checkedEp: e.target.checked ? '1' : '0'
    }, function () {
      saveCheckedEp(this.state.checkedEp)
    })
  }

  checkedAuto (e) {
    this.setState({
      checkedAuto: e.target.checked ? '1' : '0'
    }, function () {
      saveCheckedAuto(this.state.checkedAuto)
    })
  }

  selectChanged (e) {
    saveSearchInterval(e.target.value)
    this.setState({
      intervalValue: e.target.value
    })
  }
}

export default Setting
