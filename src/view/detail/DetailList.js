// detailList.js
import React, {Component} from 'react'
import DetailItem from '../../components/DetailItem'
import {computeTime, getInfoAPI, testGetDetailAPI} from '../../tool/Tool'

class DetailList extends Component {

  constructor () {
    super()
    this.state = {
      details: [],
      save: []
    }
  }

  render () {
    let details = this.state.details
    const isEmpty = (details === null) || details.length === 0
    let subView
    if (isEmpty) {
      subView = <div className='loadView'>还没有订阅任何快递...</div>
    } else {
      const detailItems = details.map(function (detail, currentIndex) {
        return <DetailItem key={currentIndex} detail={detail} removeItem={this.removeItem.bind(this)} />
      }, this)
      subView = (
        <div className='detailList' id='detailList' ref='detailList'>
          {detailItems}
        </div>
      )
    }

    return (
      <div className='detailView' ref='detailView'>
        {subView}
      </div>
    )
  }

  removeItem (item) {
    let index = -1
    let details = this.state.details
    details.map(function (detail, currentIndex) {
      if (detail.num === item.num) {
        index = currentIndex
      }
      return
    })
    if (index !== -1) {
      details.splice(index, 1)
      window.localStorage.setItem('SavedDetails', JSON.stringify(details))
      this.setState({
        details: details
      })
    }
  }

  componentWillReceiveProps (nextProps, nextContext) {
    if (nextContext.filter !== this.context.filter) {
      let fDetails = []
      const details = this.state.save
      for (let i = 0; i < details.length; i++) {
        let detail = details[i]
        let detailStr = JSON.stringify(detail)
        if (detailStr.indexOf(nextContext.filter.trim()) !== -1) {
          fDetails.push(detail)
        }
      }
      this.setState({
        details: fDetails
      })
    }
  }

  componentDidMount () {
    // 获取详情信息
    window.fetch(testGetDetailAPI)
      .then(r => r.json())
      .then(r => {
        console.log(r)
        this.setState({
          details: r,
          save: r
        })
      })

  //   let details = JSON.parse(window.localStorage.getItem('SavedDetails')) || []
  //   let data = []
  //   let index = 0
  //   details.map(function (detail, currentIndex, arr) {
  //     const url = getInfoAPI(detail.num, detail.com)
  //     window.fetch(url)
  //       .then(r => r.json())
  //       .then(r => {
  //         console.log(r)
  //         let newItem = {
  //           num: r.nu,
  //           cncom: r.cncom,
  //           com: r.com,
  //           ischeck: r.ischeck,
  //           tags: detail.tags
  //         }
  //         if (r.status === '200') {
  //           const {context, time} = r.data[0]
  //           newItem.context = context
  //           newItem.time = computeTime(new Date(), new Date(time), '前')
  //         } else {
  //           newItem.context = r.message
  //           newItem.time = '几秒前'
  //         }
  //         data[currentIndex] = newItem
  //         if (++index === arr.length) {
  //           console.log(data)
  //           this.setState({
  //             details: data,
  //             save: data
  //           })
  //         }
  //       })
  //       .catch(err => {
  //         index++
  //         console.error(err)
  //       })
  //   }, this)
  }
}

DetailList.contextTypes = {
  filter: React.PropTypes.string
}

export default DetailList
