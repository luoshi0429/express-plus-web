import { CHANGE_AUTO, CHANGE_CHECKED, CHANGE_FILTER } from '../constants/actionTypes'
const setting = (state = {checkedAuto: '1', checkedEp: '1', intervalValue: 30}, action) => {
  switch (action.type) {
    case CHANGE_AUTO:
      return Object.assign({}, state, {
        checkedAuto: action.auto
      })
    case CHANGE_CHECKED:
      return Object.assign({}, state, {
        checkedEp: action.checked
      })
    case CHANGE_FILTER:
      return Object.assign({}, state, {
        intervalValue: action.interval
      })
    default:
      return state
  }
}

export default setting
