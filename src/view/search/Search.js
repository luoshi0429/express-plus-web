// Search.js
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import '../../styles/search.css'
import {getHistory, saveHistory, clearHistories} from '../../tool/data'
import NavBar from '../main/NavBar'
import SearchInput from './SearchInput'
import {browserHistory} from 'react-router'
import {getTipsAPI, coms} from '../../tool/Tool'
import Button from '../../components/Button'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      histories: getHistory(),
      tips: []
    }
  }
  render () {
    const historyLis = this.state.histories.map((his, index) => {
      return <li key={index}><span onClick={() => this.clickHistory(his)}>{his}</span></li>
    })
    const tipLis = this.state.tips.map((tip, index) => {
      return <li key={index}><span onClick={() => this.search(tip.comCode)}>{coms[tip.comCode] || tip.comCode}</span></li>
    })
    const historyLength = this.state.histories.length
    return (
      <div className='searchView'>
        <div className='search-nav'>
          <NavBar style={{fontSize: '1rem'}} hideRightBar='true' rightBarTitle='取消' titleView={<SearchInput ref='searchInput' onChange={(e) => this.searchChange(e)} />} rightBarClicked={() => this.back()} />
        </div>
        <ul className='tipsView'>
          {tipLis}
        </ul>
        <div className='historyView'>
          <h4>{historyLength ? '历史记录' : ''}</h4>
          <ul>
            {historyLis}
          </ul>
          {historyLength ? <Button value='清空历史搜索' iconClassName='fa fa-trash-o' className='clearHistoryBtn' onClick={() => this.clearHistory()} /> : ''}
        </div>
      </div>
    )
  }

  clickHistory (his) {
    ReactDOM.findDOMNode(this.refs.searchInput).value = his
    this.searchChange(his)
  }

  search (com) {
    const num = ReactDOM.findDOMNode(this.refs.searchInput).value
    saveHistory(num)
    browserHistory.push({
      pathname: '/info',
      query: {
        num: num,
        com: com
      }
    })
  }

  searchChange (inputValue) {
    if (inputValue.length < 6) {
      if (this.state.tips.length !== 0) {
        this.setState({
          tips: []
        })
      }
      return
    }

    window.fetch(getTipsAPI(inputValue))
      .then(r => r.json())
      .then(r => {
        console.log(r)
        this.setState({
          tips: r.auto
        })
      })
      .catch(err => console.error(err))
  }

  back () {
    browserHistory.goBack()
  }

  clearHistory () {
    clearHistories()
    this.setState({
      histories: []
    })
  }
}

export default Search
