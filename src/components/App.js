import React, { Component } from 'react'
import {Link} from 'react-router'
import 'whatwg-fetch'
// import './App.css'

class App extends Component {

  _parseJSON (response) {
    return response.text().then(function (text) {
      return text ? JSON.parse(text) : {}
    })
  }

  onChange () {
    console.log(this.refs.searchInput.value)
    // if (fetch in window) {
      var url = 'https://www.kuaidi100.com/autonumber/autoComNum?text=972200388913'
      // var url = 'http://www.kuaidi100.com/autonumber/auto?num=' + this.refs.searchInput.value
      var myInit = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Referer': 'http://www.kuaidi100.com/'
        }
      }
      // http://www.runoob.com/try/ajax/jsonp.php
      var req = new Request('http://www.guokr.com/apis/handpick/v2/article.json?limit=20&retrieve_type=by_offset&ad=1&offset=0', {method: 'GET', mode: 'no-cors'})
      fetch(req)
        .then(r => { console.log(r) ; return r.json()})
        .then(r => console.log('res: ' + r))
        .catch(err => console.log('error: ' + err))

      // fetch (url, myInit)
      //   .then(r => this._parseJSON(r))
      //   .then(r => console.log(r))
      //   .catch(err => console.error(err))
    // }
    
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
            <div className='tips hidden'>圆通</div>
          </div>
          <Link to='/info' className='btn search-btn'>搜索</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default App

// <button className='search-btn'>搜索</button>

