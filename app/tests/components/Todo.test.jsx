var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  }); // Todo should exist

  it('should call onToggle prop with id on click', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(todoData.id);
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
