// tips.js
import React, {Component} from 'react'
import {getRandomColor} from '../tool/Tool'

const coms = {
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

class TipView extends Component {
  constructor (props) {
    super(props)
    this.colors = []
  }

  searchTip (tip) {
    this.props.tipClicked(tip.comCode)
  }

  render () {
    const tips = this.props.tips
    var tipLis = []
    for (let i = 0; i < tips.length; i++) {
      if (i > 2) { break }
      const tip = tips[i]
      this.colors.push(getRandomColor())
      const color = this.colors[i]
      const colorStyle = {backgroundColor: color}
      tipLis.push(<li key={i} onClick={this.searchTip.bind(this, tip)}><span style={colorStyle}>{coms[tip.comCode] || tip.comCode}</span></li>)
    }
    return (
      <ul className='tipView'>
        {tipLis}
      </ul>
    )
  }
}

TipView.propTypes = {
  tips: React.PropTypes.array
}

export default TipView
