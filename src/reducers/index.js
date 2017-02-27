import { combineReducers } from 'redux'
import counter from './counter/counter.js'
import valuater from './valuater/valuater.js'
import home from './home/home.js'

const rootReducer = combineReducers({
  counter,
  valuater,
  home,
})

export default rootReducer
