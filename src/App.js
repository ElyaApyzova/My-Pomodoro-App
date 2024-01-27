

import React from 'react';
import { connect } from 'react-redux';
import { startTimer, pauseTimer, resetTimer } from './redux/actions';

class App extends React.Component {
  componentDidMount() {
    this.timerInterval = setInterval(() => {
      if (this.props.isRunning && this.props.timeRemaining > 0) {
        this.props.dispatch({ type: 'TICK' });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  render() {
    const { duration, timeRemaining, isRunning, dispatch } = this.props;

    const start = () => {
      dispatch(startTimer());
    };

    const pause = () => {
      dispatch(pauseTimer());
    };

    const reset = () => {
      dispatch(resetTimer());
    };

    return (
      <div>
        <div>Duration: {duration} minutes</div>
        <div>
          Time Remaining: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}
        </div>
        <button onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={pause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  duration: state.duration,
  timeRemaining: state.timeRemaining,
  isRunning: state.isRunning,
});

export default connect(mapStateToProps)(App);
