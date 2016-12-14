// infoList.js
import React, {Component} from 'react'

class InfoList extends Component {
  render () {
    var tbs = this.props.info.map(function (i, currentIndex) {
      var cls = currentIndex % 2 === 0 ? 'tr-odd' : 'tr-even'
      return (
        <tr className={cls} key={currentIndex}>
          <td style={{width: '100px'}}><span>{i.time}</span></td>
          <td><i className='fa fa-map-marker' /></td>
          <td><span>{i.context}</span></td>
        </tr>
      )
    })

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
        <div className='info-table'>
          <table>
            <tbody>
              {tbs}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default InfoList
