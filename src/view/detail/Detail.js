// Detail.js
import React, {Component} from 'react'
import DetailFooter from './Detailfooter'
import DetailList from './DetailList'
import '../../styles/detail.css'

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
        <DetailList ref='detailList' />
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
