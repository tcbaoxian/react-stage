// 配置react-router的路由地址
import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App.js'
import HomeView from '../components/Home/HomeView.js'
import Counter from '../components/Counter/CounterContainer.js'

const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={HomeView} />
      <Route path="/counter" component={Counter} />
    </Route>
)


export default routes
