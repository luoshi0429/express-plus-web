// infoFooter.js
import React, {Component} from 'react'
import {getRandomColor} from '../../tool/Tool'
import Tag from '../../components/Tag'
import Input from '../../components/Input'
import { connect } from 'react-redux'
import { saveFilter, changeFilter } from '../../actions/action'

class InfoFooter extends Component {
  colors = []

  render () {
    const tags = this.props.tags
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
    this.props.dispatch(changeFilter(tags))
  }

  save () {
    const {dispatch, tags, num} = this.props
    dispatch(saveFilter(num, tags))
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

const mapStateToProps = (state) => {
  const { filterTags } = state.info
  return {
    tags: filterTags
  }
}
export default connect(mapStateToProps)(InfoFooter)
