import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import Header from '../components/Header';
import * as NoteActions from '../actions';

class App extends Component {
  render() {
    const { actions } = this.props;
    return (
      <div className="wrapper">
        <Nav />
        <Header addNote={actions.addNote} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  notes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    notes: state.notes
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
