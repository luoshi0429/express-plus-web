// detailItem.js
import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import {getRandomColor} from '../tool/Tool'
import Tag from './Tag'
import Button from './Button'

class DetailItem extends Component {
  constructor (props) {
    super(props)
    this.colors = []
  }

  render () {
    const detail = this.props.detail
    const tags = detail.tags || []
    const tagLis = tags.map(function (tag, currentIndex) {
      this.colors.push(getRandomColor())
      const color = this.colors[currentIndex]
      return <li key={currentIndex} onClick={this.filter.bind(this)}><Tag tag={tag} color={color} /></li>
    }, this)
    return (
      <div className='detailItem'>
        <div className='detailItem-header clearfix'>
          <div className='float-left'>
            <span className='detailItem-number'>{detail.num}</span>
            {detail.ischeck === '1' ? <i className='fa fa-check-square success' /> : <i className='fa fa-truck warning' />}
          </div>
          <div className='float-right'>
            <Button iconClassName='fa fa-search info iconBtn' onClick={this.search.bind(this)} />
            <Button iconClassName='fa fa-trash-o danger iconBtn' onClick={this.remove.bind(this)} />
          </div>
        </div>
        <div className='detailItem-content'>
          <span>{detail.time}</span>
          <i className='fa fa-map-marker' />
          <span>{detail.context}</span>
        </div>
        <ul className='detailItem-footer'>
          <li onClick={this.filter.bind(this)}><Tag tag={detail.cncom} color='#c0c0c0' /></li>
          {tagLis}
        </ul>
      </div>
    )
  }

  remove () {
    this.props.removeItem(this.props.detail)
  }

  search () {
    const {num, com} = this.props.detail
    browserHistory.push({
      pathname: '/info',
      query: {
        num: num,
        com: com
      }
    })
  }

  filter (e) {
    const filter = e.target.innerText
    this.context.changeFilter(filter)
  }
}

DetailItem.propTypes = {
  detail: React.PropTypes.object.isRequired,
  removeItem: React.PropTypes.func
}

DetailItem.contextTypes = {
  changeFilter: React.PropTypes.func
}

export default DetailItem
