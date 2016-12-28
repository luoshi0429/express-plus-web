import * as types from '../constants/actionTypes'
import {getHistory, clearHistories, saveHistory} from '../tool/data'
const searchHistory = (state = [], action) => {
  switch (action.type) {
    // case types.GET_HISTORY:
    //   return getHistory()
    case types.CLEAR_HISTORY:
      clearHistories()
      return []
    case types.SAVE_HISTORY:
      saveHistory(action.num)
      return getHistory()
    default:
      return state
  }
}

export default searchHistory
