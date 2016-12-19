// routers.js
import React from 'react'
import App from './view/main/App.js'
import {Route, Redirect, IndexRedirect} from 'react-router'
import Detail from './view/detail/Detail'
import Setting from './view/setting/Setting'
import Info from './view/info/Info'
import Home from './view/main/Home'
import History from './view/history/History'
module.exports = (
  <Route path='/' component={App}>
    <IndexRedirect to='/home/detail' />
    <Route path='home' component={Home}>
      <Route path='detail' component={Detail} />
      <Route path='info' component={Info} />
      <Redirect from='/info' to='/home/info' />
    </Route>
    <Route path='setting' component={Setting} />
    <Route path='history' component={History} />
  </Route>
)

// <IndexRoute component={Home} />
// <Redirect from='home' to='home/detail' />
// <Route path='/detail' component={Detail} />
// <Route path='/info' component={Info} />
