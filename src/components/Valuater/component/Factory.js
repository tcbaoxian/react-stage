import React, { Component, PropTypes } from 'react'
import './Factory.css';
import cx from 'classnames';

class Factory extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    }
  }
  handleClick = (index) => {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  handleFactoryClick = (index, elem) => {
    const { factoryClick } = this.props;
    const { handleClick } = this;
    factoryClick(index, elem);
    handleClick(index);
  }
  renderFactoryList() {
    const { valueList, currentValue, index } = this.props;
    const { handleFactoryClick } = this;
    const factoryList = valueList.map((elem, index1) => {
      let isActive = false;
      if(elem.code == currentValue.code){
        isActive = true;
      }
      return <div key={index1} className={cx(isActive?'active':'')} onClick={()=>handleFactoryClick(index, elem)}>{elem.des}</div>
    });
    return factoryList;
  }
  render(){
    const { title, currentValue, index } = this.props;
    const { isShow } = this.state;
    return (
      <div className="factory-item">
        <div className="title">{title}</div>
        <div className="value" onClick={() => this.handleClick(index)}>{currentValue.des}</div>
        <div className={cx('dialog', isShow?'':'none')}>
          <div className="mask" onClick={() => this.handleClick(index)}></div>
          <div className="factory-list">
            {this.renderFactoryList()}
          </div>
        </div>
      </div>)
  }
}

Factory.propTypes = {
  title: PropTypes.string,
  currentValue: PropTypes.object,
  index: PropTypes.number,
  factoryClick: PropTypes.func,
}
export default Factory;