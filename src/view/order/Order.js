import React, { Component } from 'react'
import OrderItem from './OrderItem'
import '../../styles/order.css'
import { fetchEpComs } from '../../actions/action'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
class Order extends Component {
  render () {
    return (
      <div className='order'>
        { this.props.coms.map((com, index) => {
          return <OrderItem key={index} com={com} itemClicked={this.pushTo.bind(this, com)} />
        }) }
      </div>
    )
  }

  componentDidMount () {
    this.props.dispatch(fetchEpComs())
  }

  pushTo (com) {
    console.log(com)
    browserHistory.push({
      pathname: 'orderDetail'
    })
  }
}

const mapStateToProps = (state) => {
  return {
    coms: state.coms
  }
}
export default connect(mapStateToProps)(Order)
