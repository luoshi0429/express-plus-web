import * as types from '../constants/actionTypes'
import { saveDetailLocal, getDetailLocal } from '../tool/data'
const details = (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_DETAILS:
      return state
    case types.RECEIVE_DETAILS:
      return Object.assign([], action.details)
    case types.REMOVE_DETAIL:
      let index = -1
      let details = action.details
      details.map((detail, currentIndex) => {
        if (detail.num === action.currentNum) {
          index = currentIndex
        }
      })
      if (index !== -1) {
        details.splice(index, 1)
        saveDetailLocal(details)
      }
      return Object.assign([], details)
    case types.ADD_DETAILLOCAL:
      let items = getDetailLocal() || []
      const { num, com } = action
      var newItem = {
        num: num,
        com: com
      }
      items.unshift(newItem)
      saveDetailLocal(items)
      return state
    case types.REMOVE_DETAILLOCAL: {
      let items = getDetailLocal() || []
      const { num, com } = action
      for (let i = 0; i < items.length; i++) {
        let item = items[i]
        if (item.num === num && item.com === com) {
          items.splice(i, 1)
          break
        }
      }
      saveDetailLocal(items)
      return state
    }
    default:
      return state
  }
}

export default details
