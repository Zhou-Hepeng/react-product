import React, { Component } from 'react'
// import logo from './logo.svg';
import css from './style.less'
class Series extends Component {
  render() {
    return (
      <div className={css.App}>
        <header className={css.goto}>
          这个是车系页
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Series
