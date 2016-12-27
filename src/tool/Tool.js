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

export const testGetInfoAPI = 'http://localhost:3004/info'
export const testGetDetailAPI = 'http://localhost:3004/detail'

export const coms = {
  'shunfeng': '顺丰',
  'zhaijisong': '宅急送',
  'zhongtong': '中通',
  'yuantong': '圆通',
  'yunda': '韵达',
  'shentong': '申通',
  'tiantian': '天天',
  'quanfengkuaidi': '全峰',
  'youshuwuliu': '优速',
  'jd': '京东',
  'neweggozzo': '新蛋',
  'xinbangwuliu': '新邦物流',
  'debangwuliu': '德邦物流',
  'huitongkuaidi': '百世汇通',
  'youzhengguonei': '国内邮政',
  'youzhengguoji': '邮政国际',
  'dhl': 'DHL(中国)',
  'dhlen': 'DHL(国际)',
  'dhlde': 'DHL(德国)',
  'ems': 'EMS',
  'emsguoji': 'EMS(国际)',
  'japanposten': 'EMS(日本)',
  'ecmsglobal': 'ECMS',
  'ecmscn': '易客满',
  'ups': 'UPS',
  'usps': 'USPS',
  'shunjiefengda': '顺捷丰达'
}
