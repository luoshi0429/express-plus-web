// detailList.js
import React, {Component} from 'react'
import DetailItem from './detailItem'
import computeTime from './Tool'

class DetailList extends Component {

  constructor () {
    super()
    this.state = {
      details: [],
      save: []
    }
  }

  render () {
    var details = this.state.details
    var isEmpty = (details === null) || details.length === 0
    var subView
    if (isEmpty) {
      subView = <div className='loadView'>还没有订阅任何快递...</div>
    } else {
      var detailItems = details.map(function (detail, currentIndex) {
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
    var index = -1
    var details = this.state.details
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
    if (nextContext.filter) {
      var fDetails = []
      var details = this.state.save
      for (let i = 0; i < details.length; i++) {
        var detail = details[i]
        var detailStr = JSON.stringify(detail)
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
    window.fetch('http://192.168.1.105:3004/data')
      .then(r => r.json())
      .then(r => {
        console.log(r)
        this.setState({
          details: r,
          save: r
        })
      })
  //   var details = JSON.parse(window.localStorage.getItem('SavedDetails')) || []
  //   var data = []
  //   var index = 0
  //   details.map(function (detail, currentIndex, arr) {
  //     var url = `http://192.168.1.69:3000/api/search?nu=${detail.num}&com=${detail.com}`
  //     window.fetch(url)
  //       .then(r => r.json())
  //       .then(r => {
  //         console.log(r)
  //         var newItem = {
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
