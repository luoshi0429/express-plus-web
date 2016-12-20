// Input.js
import React, {Component, PropTypes} from 'react'

class Input extends Component {
  constructor (props) {
    super(props)
    this.value = ''
  }

  render () {
    const {
      iconClassName,
      ...other
    } = this.props

    if (iconClassName) {
      return (
        <div style={{display: 'inline-block', width: '100%'}}>
          <i className={iconClassName} />
          <input ref='input' {...other} onChange={this.handleChange.bind(this)} />
        </div>
      )
    }
    return (
      <input {...other} />
    )
  }

  handleChange (e) {
    this.props.onChange(e)
    this.value = e.target.value
  }
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  rows: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  iconClassName: PropTypes.string
}

Input.defaultProps = {
  type: 'text',
  disabled: false,
  rows: 1,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {}
}

export default Input
