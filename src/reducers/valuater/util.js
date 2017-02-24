import _ from 'lodash';

export function initFactory(state, action){
  const factory = action.param.factor;
  const modes = action.param.priceModes;
  const factoryList = [];
  const modeList = [];

  for(let mode in modes){
    modeList.push({
      group: mode,
      price: modes[mode]
    })
  }

  // 默认的mode是priceModes里面第一个mode
  const defaultMode = modeList[0].group.split('|');

  let count = 0;
  for(let props in factory){
    let value = factory[props];
    const tempArr = value.filter((elem) => {
      if(elem.code == defaultMode[count])
        return true;
    })
    factoryList.push({
      title: props,
      valueList: value,
      currentValue: tempArr[0],
      index: count,
    })
    count++;
  }

  // console.log(factoryList)
  return state.setIn(['priceModes'], modeList).setIn(['factoryList'], factoryList).setIn(['isDone'], true);
}

export function chooseFactory(state, action){
  const { index, item } = action.param;
  const factoryList = _.assign([], state.asMutable({deep:true}).factoryList);
  factoryList[index].currentValue = item

  return state.setIn(['factoryList'], factoryList);
}






