import tcFetch from '../Api/tcFetch.js';
// import { ValuaterUrl } from '../../config/ajaxUrl.js';
export const FETCH_FACTORYS = 'FETCH_FACTORYS';
export const CHOOSE_FACTORY = 'CHOOSE_FACTORY';


export function fetchFactorys(){
  return (dispatch) => {
    tcFetch('//localhost:3000/public/data/factory.json', {
      type: 'get',
      dataType: 'json',
    })
    .then((json) => {
      dispatch({
        type: FETCH_FACTORYS,
        param: json,
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

export function chooseFactory(index, item){
  return (dispatch) => {
    dispatch({
      type: CHOOSE_FACTORY,
      param: {
        index,
        item,
      }
    })
  }
}






