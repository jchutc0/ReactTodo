var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };      // action
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });       // should generate search text action

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Some todo text'
    };      // action
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });       // should generate add todo action

  it('should generate add todos action', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };      // action
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });       // should generate add todos action

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };      // action
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });       // should generate toggle show completed action

  it('should generate toggole todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 44
    };      // action
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });       // should generate add todo action

});         // describe Actions
