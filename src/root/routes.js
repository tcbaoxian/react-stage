// 配置react-router的路由地址
import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App.js'
import HomeView from '../components/Home/HomeContainer.js'
import Counter from '../components/Counter/CounterContainer.js'


const routes = (
    <Route path="/baoxian" component={App}>
      <IndexRoute component={HomeView} />
      <Route path="/baoxian/counter" component={Counter} />
      <Route path="/baoxian/valuater" getComponent={(location, cb)=>{
                                              require.ensure([],require =>{
                                                cb(null,require('../components/Valuater/ValuaterContainer').default)
                                              }, 'Valuater')
                                            }} />
      {/*
      <Route path="/valuater" component={Valuater} />
      */}                                            
    </Route>
)


export default routes
