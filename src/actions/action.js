// 详情
import * as types from '../constants/actionTypes'
import {getTipsAPI, testGetInfoAPI, testGetDetailAPI, computeTime} from '../tool/Tool'

// 详情
export const addDetailLocal = (num, com) => {
  return {
    type: types.ADD_DETAILLOCAL,
    num: num,
    com: com
  }
}

export const removeDetailLocal = (num, com) => {
  return {
    type: types.REMOVE_DETAILLOCAL,
    num: num,
    com: com
  }
}

export const removeDetail = (currentNum, details) => {
  return {
    type: types.REMOVE_DETAIL,
    details: details,
    currentNum: currentNum
  }
}

export const requestDetails = () => {
  return {
    type: types.REQUEST_DETAILS
  }
}

export const receiveDetails = (details) => {
  return {
    type: types.RECEIVE_DETAILS,
    details
  }
}

export const selectDetails = (detail) => {
  return {
    type: types.SELECT_DETAIL,
    detail
  }
}

// thunk action
export const fetchDetails = () => {
  return dispatch => {
    dispatch(requestDetails())
    return window.fetch(testGetDetailAPI)
            .then(r => r.json())
            .then(r => dispatch(receiveDetails(r)))
  }
}

// 信息
export const requestInfo = () => {
  return {
    type: types.REQUEST_INFO
  }
}

export const receiveInfo = (infoes, num) => {
  return {
    type: types.RECEIVE_INFO,
    infoes: infoes,
    num: num
  }
}

export const fetchInfo = (num, com) => {
  return dispatch => {
    dispatch(requestInfo())
    window.fetch(testGetInfoAPI)
      .then(r => r.json())
      .then(r => {
        const endDate = new Date(r.data[0].time)
        const startDate = new Date(r.data[r.data.length - 1].time)
        const time = r.data.length <= 0 ? '几秒前' : computeTime(endDate, startDate, '内')
        const headerInfo = {
          num: r.nu || num,
          com: r.com,
          time: time,
          cncom: r.cncom
        }
        if (r.status === '200') {
          dispatch(receiveInfo({fetchedData: true, epInfo: r.data, headerInfo: headerInfo}, num))
        } else {
          const now = new Date()
          const epInfo = [{
            context: r.message,
            time: now.toISOString().substring(0, 10) + ' ' + now.toISOString().substring(11, 19)
          }]
          dispatch(receiveInfo({fetchedData: true, epInfo: epInfo, headerInfo: headerInfo}, num))
        }
      })
      .catch(err => console.log(err))
  }
}

export const changeFilter = (tags) => {
  return {
    type: types.CHANGE_FILTER,
    tags: tags
  }
}

export const getFilter = (currentNum) => {
  return {
    type: types.GET_FILTER,
    currentNum: currentNum
  }
}

export const saveFilter = (currentNum, tags) => {
  return {
    type: types.SAVE_FILTER,
    currentNum: currentNum,
    tags: tags
  }
}

export const starDetail = (currentNum) => {
  return {
    type: types.STAR_DETAIL,
    num: currentNum
  }
}

// 搜索
export const getHistories = () => {
  return {
    type: types.GET_HISTORY
  }
}

export const saveHistory = (num) => {
  return {
    type: types.SAVE_HISTORY,
    num: num
  }
}

export const clearHistory = () => {
  return {
    type: types.CLEAR_HISTORY
  }
}

export const getTips = (tips) => {
  return {
    type: types.GET_TIP,
    tips: tips
  }
}

export const clearTips = () => {
  return {
    type: types.CLEAR_TIP
  }
}

export const fetchTips = (val) => {
  return dispatch => {
    if (val.length < 6) {
      return dispatch(getTips([]))
    }
    return window.fetch(getTipsAPI(val))
            .then(r => r.json())
            .then(r => {
              console.log(r)
              dispatch(getTips(r.auto))
            })
            .catch(err => console.error(err))
  }
}
