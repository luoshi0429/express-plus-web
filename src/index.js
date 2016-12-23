import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import './styles/index.css'
import routers from './routers'
import store from './store/configuraStore'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store()}>
    <Router routes={routers} history={browserHistory} />
  </Provider>,
  document.querySelector('#app')
)
