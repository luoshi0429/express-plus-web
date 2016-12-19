// Tool.js
export function computeTime (endDate, startDate, type) {
  var deltaTime = endDate.getTime() - startDate.getTime()
  var deltaData = new Date(deltaTime)
  var year = deltaData.getYear() - 1970
  var month = deltaData.getMonth()
  var day = deltaData.getDate()
  var hour = deltaData.getHours()
  var res = year > 0 ? (year + '年' + type) : (month > 0 ? (month + '月' + type) : (day > 0 ? (day + '天' + type) : ((hour > 0) ? (hour + '小时' + type) : '一小时' + type)))
  return res
}

export function getRandomColor () {
  const colors = ['pink', '#5bc0de', '#5cb85c', '#337ab7']
  var randomNum = Math.floor(Math.random() * colors.length)
  return colors[randomNum]
}

// num: 快递单号 com: 公司编码
const baseURL = 'http://express-plus.leanapp.cn'
export function getInfoAPI (num, com) {
  var infoURL = `${baseURL}/api/search?nu=${num}&com=${com}`
  return infoURL
}

export function getTipsAPI (num) {
  return baseURL + '/api/auto?nu=' + num
}

export const testGetInfoAPI = 'http://localhost:3005/info'
export const testGetDetailAPI = 'http://localhost:3004/data'
