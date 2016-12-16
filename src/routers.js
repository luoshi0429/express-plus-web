// routers.js
import React from 'react'
import App from './view/main/App.js'
import {Route, IndexRoute} from 'react-router'
import Detail from './view/detail/detail'
import Setting from './view/setting/setting'
import Info from './view/info/info'
module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Detail} />
    <Route path='/detail' component={Detail} />
    <Route path='/setting' component={Setting} />
    <Route path='/info' component={Info} />
  </Route>
 )
