import React, { Component } from 'react'

export default class BrandModel extends Component {
  constructor(props) {
    super()
    console.log(props, 'props1')
  }
  render() {
    const { item } = this.props
    console.log(item, 'item')
    return (
      <div className="nihao">
        <img src={item.img} alt={item.name} />
        <span>{item.name}</span>
      </div>
    )
  }
}
