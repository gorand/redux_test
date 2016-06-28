import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class NoteField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      e.preventDefault();
      this.props.onSave(text)
      if (this.props.newNote) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleBlur(e) {
    if (!this.props.newNote) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      <textarea className={
        classnames({
          'field--edit': this.props.editing,
          'field': this.props.newNote
        })}
        rows="1"
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}>
      </textarea>
    )
  }
}

NoteField.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newNote: PropTypes.bool
}

export default NoteField
