// DetailHeader.js - 废弃
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TipView from '../../components/TipView'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {browserHistory} from 'react-router'
import {getTipsAPI} from '../../tool/Tool'

class DetailHeader extends Component {
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

    window.fetch(getTipsAPI(inputValue))
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

    let num = ReactDOM.findDOMNode(this.refs.searchInput).value
    browserHistory.push({
      pathname: '/info',
      query: {
        num: num,
        com: com
      }
    })
  }

  render () {
    const {tips, isDisabled} = this.state
    const searchBtnClick = this.onSearchBtnClick.bind(this)
    return (
      <div className='detail-header' ref='detailHeader'>
        <div className='input-container'>
          <Input ref='searchInput' className='headerInput' placeholder='输入你的快递单号...' onChange={this.onChange.bind(this)} />
          <Button className='search-btn' iconClassName='fa fa-search' disabled={isDisabled} onClick={searchBtnClick} />
        </div>
        <TipView tips={tips} tipClicked={searchBtnClick} />
      </div>
    )
  }

  componentDidUpdate () {
    let detailList = document.querySelector('.detailView')
    var infoView = document.querySelector('.infoView')
    let detailHeader = this.refs.detailHeader
    const height = detailHeader.clientHeight + 'px'
    if (detailList && detailList.style.top !== height) {
      detailList.style.top = height
    }

    if (infoView && infoView.style.top !== height) {
      infoView.style.top = height
    }
  }
}

export default DetailHeader
