import 'whatwg-fetch';

export const INIT_DATA = 'INIT_DATA';

export function fetchInitData(){
  return (dispatch) => {
    fetch('//10.101.50.39:8090/data/data1.json')
      .then(function(resp){
        return resp.json();
      })
      .then(function(data){
        console.log(data);
        dispatch({
          type: INIT_DATA,
          param: data
        });
      })
      .catch((err)=>{
        console.log(err);
      });
  }
}






