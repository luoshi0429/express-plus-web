// MainHeader.js
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link, browserHistory} from 'react-router'
import 'whatwg-fetch'
import TipView from './tips'
import '../styles/mainHeader.css'

class MainHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tips: [],
      isDisabled: true
    }
    this.height
  }

  onChange () {
    var inputValue = this.refs.searchInput.value
    if (inputValue.length < 6) {
      if (!this.state.isDisabled) {
        this.setState({
          isDisabled: true,
          tips: []
        })
      }
      return
    }

    var url = 'http://express-plus.leanapp.cn/api/auto?nu=' + inputValue
    // var myInit = {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Referer': 'http://www.kuaidi100.com/'
    //   }
    // }
    window.fetch(url)
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
        num: this.refs.searchInput.value,
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
          <input ref='searchInput' type='text' placeholder='输入你的快递单号...' onChange={this.onChange.bind(this)} />
        </div>
        <button ref='searchBtn' className='search-btn' disabled={isDisabled} onClick={this.onSearchBtnClick.bind(this)}>
          <i className='fa fa-search' />
        </button>
        <TipView tips={tips} tipClicked={this.onSearchBtnClick.bind(this)} />
      </div>
    )
  }

  componentDidUpdate () {
    var detailList = document.querySelector('.detailView')
    var infoView = document.querySelector('.infoView')
    var height = ReactDOM.findDOMNode(this.refs.header).clientHeight + 'px'
    if (detailList && detailList.style.top !== height) {
      detailList.style.top = height
    }

    if (infoView && infoView.style.top !== height) {
      infoView.style.top = height
    }
  }
}

export default MainHeader
