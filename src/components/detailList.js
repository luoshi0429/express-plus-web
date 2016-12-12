// detailList.js
import React, {Component} from 'react'
import DetailItem from './detailItem'
class DetailList extends Component {
  render () {
    var isEmpty = false
    if (isEmpty) {
      return <div className='loadView'>还没有订阅任何快递...</div>
    } else {
      return (
        <div className='detailList'>
          <DetailItem />
          <DetailItem />
          <DetailItem />
        </div>
      )
    }
  }
}

export default DetailList
