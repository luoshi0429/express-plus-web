import { createStore, applyMiddleware, compose } from 'redux'
import storage from '../utils/storage'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  storage(),
)

export default function (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)
  return store
}
