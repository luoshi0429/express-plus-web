// Tag.js
import React, {Component} from 'react'

class Tag extends Component {
  render () {
    return (
      <span className='tag' style={{backgroundColor: this.props.color}} onClick={this.clicked.bind(this)}><i className='fa fa-tag' />{this.props.tag}</span>
    )
  }

  clicked (e) {
    this.props.onClick(e)
  }
}

Tag.propTypes = {
  tag: React.PropTypes.string,
  color: React.PropTypes.string,
  onClick: React.PropTypes.func
}

Tag.defaultProps = {
  color: '#337ab7',
  onClick: function () {}
}

export default Tag
