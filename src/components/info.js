// info.js
import React, {Component} from 'react'
import InfoHeader from './infoHeader'
import InfoList from './infoList'
import LoadView from './loadView'

var coms = {
  'shunfeng': '顺丰',
  'zhaijisong': '宅急送',
  'zhongtong': '中通',
  'yuantong': '圆通',
  'yunda': '韵达',
  'shentong': '申通',
  'tiantian': '天天',
  'quanfengkuaidi': '全峰',
  'youshuwuliu': '优速',
  'jd': '京东',
  'neweggozzo': '新蛋',
  'xinbangwuliu': '新邦物流',
  'debangwuliu': '德邦物流',
  'huitongkuaidi': '百世汇通',
  'youzhengguonei': '国内邮政',
  'youzhengguoji': '邮政国际',
  'dhl': 'DHL(中国)',
  'dhlen': 'DHL(国际)',
  'dhlde': 'DHL(德国)',
  'ems': 'EMS',
  'emsguoji': 'EMS(国际)',
  'japanposten': 'EMS(日本)',
  'ecmsglobal': 'ECMS',
  'ecmscn': '易客满',
  'ups': 'UPS',
  'usps': 'USPS',
  'shunjiefengda': '顺捷丰达'
}

function computeTime (endStr, startStr) {
  var endDate = new Date(endStr)
  var startDate = new Date(startStr)
  console.log(endDate.getTime())
  console.log(startDate.getTime())
  console.log(endDate.getTime() - startDate.getTime())
  var deltaTime = endDate.getTime() - startDate.getTime()
  console.log(new Date(deltaTime))
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
    console.log('info: ' + this.props.location.query.num + '  ' + this.props.location.query.com)
    if (!this.state.fetchedData) {
      return <LoadView />
    }
    return (
      <div>
        <InfoHeader info={this.state.headerInfo} refreshData={this.fetchData.bind(this)} />
        <InfoList info={this.state.epInfo} />
      </div>
    )
  }

  componentDidMount () {
    this.fetchData()
  }

  componentWillReceiveProps () {
    this.fetchData()
  }

  fetchData () {
    this.setState({
      fetchedData: false
    })
    var url = `http://192.168.1.69:3000/api/search?nu=${this.props.location.query.num}&com=${this.props.location.query.com}`
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
          num: r.nu ? r.nu : this.props.location.query.num,
          com: coms[r.com] ? coms[r.com] : r.com,
          time: time
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
              time: now.toISOString().substring(0, 10) + '  ' + now.toISOString().substring(11, 19)
            }],
            headerInfo: headerInfo
          })
        }
      })
      .catch(err => console.log(err))
  }
}

export default Info
