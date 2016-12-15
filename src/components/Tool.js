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
  var colors = ['pink', '#5bc0de', '#5cb85c', '#337ab7']
  var randomNum = Math.floor(Math.random() * colors.length)
  return colors[randomNum]
}

// module.exports = {
//   computeTime: computeTime
// }
