// infoFooter.js
import React, {Component} from 'react'
import {getRandomColor} from '../../tool/Tool'
import Tag from '../../components/Tag'
import Input from '../../components/Input'

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
    this.colors = []
  }

  render () {
    const tags = this.state.tags
    const tagsLi = tags.map(function (tag, currentIndex) {
      this.colors.push(getRandomColor())
      const color = this.colors[currentIndex]
      return <li key={currentIndex}><Tag tag={tag} color={color} /></li>
    }, this)
    return (
      <div className='info-footer' ref='infoFooter'>
        <i className='fa fa-tags fa-fw' />
        <Input className='tagInput' placeholder='标签用空格  隔开 eg: a b c' onChange={this.tagInputChanged.bind(this)} defaultValue={tags.join(' ')} />
        <button onClick={this.save.bind(this)}><i className='fa fa-save' />保存</button>
        <ul className='info-taglist'>
          {tagsLi}
        </ul>
      </div>
    )
  }

  tagInputChanged (e) {
    const tags = e.target.value.split(' ').filter(function (elem) {
      if (elem.trim() !== '') {
        return elem.trim()
      }
    })
    this.setState({
      tags: tags
    })
  }

  save () {
    const tags = this.state.tags
    console.log(tags)
    if (tags.length === 0) {
      return
    }
    var details = JSON.parse(window.localStorage.getItem('SavedDetails'))
    for (let i = 0; i < details.length; i++) {
      var detail = details[i]
      console.log(detail.num, this.props.num)
      if (detail.num === this.props.num) {
        detail.tags = tags
        break
      }
    }
    console.log(details)
    window.localStorage.setItem('SavedDetails', JSON.stringify(details))
  }

  componentDidMount () {
    this.refreshInfoView()
  }

  componentDidUpdate () {
    this.refreshInfoView()
  }

  refreshInfoView () {
    const infoView = document.querySelector('.infoView')
    const height = this.refs.infoFooter.clientHeight + 'px'
    if (infoView && infoView.style.bottom !== height) {
      infoView.style.bottom = height
    }
  }
}

InfoFooter.propTypes = {
  num: React.PropTypes.string
}

export default InfoFooter
