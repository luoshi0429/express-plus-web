// infoList.js
import React, {Component} from 'react'

class InfoList extends Component {
  render () {
    return (
      <div className='infoList'>
        <div className='infoList-header'>
          <div>
            <span className='info-update'>更新时间</span>
          </div>
          <div>
            <span className='info-content'>内容</span>
          </div>
        </div>
        <div className='info-tabel'>
          <table>
            <tbody>
              <tr className='tr-odd'>
                <td>2016-11-25 12:59:58</td>
                <td><i className='fa fa-map-marker' /></td>
                <td>客户 签收人: 本人签收 已签收  感谢使用圆通速递，期待再次为您服务</td>
              </tr>
              <tr className='tr-even'>
                <td>2016-11-25 12:59:58</td>
                <td><i className='fa fa-map-marker' /></td>
                <td>客户 签收人: 本人签收 已签收  感谢使用圆通速递，期待再次为您服务</td>
              </tr>
              <tr className='tr-odd'>
                <td>2016-11-25 12:59:58</td>
                <td><i className='fa fa-map-marker' /></td>
                <td>客户 签收人: 本人签收 已签收  感谢使用圆通速递，期待再次为您服务</td>
              </tr>
              <tr className='tr-even'>
                <td>2016-11-25 12:59:58</td>
                <td><i className='fa fa-map-marker' /></td>
                <td>客户 签收人: 本人签收 已签收  感谢使用圆通速递，期待再次为您服务</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default InfoList
