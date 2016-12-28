import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import './styles/index.css'
import routers from './routers'
import store from './store/configuraStore'
import { Provider } from 'react-redux'
import { getCheckedEp, getCheckedAuto, getSearchInterval, getHistory } from './tool/data'
const initialState = Object.assign({}, {
  setting: {
    checkedEp: getCheckedEp(),
    checkedAuto: getCheckedAuto(),
    intervalValue: getSearchInterval()
  },
  searchHistory: getHistory()
})

ReactDOM.render(
  <Provider store={store(initialState)}>
    <Router routes={routers} history={browserHistory} />
  </Provider>,
  document.querySelector('#app')
)
