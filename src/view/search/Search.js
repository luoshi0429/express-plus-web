// Search.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../../styles/search.css'
import NavBar from '../main/NavBar'
import SearchInput from './SearchInput'
import { browserHistory } from 'react-router'
import { coms } from '../../tool/Tool'
import Button from '../../components/Button'
import { connect } from 'react-redux'
import { fetchTips, getHistories, clearHistory, clearTips, saveHistory } from '../../actions/action'
class Search extends Component {
  render () {
    const { histories, tips } = this.props
    const historyLength = histories.length
    const historyLis = histories.map((his, index) => {
      return <li key={index}><span onClick={() => this.clickHistory(his)}>{his}</span></li>
    })
    const tipLis = tips.map((tip, index) => {
      return <li key={index}><span onClick={() => this.search(tip.comCode)}>{coms[tip.comCode] || tip.comCode}</span></li>
    })
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
    const { dispatch } = this.props
    dispatch(clearTips())
    dispatch(saveHistory(num))
    browserHistory.push({
      pathname: '/info',
      query: {
        num: num,
        com: com
      }
    })
  }

  searchChange (inputValue) {
    this.props.dispatch(fetchTips(inputValue))
  }

  back () {
    this.props.dispatch(clearTips())
    browserHistory.goBack()
  }

  clearHistory () {
    this.props.dispatch(clearHistory())
  }

  componentDidMount () {
    this.props.dispatch(getHistories())
  }
}

const mapStateToProps = (state) => {
  const { tip, searchHistory } = state
  return {
    tips: tip,
    histories: searchHistory
  }
}

export default connect(mapStateToProps)(Search)
