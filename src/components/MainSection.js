import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoItem from './TodoItem'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted()
  }

  render() {
    const { todos, actions } = this.props

    return (
      <section className="main">
        <button>
        Список заметок
        <span> { todos.length }</span>
        </button>
        
        <ul className={classnames('todo-list')}>
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
