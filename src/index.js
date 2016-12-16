import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import './styles/index.css'
import routers from './routers'

ReactDOM.render(
  <Router routes={routers} history={browserHistory} />,
  document.querySelector('#app')
)
