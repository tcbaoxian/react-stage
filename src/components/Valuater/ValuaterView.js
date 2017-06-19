import React, { Component, PropTypes } from 'react'
import Factory from './component/Factory.js';
import _ from 'lodash';

class Valuater extends Component {
  componentWillMount(){
    const { fetchFactorys,valuater } = this.props;
    console.log('Valuater componentWillMount')
  }

  factoryClick = (index, item) => {
    this.props.chooseFactory(index, item);
  }

  renderFactoryList = () => {
    const { valuater } = this.props;
    // console.log(valuater.factoryList)
    const listDom = valuater.factoryList.map((elem, index) => {
      let facotryData = {
        factoryClick: this.factoryClick,
      }
      facotryData = _.assign(facotryData, elem)
      return <Factory key={index} {...facotryData} />
    })

    if(valuater.isDone){
      return listDom
    }
  }
  render() {
    const { valuater } = this.props;
    return (
    <div>
      计价因子
    </div>
      )
  }
}

Valuater.propTypes = {
  fetchFactorys: PropTypes.func,
  chooseFactory: PropTypes.func,
  valuater: PropTypes.object,
}

export default Valuater
