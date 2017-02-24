import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore.js'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import Routes from './routes.js'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {Routes}
    </Router>
  </Provider>,
  document.getElementById('app')
)
