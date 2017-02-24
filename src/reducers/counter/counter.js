import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../actions/Counter/Counter.js'
import SImmutable from 'seamless-immutable';

const initialState = SImmutable({
  number: 0,
})


function incrementCounter(state, action){
  let number = state.number + 1;
  return state.setIn(['number'], number)
}


function decrementCounter(state, action){
  let number = state.number - 1;
  return state.setIn(['number'], number)
}


export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return incrementCounter(state, action);
    case DECREMENT_COUNTER:
      return decrementCounter(state, action);
    default:
      return state
  }
}
