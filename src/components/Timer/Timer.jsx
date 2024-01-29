import React from 'react';
import { connect } from 'react-redux';
import { startTimer, pauseTimer, resetTimer } from '../../redux/actions';

class Timer extends React.Component {
  // Timer component implementation
}

const mapStateToProps = state => ({
  timer: state.timer,
});

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  pauseTimer: () => dispatch(pauseTimer()),
  resetTimer: () => dispatch(resetTimer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);