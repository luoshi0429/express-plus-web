// info.js
import React, { Component } from 'react'
import InfoHeader from './InfoHeader'
import InfoList from './InfoList'
import InfoFooter from './InfoFooter'
import '../../styles/info.css'
import { connect } from 'react-redux'
import { fetchInfo } from '../../actions/action'
import NavBar from '../main/NavBar'

function LoadView () {
  return (
    <div className='loadView'>
      <i className='fa fa-refresh fa-spin' />正在查询...请稍后
    </div>
  )
}

class Info extends Component {
  render () {
    const { fetchedData, headerInfo, epInfo } = this.props
    if (!fetchedData) {
      return (
        <div>
          <div className='infoView'>{LoadView()}</div>
        </div>
      )
    }
    return (
      <div>
        <NavBar leftBarClass='fa fa-chevron-left' title={headerInfo.num} />
        <div className='infoView'>
          <InfoHeader headerInfo={headerInfo} refreshData={this.fetchData.bind(this)} />
          <InfoList info={epInfo} />
        </div>
        <InfoFooter num={headerInfo.num} />
      </div>
    )
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    const {num, com} = this.props.location.query
    this.props.dispatch(fetchInfo(num, com))
  }

  // componentWillReceiveProps (nextprops) {
  //   const {num, com} = nextprops.location.query
  //   this.fetchData(num, com)
  // }
}

const mapStateToProps = (state) => {
  const { info } = state
  return {
    fetchedData: info.fetchedData,
    epInfo: info.epInfo,
    headerInfo: info.headerInfo
  }
}

export default connect(mapStateToProps)(Info)
