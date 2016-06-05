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


timeSince(date) {

    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
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
          {this.timeSince(note.date)}
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
