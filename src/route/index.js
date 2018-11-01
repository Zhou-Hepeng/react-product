import React, { Component } from 'react'
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom'
import { asyncComponent } from '@/utils'
import { Brand, Series } from '@/view'

// import Brand from '@/view/Brand'
// const Series = asyncComponent(() => import('@/view/Series/index'))

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Brand} />
          <Route path="/series" component={Series} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
