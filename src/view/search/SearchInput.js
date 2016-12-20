// SearchInput
import React, {Component} from 'react'
import Input from '../../components/Input'

class SearchInput extends Component {
  static PropTypes = {
    onChange: React.PropTypes.func
  };

  static defaultProps = {
    onChange: () => {}
  }

  render () {
    return (
      <Input className='search-input' placeholder='输入你的快递单号...' onChange={(e) => this.searchChange(e)} />
    )
  }

  searchChange (e) {
    this.props.onChange(e.target.value)
  }
}

export default SearchInput
