import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notes } = this.props;

    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link activeClassName='is-active' className="nav__link" to="about">
              Главная
            </Link>
          </li>
          <li className="nav__item">
            <Link activeClassName="is-active" className="nav__link" to="list">
              Список заметок {notes.length ? <span className="nav__count">{notes.length}</span> : null}
            </Link>
          </li>
      </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Nav;
