import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default class ReactRouter1 extends Component {
  render () {
    return <div>
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>
          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
        </div>
      </Router>
    </div>
  }
}
