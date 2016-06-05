import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import ListItem from './ListItem'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    setInterval(() => {
      this.props.actions.updateTime(+new Date());
    }, 5000);
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted()
  }

  render() {
    const { list, actions, timer } = this.props

    return (
      <section className="main">
        <button>
        Список заметок
        <span> { list.length }</span>
        </button>

        <ul className={classnames('todo-list')}>
          {list.map(item =>
            <ListItem key={item.id} entry={item} {...actions} current={timer.currentTime} />
          )}
        </ul>
      </section>
    );
  }
}

MainSection.propTypes = {
  list: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
