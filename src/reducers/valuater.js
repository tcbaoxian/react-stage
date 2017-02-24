import SImmutable from 'seamless-immutable';

const initialState = SImmutable({
  ajaxData: {

  },
  factoryList: [],
});


export default valuater(state = initialState, action){
  switch(action.type){
    default:
     return state;
  }
}



