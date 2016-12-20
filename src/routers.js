// routers.js
import React from 'react'
import App from './view/main/App.js'
import {Route, IndexRedirect} from 'react-router'
import Detail from './view/detail/Detail'
import Setting from './view/setting/Setting'
import Info from './view/info/Info'
import History from './view/history/History'
import Search from './view/search/Search'
module.exports = (
  <Route path='/' component={App}>
    <IndexRedirect to='/detail' />
    <Route path='detail' component={Detail} title='详情' />
    <Route path='info' component={Info} hideRightBar='true' leftBarClass='fa fa-chevron-left' />
    <Route path='setting' component={Setting} title='设置' hideRightBar='true' />
    <Route path='history' component={History} title='历史记录' />
    <Route path='search' component={Search} hideTab='true' hideNav='true' />
  </Route>
)
