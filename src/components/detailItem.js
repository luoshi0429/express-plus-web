// detailItem.js
import React, {Component} from 'react'
import {browserHistory} from 'react-router'

var colors = ['pink', '#5bc0de', '#5cb85c', '#337ab7']

class DetailItem extends Component {
  render () {
    var detail = this.props.detail
    var tags = detail.tags || []
    var tagLis = tags.map(function (tag, currentIndex) {
      var color = colors[Math.floor(Math.random() * 4)]
      var colorStyle = {backgroundColor: color}
      return <li key={currentIndex} onClick={this.filter.bind(this)} style={colorStyle}><span><i className='fa fa-tag' />{tag}</span></li>
    }, this)
    return (
      <div className='detailItem'>
        <div className='detailItem-header clearfix'>
          <div className='float-left'>
            <span className='detailItem-number'>{detail.num}</span>
            {detail.ischeck === '1' ? <i className='fa fa-check-square success' /> : <i className='fa fa-truck warning' />}
          </div>
          <div className='float-right'>
            <i className='fa fa-search info' onClick={this.search.bind(this)} />
            <i className='fa fa-trash-o danger' onClick={this.remove.bind(this)} />
          </div>
        </div>
        <div className='detailItem-content'>
          <span>{detail.time}</span>
          <i className='fa fa-map-marker' />
          <span>{detail.context}</span>
        </div>
        <ul className='detailItem-footer'>
          <li onClick={this.filter.bind(this)} className='epCom'><span><i className='fa fa-tag' />{detail.cncom}</span></li>
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
    var filter = e.target.innerText
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
