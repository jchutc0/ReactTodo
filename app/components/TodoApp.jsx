import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';
// var TodoAPI = require('TodoAPI');

export var TodoApp = React.createClass({
  // getInitialState: function() {
  //   return {
  //     showCompleted: false,
  //     searchText: '',
  //     todos: TodoAPI.getTodos()
  //   };  // return value
  // },    // getInitialState

  // componentDidUpdate: function() {
  //   TodoAPI.setTodos(this.state.todos);
  // },

  // handleAddTodo: function(text) {
  //   this.setState({
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         id: uuid(),
  //         text: text,
  //         completed: false,
  //         createdAt: moment().unix(),
  //         completedAt: undefined
  //       }
  //     ]
  //   });
  // },      // handleAddTodo

  // handleSearch: function(showCompleted, searchText) {
  //   this.setState({
  //     showCompleted: showCompleted,
  //     searchText: searchText.toLowerCase()
  //   });
  // },      // handleSearch

  // handleToggle: function(id) {
  //   var updatedTodos = this.state.todos.map((todo) => {
  //     if(todo.id === id) {
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed ? moment().unix() : undefined;
  //     }
  //     return todo;
  //   });
  //   this.setState({
  //     todos: updatedTodos
  //   });
  // },      // handleToggle
  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

  render() {
    // var {todos, showCompleted, searchText} = this.state;
    // var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <div className='page-actions'>
          <a href='#' onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className='page-title'>Todo App</h1>
        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <TodoSearch/>
              <TodoList />
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }     // render
});

export default Redux.connect()(TodoApp);
