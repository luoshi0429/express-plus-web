// routers.js
import React from 'react'
import App from './view/main/App.js'
import {Route, IndexRedirect} from 'react-router'
import Detail from './view/detail/Detail'
import Setting from './view/setting/Setting'
import Info from './view/info/Info'
import Order from './view/order/Order'
import Search from './view/search/Search'
import OrderDetail from './view/order/OrderDetail'
module.exports = (
  <Route>
    <Route path='/' component={App}>
      <IndexRedirect to='/detail' />
      <Route path='detail' component={Detail} title='详情' />
      <Route path='setting' component={Setting} title='设置' hideRightBar='true' />
      <Route path='order' component={Order} title='寄快递' />
      <Route path='search' component={Search} hideTab='true' hideNav='true' />
    </Route>
    <Route path='info' component={Info} hideRightBar='true' leftBarClass='fa fa-chevron-left' />
    <Route path='orderDetail' component={OrderDetail} />
</Route>
)
