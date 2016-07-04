import React, { Component, PropTypes } from 'react';
import NoteItem from './NoteItem';

class NoteWrap extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.actions.updateTime(new Date());
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { notes, actions, time } = this.props;

    return (
      <section className="note__wrap">
        <ul className="note__list">
          {notes.map(item =>
            <NoteItem key={item.id} note={item} {...actions} current={time.current} />
          )}
        </ul>
      </section>
    );
  }
}

NoteWrap.propTypes = {
  notes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  time: PropTypes.object.isRequired
};

export default NoteWrap;
