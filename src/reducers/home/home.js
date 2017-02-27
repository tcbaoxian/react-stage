import SImmutable from 'seamless-immutable';
const initialState = SImmutable({
  homeText: 'Welcome To React-Stage',
})

export default function home(state = initialState, action){
  switch(action.type){
    default:
      return state;
  }
}





