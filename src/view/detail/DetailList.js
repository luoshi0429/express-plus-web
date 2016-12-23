// detailList.js
import React, { Component } from 'react'
import DetailItem from '../../components/DetailItem'
import { connect } from 'react-redux'
import { fetchDetails, removeDetail } from '../../actions/action'
class DetailList extends Component {
  render () {
    let details = this.props.details
    const isEmpty = (details === null) || details.length === 0
    let subView
    if (isEmpty) {
      subView = <div className='loadView'>还没有订阅任何快递...</div>
    } else {
      const detailItems = details.map(function (detail, currentIndex) {
        return <DetailItem key={currentIndex} detail={detail} removeItem={this.removeItem.bind(this)} />
      }, this)
      subView = (
        <div className='detailList' id='detailList' ref='detailList'>
          {detailItems}
        </div>
      )
    }

    return (
      <div className='detailView' ref='detailView'>
        {subView}
      </div>
    )
  }

  removeItem (item) {
    const {dispatch, details} = this.props
    dispatch(removeDetail(item.num, details))
  }

  componentDidMount () {
    this.props.dispatch(fetchDetails())
  }
}

DetailList.contextTypes = {
  filter: React.PropTypes.string
}

const mapStateToProps = (state) => {
  const { isFetching, details } = state
  return {
    isFetching,
    details
  }
}

export default connect(mapStateToProps)(DetailList)
