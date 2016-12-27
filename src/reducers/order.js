import { GET_EP_COMS } from '../constants/actionTypes'
const order = (state = [], action) => {
  switch (action.type) {
    case GET_EP_COMS: {
      return Object.assign([], action.coms)
    }
    default:
      return state
  }
}

export default order
