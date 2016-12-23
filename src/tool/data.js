// data.js

// 本地存取
const HISTORY_KEY = 'Histories'
const AUTO_KEY = 'CheckedAuto'
const CHECKED_KEY = 'CheckedEp'
const INTERVAL_KEY = 'IntervalValue'
const DETAILS_KEY = 'SavedDetails'

export function getHistory () {
  return JSON.parse(window.localStorage.getItem(HISTORY_KEY)) || []
}

export function saveHistory (num) {
  let histories = JSON.parse(window.localStorage.getItem(HISTORY_KEY)) || []
  if (histories.indexOf(num) === -1) {
    histories.push(num)
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(histories))
  }
}

export function clearHistories () {
  window.localStorage.removeItem(HISTORY_KEY)
}

export function getDetailLocal () {
  return JSON.parse(window.localStorage.getItem(DETAILS_KEY)) || []
}

export function saveDetailLocal (val) {
  window.localStorage.setItem(DETAILS_KEY, JSON.stringify(val))
}

export function getCheckedEp () {
  return window.localStorage.getItem(CHECKED_KEY)
}

export function saveCheckedEp (val) {
  window.localStorage.setItem(CHECKED_KEY, val)
}

export function getSearchInterval () {
  return window.localStorage.getItem(INTERVAL_KEY)
}

export function saveSearchInterval (val) {
  window.localStorage.setItem(INTERVAL_KEY, val)
}

export function getCheckedAuto () {
  return window.localStorage.getItem(AUTO_KEY)
}

export function saveCheckedAuto (val) {
  window.localStorage.setItem(AUTO_KEY, val)
}

export function getFilter () {
  return JSON.parse(window.localStorage.getItem('SavedDetails')) || []
}

export function saveFilter (num, tags) {
  let details = getFilter()
  for (let i = 0; i < details.length; i++) {
    var detail = details[i]
    if (detail.num === num) {
      detail.tags = tags
      break
    }
  }
  window.localStorage.setItem('SavedDetails', JSON.stringify(details))
}
