import React, { Component } from 'react'
import { Link } from 'react-router'

// export default () =>
//   <div>
//     <Link to="/">Home</Link>
//     {' '}
//     <Link to="counter">Counter</Link>
//   </div>

class Header extends Component{
  render(){
    return(
      <div>
        <Link to="/baoxian/">Home</Link>
        {' '}
        <Link to="/baoxian/counter">Counter</Link>
        {' '}
        <Link to="/baoxian/valuater">Valuater</Link>
      </div>
      )

  }
}

export default Header




