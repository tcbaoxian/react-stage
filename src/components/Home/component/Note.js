import React, { Component } from 'react';

class Note extends Component{
  render(){
    const { name, index, noteItemClick } = this.props;
    return (<div>{index+1}、{name} <button onClick={() => noteItemClick(index)}>删除</button></div>)
  }
}

export default Note





