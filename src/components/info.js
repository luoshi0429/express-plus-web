// info.js
import React, {Component} from 'react'
import InfoHeader from './infoHeader'
import InfoList from './infoList'
import LoadView from './loadView'
import InfoFooter from './infoFooter'

function computeTime (endStr, startStr) {
  var endDate = new Date(endStr)
  var startDate = new Date(startStr)
  var deltaTime = endDate.getTime() - startDate.getTime()
  var deltaData = new Date(deltaTime)
  var year = deltaData.getYear() - 1970
  var month = deltaData.getMonth()
  var day = deltaData.getDate()
  var hour = deltaData.getHours()
  var res = year > 0 ? (year + '年内') : (month > 0 ? (month + '月内') : (day > 0 ? (day + '天内') : ((hour > 0) ? (hour + '小时内') : '一小时内')))
  return res
}

class Info extends Component {
  constructor () {
    super()
    this.state = {
      fetchedData: false,
      epInfo: [],
      headerInfo: {}
    }
  }

  render () {
    if (!this.state.fetchedData) {
      return (
        <div>
          <div className='infoView'><LoadView /></div>
        </div>
      )
    }
    const {headerInfo, epInfo} = this.state
    return (
      <div>
        <div className='infoView'>
          <InfoHeader headerInfo={headerInfo} epInfo={epInfo} refreshData={this.fetchData.bind(this)} />
          <InfoList info={epInfo} />
        </div>
        <InfoFooter num={headerInfo.num} />
      </div>
    )
  }

  componentDidMount () {
    const {num, com} = this.props.location.query
    this.fetchData(num, com)
  }

  componentWillReceiveProps (nextprops) {
    const {num, com} = nextprops.location.query
    this.fetchData(num, com)
  }

  fetchData (num, com) {
    this.setState({
      fetchedData: false
    })
    // var url = `http://192.168.1.69:3000/api/search?nu=${num}&com=${com}`
    var url = 'http://192.168.1.105:3005/info'
    console.log(url)
    window.fetch(url)
      .then(r => r.json())
      .then(r => {
        console.log(r)
        var time
        if (r.data.length <= 0) {
          time = '几秒前'
        } else {
          time = computeTime(r.data[0].time, r.data[r.data.length - 1].time)
        }
        var headerInfo = {
          num: r.nu || num,
          com: r.com,
          time: time,
          cncom: r.cncom
        }
        if (r.status === '200') {
          this.setState({
            fetchedData: true,
            epInfo: r.data,
            headerInfo: headerInfo
          })
        } else {
          var now = new Date()
          this.setState({
            fetchedData: true,
            epInfo: [{
              context: r.message,
              time: now.toISOString().substring(0, 10) + ' ' + now.toISOString().substring(11, 19)
            }],
            headerInfo: headerInfo
          })
        }
      })
      .catch(err => console.log(err))
  }
}

export default Info
