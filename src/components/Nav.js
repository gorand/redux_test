import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><Link className="nav__link" to="/">На главную</Link></li>
          <li className="nav__item"><Link className="nav__link" to="list">Список заметок</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
