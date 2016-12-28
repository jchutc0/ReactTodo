var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });     // beforeEach

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });     // should exist

  // describe('setTodos', () => {
  //   it('should set valid todos array', () => {
  //     var todos = [{
  //       id: 23,
  //       text: 'test all files',
  //       completed: false
  //     }];
  //     TodoAPI.setTodos(todos);
  //
  //     var actualTodos = JSON.parse(localStorage.getItem('todos'));
  //     expect(actualTodos).toEqual(todos);
  //   });   //  should set valid todos array
  //
  //   it('should not set invalid todos array', () => {
  //     var badTodos = {
  //       a: 'b'
  //     };
  //     TodoAPI.setTodos(badTodos);
  //
  //     expect(localStorage.getItem('todos')).toBe(null);
  //   });   // should not set invalid todos array
  //
  // });     // setTodos

  // describe('getTodos', () => {
  //   it('should return empty array for bad localStorage data', () => {
  //     var actualTodos = TodoAPI.getTodos();
  //     expect(actualTodos).toEqual([]);
  //   });   // should return empty array for bad localStorage data
  //
  //   it('should return todos if valid array in localStorage', () => {
  //     var todos = [{
  //       id: 23,
  //       text: 'test all files',
  //       completed: false
  //     }];
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //
  //     var actualTodos = TodoAPI.getTodos();
  //     expect(actualTodos).toEqual(todos);
  //   });   // should return todos if valid array in localStorage
  // });     // getTodos

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'some text',
        completed: true
      },
      {
        id: 2,
        text: 'other text',
        completed: false
      },
      {
        id: 3,
        text: 'Some text 3',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });   // should return all items if showCompleted is true

    it('should return subset of items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });   // should return subset of items if showCompleted is false

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });   // should sort by completed status

    it('should filter todos by search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });   // should filter todos by search text

    it('should return all items if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });   // should return all items if searchText is empty


  });     // filterTodos

});       // TodoAPI
