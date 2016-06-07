import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>На главную</Link></li>
          <li><Link to='list'>Список заметок</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
