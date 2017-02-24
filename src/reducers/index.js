import { combineReducers } from 'redux'
import counter from './counter/counter.js'
import valuater from './valuater/valuater.js'

const rootReducer = combineReducers({
  counter,
  valuater,
})

export default rootReducer
