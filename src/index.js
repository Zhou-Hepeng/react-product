import React from 'react'
import ReactDom from 'react-dom'
import Route from './route'
import './style/base.css'
// 解决移动端点击延迟
import FastClick from 'fastclick'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer } from 'react-hot-loader'

FastClick.attach(document.body)

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Route)
registerServiceWorker()
