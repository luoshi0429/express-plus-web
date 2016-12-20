// info.js
import React, {Component} from 'react'
import InfoHeader from './InfoHeader'
import InfoList from './InfoList'
import InfoFooter from './InfoFooter'
import {computeTime, testGetInfoAPI} from '../../tool/Tool'
import '../../styles/info.css'

function LoadView () {
  return (
    <div className='loadView'>
      <i className='fa fa-refresh fa-spin' />正在查询...请稍后
    </div>
  )
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
          <div className='infoView'>{LoadView()}</div>
        </div>
      )
    }
    const {headerInfo, epInfo} = this.state
    return (
      <div>
        <div className='infoView'>
          <InfoHeader headerInfo={headerInfo} refreshData={this.fetchData.bind(this)} />
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
    // const url = getInfoAPI(num, com)
    const url = testGetInfoAPI
    console.log(url)
    window.fetch(url)
      .then(r => r.json())
      .then(r => {
        console.log(r)
        const endDate = new Date(r.data[0].time)
        const startDate = new Date(r.data[r.data.length - 1].time)
        const time = r.data.length <= 0 ? '几秒前' : computeTime(endDate, startDate, '内')
        const headerInfo = {
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
          const now = new Date()
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
