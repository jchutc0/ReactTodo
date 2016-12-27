var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  }); // Todo should exist

  it('should dispatch TOGGLE_TODO action on click', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: true
    };
    var action = actions.startToggleTodo(todoData.id, !todoData.completed);
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });// Todo should call onToggle prop with id on click

  /*
  it('should toggle completed value when handleToggle called', () => {

    todoApp.setState({todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(true);
  }); // TodoApp should toggle completed value when handleToggle called
  */
});   // Todo describe
