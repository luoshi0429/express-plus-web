// Tag.js
import React from 'react'

const Tag = ({ color, tag, onClick }) => {
  return (
    <span className='tag' style={{backgroundColor: color}} onClick={onClick}>
      <i className='fa fa-tag' />{tag}
    </span>
  )
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
