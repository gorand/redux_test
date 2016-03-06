import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoItem from './TodoItem'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      showList: true
    }
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted()
  }

  handleClickShow() {
    if (this.state.showList) {
      this.setState({ showList: false })
    }
    else {
      this.setState({ showList: true })
    }
  }

  render() {
    const { todos, actions } = this.props

    return (
      <section className="main">
        <button onClick={() => this.handleClickShow()}>
        Список заметок
        <span> { todos.length }</span>
        </button>
        
        <ul className={classnames('todo-list', { 
            hidden: this.state.showList
          })}>
          {todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
