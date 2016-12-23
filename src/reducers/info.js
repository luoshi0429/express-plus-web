import * as types from '../constants/actionTypes'
import { getDetailLocal, saveDetailLocal } from '../tool/data'

const getFilters = (action) => {
  var currentDetail = getDetailLocal().filter(function (ele) {
    return ele.num === action.currentNum
  }, this)
  if (currentDetail.length > 0) {
    currentDetail = currentDetail[0]
  }
  return currentDetail.tags || []
}

const saveFilters = (action) => {
  const tags = action.tags
  console.log(tags)
  if (tags.length === 0) {
    return
  }
  var details = getDetailLocal()
  for (let i = 0; i < details.length; i++) {
    var detail = details[i]
    if (detail.num === action.currentNum) {
      detail.tags = tags
      break
    }
  }
  saveDetailLocal(details)
}

const info = (state = {headerInfo: {}, epInfo: [], fetchedData: false, filterTags: [], hasSaved: false, index: -1}, action) => {
  switch (action.type) {
    case types.RECEIVE_INFO:
      let saved = false
      let index
      const items = getDetailLocal()
      for (let i = 0; i < items.length; i++) {
        let item = items[i]
        if (item.num === action.num) {
          saved = true
          index = i
        }
      }
      return Object.assign({}, state, {
        headerInfo: action.infoes.headerInfo,
        epInfo: action.infoes.epInfo,
        fetchedData: action.infoes.fetchedData,
        hasSaved: saved,
        index: index
      })
    case types.GET_FILTER:
      return Object.assign({}, state, {
        filterTags: getFilters(action)
      })
    case types.SAVE_FILTER:
      saveFilters(action)
      return state
    case types.CHANGE_FILTER:
      return Object.assign({}, state, {
        filterTags: action.tags
      })
    case types.STAR_DETAIL:
      return Object.assign({}, state, {
        hasSaved: !state.hasSaved
      })
    default:
      return state
  }
}

export default info
