import React, { Component } from 'react'

class OrderItem extends Component {
  render () {
    const com = this.props.com
    return (
      <div className='order-item' onClick={this.itemClicked.bind(this)}>
        <img src={com.img} />
        <div className='item-content'>
          <p className='title'>{ com.name }</p>
          <p className='desc'>{ com.desc }</p>
        </div>
        <i className='fa fa-angle-right' style={{color: '#ccc'}} />
      </div>
    )
  }

  itemClicked () {
    this.props.itemClicked()
  }
}

OrderItem.propTypes = {
  itemClicked: React.PropTypes.func
}

OrderItem.defaultProps = {
  itemClicked: () => {}
}

export default OrderItem
