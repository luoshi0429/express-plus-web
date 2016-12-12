// tips.js
import React, {Component} from 'react'

var coms = {
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

var colors = ['pink', '#5bc0de', '#5cb85c', '#337ab7']

class TipView extends Component {
  searchTip (tip) {
    console.log(tip)
  }

  render () {
    var tips
    if (this.props.tips.length > 0) {
      tips = this.props.tips.map(function (tip, index) {
        var color = colors[Math.floor(Math.random() * 4)]
        var colorStyle = {backgroundColor: color}
        return <li key={index} onClick={this.searchTip.bind(this, tip)}><span style={colorStyle}>{coms[tip.comCode] ? coms[tip.comCode] : tip.comCode}</span></li>
      }, this)
    }
    return (
      <ul className='tipView'>
        {tips}
      </ul>
    )
  }
}

export default TipView
