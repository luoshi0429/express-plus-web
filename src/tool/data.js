// data.js

// 本地存取
const HISTORY_KEY = 'Histories'
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

}

export function saveDetailLocal () {

}

export function getCheckedEp () {

}

export function saveCheckedEp () {

}

export function getSearchInterval () {

}

export function saveSearchInterval () {

}

export function getCheckedAuto () {

}

export function saveCheckedAuto () {

}
