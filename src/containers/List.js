import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import * as NoteActions from '../actions';

class App extends Component {
  render() {
    const { notes, actions, time } = this.props;
    return (
      <MainSection time={time} notes={notes} actions={actions} />
    );
  }
}

App.propTypes = {
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
)(App);
