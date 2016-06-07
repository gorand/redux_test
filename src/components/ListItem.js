import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import NoteInput from './NoteInput'

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteNote(id)
    } else {
      this.props.editNote(id, text)
    }
    this.setState({ editing: false })
  }


elapsedTimeSince(date) {

    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
        return `${interval} л. назад`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return `${interval} мес. назад`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return `${interval} дн. назад`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return `${interval} ч. назад`;
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return `${interval} мин. назад`;
    }
    interval = Math.floor(seconds);
    if (interval >= 5) {
      return `${interval} сек. назад`;
    }
    return 'только что';
}


  render() {
    const { note, completeNote, deleteNote } = this.props

    let element
    if (this.state.editing) {
      element = (
        <NoteInput text={note.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(note.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={note.completed}
                 onChange={() => completeNote(note.id)} />
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {note.text}
          </label>
          {this.elapsedTimeSince(note.date)}
          <button className="destroy"
                  onClick={() => deleteNote(note.id)} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: note.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}

ListItem.propTypes = {
  note: PropTypes.object.isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
}

export default ListItem
