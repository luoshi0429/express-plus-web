// infoHeader.js
import React, { Component } from 'react'
import Button from '../../components/Button'
import { connect } from 'react-redux'
import { removeDetailLocal, addDetailLocal, starDetail } from '../../actions/action'
class InfoHeader extends Component {
  render () {
    const { hasSaved, headerInfo } = this.props
    var starStyle = 'fa warning iconBtn'
    starStyle = starStyle + (hasSaved ? ' fa-star' : ' fa-star-o')
    return (
      <div className='info-header'>
        <div className='clearfix'>
          <div className='float-left'>
            <span className='ep-number'>{headerInfo.num}</span>
            <Button iconClassName='fa fa-refresh info iconBtn' onClick={this.refreshData.bind(this)} />
          </div>
          <Button className='float-right ' iconClassName={starStyle} onClick={this.stared.bind(this)} />
        </div>
        <p>公司：<span>{headerInfo.cncom}</span></p>
        <p>耗时：<span>{headerInfo.time}</span></p>
      </div>
    )
  }
  stared (e) {
    const { num, com } = this.props.headerInfo
    const { dispatch, hasSaved } = this.props
    dispatch(starDetail(num))
    if (hasSaved) {
      dispatch(removeDetailLocal(num, com))
    } else {
      dispatch(addDetailLocal(num, com))
    }
  }

  refreshData () {
    this.props.refreshData()
  }
}
InfoHeader.propTypes = {
  headerInfo: React.PropTypes.object,
  refreshData: React.PropTypes.func
}

InfoHeader.defaultProps = {
  refreshData: () => {}
}

const mapStateToProps = (state) => {
  const { hasSaved, index } = state.info
  return {
    hasSaved: hasSaved,
    index: index
  }
}

export default connect(mapStateToProps)(InfoHeader)
