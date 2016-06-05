import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TextInput from './TextInput'

class ListItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false,
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
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
    const { entry, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TextInput text={entry.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(entry.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={entry.completed}
                 onChange={() => completeTodo(entry.id)} />
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {entry.text}
          </label>
          {this.timeSince(entry.date)}
          <button className="destroy"
                  onClick={() => deleteTodo(entry.id)} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: entry.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}

ListItem.propTypes = {
  entry: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default ListItem
