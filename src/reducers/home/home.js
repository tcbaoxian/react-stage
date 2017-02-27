import SImmutable from 'seamless-immutable';
import { ADD_ITEM, DELETE_ITEM } from '../../actions/Home/Home.js';
import { addItem, deleteItem } from './util.js';

const initialState = SImmutable({
  homeText: 'Welcome To React-Stage',
  notes: ['学习React'],
})

export default function home(state = initialState, action){
  switch(action.type){
    case ADD_ITEM:
      return addItem(state, action);
    case DELETE_ITEM:
      return deleteItem(state, action);
    default:
      return state;
  }
}





