var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
// var TodoList = require('TodoList');
import TodoList from 'TodoList';

import {TodoApp} from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  }); // TodoApp should exist

  // it('should add todo to the todos state on handleAddTodo', () => {
  //   var todoText = 'test text';
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //
  //   todoApp.setState({todos: []});
  //   todoApp.handleAddTodo(todoText);
  //   expect(todoApp.state.todos[0].text).toBe(todoText);
  //   expect(todoApp.state.todos[0].createdAt).toBeA('number');
  // }); // TodoApp should add todo to the todos state on handleAddTodo
  //
  // it('should change completedAt to undefined marking incomplete', () => {
  //   var todoData = {
  //     id: 11,
  //     text: 'Test features',
  //     completed: true,
  //     createdAt: 0,
  //     completedAt: 7
  //   };
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //
  //   todoApp.setState({todos: [todoData]});
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   todoApp.handleToggle(todoData.id);
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   expect(todoApp.state.todos[0].completedAt).toNotExist();
  // }); // TodoApp should change completedAt to undefined marking incomplete

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);

  });       // should render TodoList
});         // TodoApp describe
