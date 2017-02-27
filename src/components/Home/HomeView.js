import React, { Component } from 'react';
import './HomeView.css';


class HomeView extends Component {
  render() {
    const { home } = this.props
    console.log(home);
    return (
      <h1>{home.homeText}</h1>
      )
  }
}

export default HomeView



