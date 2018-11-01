import React, { Component } from 'react'

export default class IndexNav extends Component {
  constructor(props) {
    super()
    console.log(props, 'props.letter')
  }
  render() {
    const { letter = [] } = this.props
    return (
      <div class="indexNav">
        {letter.map(item => (
          <div key={item} onClick={() => this.props.onClick(item)}>
            {item}
          </div>
        ))}
      </div>
    )
  }
}
