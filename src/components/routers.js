// routers.js
import React from 'react'
import App from './App.js'
import {Route, IndexRoute} from 'react-router'
import Detail from './detail'
import Setting from './setting'
import Info from './info'
module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Detail} />
    <Route path='/detail' component={Detail} />
    <Route path='/setting' component={Setting} />
    <Route path='/info' component={Info} />
  </Route>
 )
