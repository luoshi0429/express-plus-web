// History.js
import React, {Component} from 'react'
import {computeTime, getInfoAPI} from '../../tool/Tool'

class History extends Component {
  render () {
    return (
      <div className='historyView'>History Page</div>
    )
  }

  componentDidMount () {
    const histories = JSON.parse(window.localStorage.getItem('Histories')) || []
    let data = []
    let index = 0
    histories.map(function (his, currentIndex, arr) {
      const url = getInfoAPI(his.num, his.com)
      window.fetch(url)
        .then(r => r.json())
        .then(r => {
          console.log(r)
          let newItem = {
            num: r.nu,
            cncom: r.cncom,
            com: r.com
          }
          if (r.status === '200') {
            const {context, time} = r.data[0]
            newItem.context = context
            newItem.time = computeTime(new Date(), new Date(time), '前')
          } else {
            newItem.context = r.message
            newItem.time = '几秒前'
          }
          data[currentIndex] = newItem
          if (++index === arr.length) {
            console.log(data)
          }
        })
        .catch(err => {
          index++
          console.error(err)
        })
    }, this)
  }
}

export default History
