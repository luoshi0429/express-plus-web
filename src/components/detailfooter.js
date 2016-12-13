// detailfooter.js
import React, {Component} from 'react'
class DetailFooter extends Component {
  render () {
    return (
      <div className='detail-footer'>
        <i className='fa fa-filter' />
        <input ref='filterInput' placeholder='过滤订阅列表...' type='text' onChange={this.changeFilter.bind(this)} />
      </div>
    )
  }

  componentWillReceiveProps (nextProps, nextContext) {
    if (nextContext.filter !== this.refs.filterInput.value) {
      this.refs.filterInput.value = nextContext.filter
    }
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
