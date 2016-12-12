// loadView.js
import React, {Component} from 'react'

class LoadView extends Component {
  render () {
    return (
      <div className='loadView'>
        <i className='fa fa-refresh fa-spin' />正在查询...请稍后
      </div>
    )
  }
}

export default LoadView
