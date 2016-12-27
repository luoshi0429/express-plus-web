// TabBar.js
import React, {Component} from 'react'
import {Link} from 'react-router'

class TabBar extends Component {
  render () {
    return (
      <div className='tabbar'>
        <div className='tabbar-item'>
          <Link to='/detail' className='link' activeClassName='activeStyle'>
            <i className='fa fa-list-ul' />
          </Link>
        </div>
        <div className='tabbar-item'>
          <Link to='/order' className='link' activeClassName='activeStyle'>
            <i className='fa  fa-history' />
          </Link>
        </div>
        <div className='tabbar-item'>
          <Link className='link' activeClassName='activeStyle'>
            <i className='fa fa-map-marker' />
          </Link>
        </div>
        <div className='tabbar-item'>
          <Link to='/setting' className='link' activeClassName='activeStyle'>
            <i className='fa fa-cog' />
          </Link>
        </div>
      </div>
    )
  }
}

export default TabBar
