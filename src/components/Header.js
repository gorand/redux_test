import React, { PropTypes, Component } from 'react';
import NoteField from './NoteField';

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addNote(text);
    }
  }

  render() {
    return (
      <header className="header">
        <NoteField newNote onSave={this.handleSave.bind(this)} />
        <h1 className="header__title">Создать заметку</h1>
      </header>
    );
  }
}

Header.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default Header;
