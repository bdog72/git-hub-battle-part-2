import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.scss'

export default class Nav extends Component {
  render () {
    return <div>
      <ul className='nav'>
        <li>
          <NavLink exact activeClassName='active' to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
        </li>
      </ul>
    </div>
  }
}
// function Nav1 () {
//   return (
//     <ul className='nav'>
//       <li>
//         <NavLink exact activeClassName='active' to='/'>Home</NavLink>
//       </li>
//       <li>
//         <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
//       </li>
//       <li>
//         <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
//       </li>
//     </ul>
//   )
// }
