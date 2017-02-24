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
        <Link to="/">Home</Link>
        {' '}
        <Link to="counter">Counter</Link>
      </div>
      )

  }
}

export default Header




