import React, { Component } from 'react';
import './HomeView.css';
import Note from './component/Note.js';


class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addString: '',
    }
  }
  noteItemClick = (index) => {
    this.props.deleteItem(index);
    // console.log(this.props);
  }
  renderNotesList(){
    const { home } = this.props
    const { noteItemClick } = this;
    if(home.notes.length){    
      const notesList = home.notes.map(function(elem, index){
        const noteData = {
          name: elem,
          index,
          noteItemClick,
        }
        return <Note key={index} {...noteData} />
      })
      return notesList;
    } else {
      return <div>列表为空</div>
    }
  }
  changeInput(e){
    this.setState({
      addString: e.target.value,
    })
  }
  handleAdd(){
    if(!this.state.addString){
      alert('请先输入要添加的内容');
      return;
    }
    this.setState({
      addString: '',
    })
    this.props.addItem(this.state.addString);
  }
  render() {
    const { home } = this.props
    return (
      <div>
        <h1>{home.homeText}</h1>
        <div className="notes-wrapper">
          <input value={this.state.addString} onChange={(e) => this.changeInput(e)} />
          <button onClick={() => this.handleAdd()}>添加</button>
          <div className="notes-list">
            {this.renderNotesList()}
          </div>
        </div>
      </div>
      )
  }
}

export default HomeView



