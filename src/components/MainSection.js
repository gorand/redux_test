import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted()
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.length}
               onChange={actions.completeAll} />
      )
    }
  }

  render() {
    const { todos, actions } = this.props

    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
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
