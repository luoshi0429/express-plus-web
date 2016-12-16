// detailfooter.js
import React, {Component} from 'react'
import Input from './Input'
class DetailFooter extends Component {

  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }
  render () {
    return (
      <div className='detail-footer'>
        <Input className='filterInput' iconClassName='fa fa-filter' value={this.state.inputValue} placeholder='过滤订阅列表...' type='search' onChange={this.changeFilter.bind(this)} />
      </div>
    )
  }

  componentWillReceiveProps (nextProps, nextContext) {
    this.setState({
      inputValue: nextContext.filter
    })
  }

  changeFilter (e) {
    this.context.changeFilter(e.target.value)
  }
}

DetailFooter.contextTypes = {
  filter: React.PropTypes.string,
  changeFilter: React.PropTypes.func
}

export default DetailFooter
