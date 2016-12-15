// setting.js
import React, {Component} from 'react'

class Setting extends Component {
  constructor () {
    super()
    var checkedEp = window.localStorage.getItem('CheckedEp') || '1'
    var checkedAuto = window.localStorage.getItem('checkedAuto') || '1'
    var intervalValue = window.localStorage.getItem('SearchInterval') || 30
    this.state = {
      checkedEp: checkedEp,
      checkedAuto: checkedAuto,
      intervalValue: intervalValue
    }
  }

  render () {
    return (
      <div className='setting'>
        <div className='setting-container'>
          <div>
            <h1>设置</h1>
            <p>如果觉得这个插件还蛮好用的，请到商店评价~<a href='#'>Web store</a></p>
          </div>
          <div>
            <label><input type='checkbox' checked={this.state.checkedEp === '1'} onChange={this.checkedEp.bind(this)} /><span>只提示已签收快递</span></label>
            <p>默认开启，勾选后只有在快递状态为签收后才提示信息。</p>
          </div>
          <div>
            <label><input type='checkbox' checked={this.state.checkedAuto === '1'} onChange={this.checkedAuto.bind(this)} /><span>自动查询</span></label>
            <p>默认开启，勾选后会间隔一段时间后后台查询未签收的快递</p>
          </div>
          <div>
            <select defaultValue={this.state.intervalValue} onChange={this.selectChanged.bind(this)}>
              <option value='10'>10分钟</option>
              <option value='20'>20分钟</option>
              <option value='30'>30分钟</option>
              <option value='60'>60分钟</option>
              <option value='120'>120分钟</option>
            </select>
            <span>查询间隔</span>
            <p>默认30分钟，间隔尽量不要太快，避免接口请求太频繁</p>
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
      window.localStorage.setItem('CheckedEp', this.state.checkedEp)
    })
  }

  checkedAuto (e) {
    this.setState({
      checkedAuto: e.target.checked ? '1' : '0'
    }, function () {
      window.localStorage.setItem('checkedAuto', this.state.checkedAuto)
    })
  }

  selectChanged (e) {
    window.localStorage.setItem('SearchInterval', e.target.value)
    this.setState({
      intervalValue: e.target.value
    })
  }
}

export default Setting
