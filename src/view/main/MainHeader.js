// MainHeader.js
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link, browserHistory} from 'react-router'
import 'whatwg-fetch'
import TipView from '../../components/TipView'
import '../../styles/mainHeader.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {getTipsAPT} from '../../tool/Tool'

class MainHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tips: [],
      isDisabled: true
    }
    this.height
  }

  onChange (e) {
    const inputValue = e.target.value
    if (inputValue.length < 6) {
      if (!this.state.isDisabled) {
        this.setState({
          isDisabled: true,
          tips: []
        })
      }
      return
    }

    // var url = 'http://express-plus.leanapp.cn/api/auto?nu=' + inputValue
    // var myInit = {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Referer': 'http://www.kuaidi100.com/'
    //   }
    // }
    window.fetch(getTipsAPT(inputValue))
      .then(r => r.json())
      .then(r => {
        console.log(r)
        if (r.auto.length > 0) {
          this.setState({
            isDisabled: false
          })
        } else {
          this.setState({
            isDisabled: true
          })
        }
        this.setState({
          tips: r.auto
        })
      })
      .catch(err => console.error(err))
  }

  onSearchBtnClick (com) {
    if (typeof com === 'object') {
      com = this.state.tips[0].comCode
    }
    browserHistory.push({
      pathname: '/info',
      query: {
        num: ReactDOM.findDOMNode(this.refs.searchInput).value,
        com: com
      }
    })
    // this.context.router.push('/info/' + this.state.tips[0].comCode)
  }

  render () {
    const {tips, isDisabled} = this.state
    return (
      <div className='header' ref='header'>
        <div className='button-container'>
          <Link to='/detail' className='btn primary-bg'><i className='fa fa-list-ul' /></Link>
          <Link to='/setting' className='btn info-bg'><i className='fa fa-cog' /></Link>
        </div>
        <div className='input-container'>
          <Input ref='searchInput' className='headerInput' placeholder='输入你的快递单号...' onChange={this.onChange.bind(this)} />
        </div>
        <Button className='search-btn' iconClassName='fa fa-search' disabled={isDisabled} onClick={this.onSearchBtnClick.bind(this)} />
        <TipView tips={tips} tipClicked={this.onSearchBtnClick.bind(this)} />
      </div>
    )
  }

  componentDidUpdate () {
    var detailList = document.querySelector('.detailView')
    var infoView = document.querySelector('.infoView')
    const height = ReactDOM.findDOMNode(this.refs.header).clientHeight + 'px'
    if (detailList && detailList.style.top !== height) {
      detailList.style.top = height
    }

    if (infoView && infoView.style.top !== height) {
      infoView.style.top = height
    }
  }
}

export default MainHeader
