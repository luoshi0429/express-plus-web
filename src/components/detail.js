// detail.js
import React, {Component} from 'react'
import DetailFooter from './detailfooter'
import DetailList from './detailList'

class Detail extends Component {
  render () {
    return (
      <div className='detail'>
        <DetailList />
        <DetailFooter />
      </div>
    )
  }
}

export default Detail
