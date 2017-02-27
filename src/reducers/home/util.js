import _ from 'lodash';

export function addItem(state, action){
  console.log(action.param);
  const newNotes = _.assign([], state.notes);
  newNotes.push(action.param);

  return state.setIn(['notes'], newNotes);
}

export function deleteItem(state, action){
  const newNotes = _.assign([], state.notes);
  _.remove(newNotes, function(elem, index){
    return index == action.param;
  })


  return state.setIn(['notes'], newNotes);
}
