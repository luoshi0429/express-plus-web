import React, { Component} from 'react'
import {Link, browserHistory} from 'react-router'
import 'whatwg-fetch'
import TipView from './tips'
// import './App.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      tips: [],
      isDisabled: true
    }
  }

  onChange () {
    var inputValue = this.refs.searchInput.value
    if (inputValue.length < 6) {
      if (this.state.isDisabled) {
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
        if (r.length > 0) {
          this.setState({
            isDisabled: false
          })
        } else {
          this.setState({
            isDisabled: true
          })
        }
        this.setState({
          tips: r
        })
      })
      .catch(err => console.error(err))
  }

  onSearchBtnClick () {
    console.log('to....')
    browserHistory.push({
      pathname: '/info',
      query: {
        num: this.refs.searchInput.value,
        com: this.state.tips[0].comCode
      }
    })
    // this.context.router.push('/info/' + this.state.tips[0].comCode)
  }

  render () {
    return (
      <div>
        <div className='header'>
          <div className='button-container'>
            <Link to='/detail' className='btn'>信息</Link>
            <Link to='/setting' className='btn'>设置</Link>
          </div>
          <div className='input-container'>
            <input ref='searchInput' type='text' placeholder='输入你的快递单号...' onChange={this.onChange.bind(this)} />
          </div>
          <button ref='searchBtn' className='search-btn' disabled={this.state.isDisabled} onClick={this.onSearchBtnClick.bind(this)}>
            <i className='fa fa-search' />
          </button>
          <TipView tips={this.state.tips} />
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default App


