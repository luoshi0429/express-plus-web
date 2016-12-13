// detailList.js
import React, {Component} from 'react'
import DetailItem from './detailItem'

function computeTime (endDate, startDate) {
  var deltaTime = endDate.getTime() - startDate.getTime()
  var deltaData = new Date(deltaTime)
  var year = deltaData.getYear() - 70
  var month = deltaData.getMonth()
  var day = deltaData.getDate() - 1
  var hour = deltaData.getHours() - 7
  var res = year > 0 ? (year + '年前') : (month > 0 ? (month + '月前') : (day > 0 ? (day + '天前') : ((hour > 0) ? (hour + '小时前') : '1小时前')))
  return res
}

class DetailList extends Component {

  constructor () {
    super()
    this.state = {
      details: [],
      save: []
    }
  }

  render () {
    var isEmpty = (this.state.details === null) || this.state.details.length === 0
    if (isEmpty) {
      return <div className='loadView'>还没有订阅任何快递...</div>
    } else {
      var detailItems = this.state.details.map(function (detail, currentIndex) {
        return <DetailItem key={currentIndex} detail={detail} removeItem={this.removeItem.bind(this)} />
      }, this)
      return (
        <div className='detailList'>
          {detailItems}
        </div>
      )
    }
  }

  removeItem (item) {
    var index = -1
    this.state.details.map(function (detail, currentIndex) {
      if (detail.num === item.num) {
        index = currentIndex
      }
      return
    })
    if (index !== -1) {
      this.state.details.splice(index, 1)
      window.localStorage.setItem('SavedDetails', JSON.stringify(this.state.details))
      this.setState({
        details: this.state.details
      })
    }
  }

  componentWillReceiveProps (nextProps, nextContext) {
    if (nextContext) {
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
    var details = JSON.parse(window.localStorage.getItem('SavedDetails')) || []
    var data = []
    var index = 0
    details.map(function (detail, currentIndex, arr) {
      var url = `http://192.168.1.69:3000/api/search?nu=${detail.num}&com=${detail.com}`
      window.fetch(url)
        .then(r => r.json())
        .then(r => {
          console.log(r)
          var newItem = {
            num: r.nu,
            cncom: r.cncom,
            com: r.com,
            isCheck: r.ischeck
          }
          if (r.status === '200') {
            const {context, time} = r.data[0]
            newItem.context = context
            newItem.time = computeTime(new Date(), new Date(time))
          } else {
            newItem.context = r.message
            newItem.time = '几秒前'
          }
          data[currentIndex] = newItem
          if (++index === arr.length) {
            console.log(data)
            this.setState({
              details: data,
              save: data
            })
          }
        })
        .catch(err => {
          index++
          console.error(err)
        })
    }, this)
  }
}

DetailList.contextTypes = {
  filter: React.PropTypes.string
}

export default DetailList
