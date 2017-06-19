import React, { Component } from 'react';
import DatePicker from 'react-mobile-datepicker';


import './HomeView.css';


class HomeView extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date(),
      isOpen: false,
    }
  }

  handleClick = () => {
    this.setState({ isOpen: true });
  }

  handleCancel = () => {
    console.log('cancel')
    this.setState({ isOpen: false });
  }

  handleSelect = (time) => {
    console.log(time)
    this.setState({ time, isOpen: false });
  }

  componentDidMount() {
    console.log('did');
    this.props.fetchInitData();
  }
  render() {
    const { home } = this.props
    console.log(home);
    return (
      <div>
        <h1>{home.homeText}</h1>
        <a
          className="select-btn"
          onClick={this.handleClick}>
          select time
        </a>

        <DatePicker
          value={this.state.time}
          isOpen={this.state.isOpen}
          onSelect={this.handleSelect}
          onCancel={this.handleCancel} />
      </div>

      )
  }
}

export default HomeView



