import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NoteWrap from '../components/NoteWrap';
import * as NoteActions from '../actions';

class List extends Component {
  render() {
    const { notes, actions, time } = this.props;
    return (
      <NoteWrap time={time} notes={notes} actions={actions} />
    );
  }
}

List.propTypes = {
  notes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    notes: state.notes,
    time: state.time
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NoteActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
