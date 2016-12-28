import React, { Component } from 'react'
import NavBar from '../main/NavBar'
import Input from '../../components/Input'
class OrderDetail extends Component {
  render () {
    return (
      <div className='order-detail'>
        <NavBar leftBarClass='fa fa-chevron-left' title='寄件' />
        <div className='input-container'>
          <Input placeholder='请填写寄件人地址' className='order-input' />
          <Input placeholder='请填写收件人地址' className='order-input' />
          <Input placeholder='请填写物品类型' className='order-input' />
        </div>
        <div className='bottom-container'>
          <label><input type='checkbox' defaultChecked='true' />我已阅读并同意<a href='#'>《服务协议》</a></label>
          <button>我要寄件</button>
        </div>
      </div>
    )
  }
}

export default OrderDetail
