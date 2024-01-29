import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions';

class TaskList extends React.Component {
  // TaskList component implementation
}

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)