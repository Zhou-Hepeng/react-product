import React, { Component } from 'react'

export default class BrandModel extends Component {
  constructor(props) {
    super()
    console.log(props, 'props1')
  }
  render() {
    const { brandList } = this.props
    return (
      <div className="nihao">
        {brandList.length && brandList.map(item => (
          <div key={item.name}>
            <img src={item.img} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    )
  }
}
