import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class Todo extends React.Component {

  render() {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed? 'todo todo-completed' : 'todo'
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName} onClick={() => {
          // this.props.onToggle(id)
          this.refs.todoCheck.checked = !completed;
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type='checkbox' defaultChecked={completed} ref='todoCheck'/>
        </div>
        <div>
          <p>
            {text}
          </p>
          <p className='todo__subtext'>{renderDate()}</p>

        </div>
      </div>
    );      // return
  }         // render
}           // Todo

export default connect()(Todo);
