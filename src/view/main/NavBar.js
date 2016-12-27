// NavBar.js
import React, {Component, PropTypes} from 'react'
import { browserHistory } from 'react-router'

class NavBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    leftBarClass: PropTypes.string,
    leftBarTitle: PropTypes.string,
    rightBarClass: PropTypes.string,
    rightBarTitle: PropTypes.string,
    titleView: PropTypes.element,
    leftBarClicked: PropTypes.func,
    rightBarClicked: PropTypes.func,
    style: PropTypes.object
  };
  static defaultProps = {
    leftBarClicked: () => { browserHistory.goBack() },
    rightBarClicked: () => {}
  };
  render () {
    const {title, leftBarClass, rightBarClass, titleView, leftBarTitle, rightBarTitle, style} = this.props
    return (
      <div className='navbar' style={style}>
        <div className='navbar-item'>
          <i className={leftBarClass} onClick={this.clickLeftBar.bind(this)}>{leftBarTitle}</i>
        </div>
        <div className='title-view'>
          {title || titleView}
        </div>
        <div className='navbar-item'>
          <i className={rightBarClass} onClick={this.clickRightBar.bind(this)}>{rightBarTitle}</i>
        </div>
      </div>
    )
  }

  clickLeftBar () {
    this.props.leftBarClicked()
  }

  clickRightBar () {
    this.props.rightBarClicked()
  }
}

export default NavBar
