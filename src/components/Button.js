// Button.js
import React, {Component, PropTypes} from 'react'

class Button extends Component {
  render () {
    const {
      iconClassName,
      value,
      ...other
    } = this.props
    return (
      <button {...other}>
        <i className={iconClassName} />{value}
      </button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  iconClassName: PropTypes.string,
  value: PropTypes.string
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {}
}

export default Button
