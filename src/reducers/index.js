import { combineReducers } from 'redux'
import info from './info'
import details from './detail'
import searchHistory from './search'
import { GET_TIP, CLEAR_TIP } from '../constants/actionTypes'

const tip = (state = [], action) => {
  switch (action.type) {
    case GET_TIP:
      return action.tips
    case CLEAR_TIP:
      return []
    default:
      return state
  }
}

export default combineReducers({
  info,
  details,
  searchHistory,
  tip
})
