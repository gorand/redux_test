import React, { PropTypes, Component } from 'react'
import TextInput from './TextInput'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/list">Список заметок</a></li>
          </ul>
        </nav>
        <h1>Редактор заметок</h1>
        <TextInput newTodo
                       onSave={this.handleSave.bind(this)}
                       placeholder="Напишите свою заметку" />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
