// infoFooter.js
import React, {Component} from 'react'

var colors = ['pink', '#5bc0de', '#5cb85c', '#337ab7']

class InfoFooter extends Component {
  constructor (props) {
    super(props)
    var currentDetail = JSON.parse(window.localStorage.getItem('SavedDetails')).filter(function (ele) {
      return ele.num === props.num
    }, this)
    if (currentDetail.length > 0) {
      currentDetail = currentDetail[0]
    }
    this.state = {
      tags: currentDetail.tags || []
    }
    this.colorIndex = []
  }

  render () {
    var tags = this.state.tags.map(function (tag, currentIndex) {
      this.colorIndex.push(Math.floor(Math.random() * 4))
      var color = colors[this.colorIndex[currentIndex]]
      var colorStyle = {backgroundColor: color}
      return <li className='info-tag' style={colorStyle} key={currentIndex}><span><i className='fa fa-tag' />{tag}</span></li>
    }, this)
    return (
      <div className='info-footer'>
        <i className='fa fa-tags fa-fw' />
        <input placeholder='标签用空格  隔开 eg: a b c' onChange={this.tagInputChanged.bind(this)} defaultValue={this.state.tags.join(' ')} />
        <button onClick={this.save.bind(this)}><i className='fa fa-save' />保存</button>
        <ul className='info-taglist'>
          {tags}
        </ul>
      </div>
    )
  }

  tagInputChanged (e) {
    var inputValue = e.target.value
    var tags = inputValue.split(' ').filter(function (elm) {
      if (elm.trim() !== '') {
        return elm.trim()
      }
    })
    this.setState({
      tags: tags
    })
  }

  save () {
    var tags = this.state.tags
    if (tags.length === 0) {
      return
    }
    var details = JSON.parse(window.localStorage.getItem('SavedDetails'))
    for (let i = 0; i < details.length; i++) {
      var detail = details[i]
      if (detail.num === this.props.num) {
        detail.tags = tags
        break
      }
    }
    window.localStorage.setItem('SavedDetails', JSON.stringify(details))
  }
}

export default InfoFooter
