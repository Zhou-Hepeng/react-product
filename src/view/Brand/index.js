import React, { Component } from 'react'
import './style.less'
import { Link } from 'react-router-dom'
import { Request } from '@/utils'
import Api from '@/Api'
import Bold from '../Bold'

// 主布局
class BrandView extends Component {
  constructor() {
    super()
    console.log('constructor')
  }
  // async componentDidMount() {
  //   console.log(Api, 'Brand')
  //   const { data } = await Request(
  //     'GET',
  //     '/index.php?r=api/brand/gethotbrandlists&haveGroup=1&noIndex=1&isW=2',
  //     {}
  //   )
  //   console.log(data, '请求回来数据')
  // }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidUpdate() {}
  render() {
    return (
      <div className="App">
        {console.log(111)}
        <Link to="/series" className="goto">跳转车系</Link>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <IndexNav></IndexNav> */}
        <Bold />
      </div>
    )
  }
}

function Square(props) {
  return (
    <div>
      <button className="square">你好啊</button>
    </div>
  )
}

class Board extends Component {
  // constructor(props) {
  //   super()
  //   console.log(props)
  // }
  renderSquare(i) {
    return <Square />
  }
  return() {
    return (
      <div>
        <div className="board-row">{this.renderSquare(0)}</div>
        <div className="board-row">{this.renderSquare(3)}</div>
        <div className="board-row">{this.renderSquare(6)}</div>
      </div>
    )
  }
}

export default BrandView
