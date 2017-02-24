import SImmutable from 'seamless-immutable';
import { FETCH_FACTORYS, CHOOSE_FACTORY } from '../../actions/Valuater/valuater.js';
import { initFactory, chooseFactory } from './util.js';
const initialState = SImmutable({
  factoryList: [],
  priceModes: {},
  isDone: false,
})


export default function valuater(state = initialState, action) {
  switch(action.type){
    case FETCH_FACTORYS:
      return initFactory(state, action);
    case CHOOSE_FACTORY:
     return chooseFactory(state, action);
    default:
      return state;
  }
}



