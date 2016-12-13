// detail.js
import React, {Component} from 'react'
import DetailFooter from './detailfooter'
import DetailList from './detailList'

class Detail extends Component {

  constructor (props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  getChildContext () {
    return {
      filter: this.state.filter,
      changeFilter: this.changeFilter.bind(this)
    }
  }

  render () {
    return (
      <div className='detail'>
        <DetailList />
        <DetailFooter />
      </div>
    )
  }

  changeFilter (newfilter) {
    this.setState({
      filter: newfilter
    })
  }
}

Detail.childContextTypes = {
  filter: React.PropTypes.string,
  changeFilter: React.PropTypes.func
}

export default Detail
