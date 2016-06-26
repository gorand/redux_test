import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import ListItem from './ListItem'

class MainSection extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setInterval(() => {
      this.props.actions.updateTime(new Date());
    }, 5000);
  }

  render() {
    const { notes, actions, time } = this.props

    return (
      <section className='main'>
        <button>
        Всего заметок
        <b> { notes.length }</b>
        </button>

        <ul className={classnames('todo-list')}>
          {notes.map(item =>
            <ListItem key={item.id} note={item} {...actions} current={time.current} />
          )}
        </ul>
      </section>
    );
  }
}

MainSection.propTypes = {
  notes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
