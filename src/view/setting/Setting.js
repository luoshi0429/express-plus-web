// setting.js
import React, {Component} from 'react'
import '../../styles/setting.css'
import { connect } from 'react-redux'
import { changeAuto, changeChecked, changeInterval } from '../../actions/action'
class Setting extends Component {
  render () {
    const {checkedEp, checkedAuto, intervalValue} = this.props
    return (
      <div className='setting'>
        <div className='setting-container'>
          <div className='setting-item'>
            <label><span>只提示已签收快递 </span><input type='checkbox' checked={checkedEp === '1'} onChange={this.checkedEp.bind(this)} /></label>
          </div>
          <div className='setting-item'>
            <label><span>自动查询 </span><input type='checkbox' checked={checkedAuto === '1'} onChange={this.checkedAuto.bind(this)} /></label>
          </div>
          <div className='setting-item'>
            <span>查询间隔 </span>
            <select defaultValue={intervalValue} onChange={this.selectChanged.bind(this)}>
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
    this.props.dispatch(changeChecked(e.target.checked ? '1' : '0'))
  }

  checkedAuto (e) {
    this.props.dispatch(changeAuto(e.target.checked ? '1' : '0'))
  }

  selectChanged (e) {
    this.props.dispatch(changeInterval(e.target.value))
  }
}

const mapStateToProps = (state) => {
  const { setting } = state
  return {
    checkedAuto: setting.checkedAuto,
    intervalValue: setting.intervalValue,
    checkedEp: setting.checkedEp
  }
}

export default connect(mapStateToProps)(Setting)
