var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });     // should set searchText
  });       // describe searchTextReducer

  describe('showCompletedReducer', () => {
    it('should update showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toBe(true);
    });     // should set searchText
  });       // describe showCompletedReducer

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt: 777
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(action.todo);
    });     // should add new todo

    it('should update todo', () => {
      var todos = [
        {
          id: '12',
          text: 'Go running',
          completed: true,
          createdAt: 11,
          completedAt: 123
        }
      ];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });     // should toggle todo

    it('should add existing todos', () => {
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
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(todos[0]);
    });     // should toggle todo
  });       // describe todosReducer
  describe('authReducer', () => {
    it('should update auth on login', () => {
      var auth = {
        uid: 'SomeUID'
      };
      var action = {
        type: 'LOGIN',
        uid: auth.uid
      };
      const res = reducers.authReducer(df({}), df(action));

      expect(res).toEqual(auth);
    });     // should update auth on login

    it('should update auth on logout', () => {
      const authData = {
        uid: 'abc123'
      };
      var auth = {};
      var action = {
        type: 'LOGOUT'
      };
      const res = reducers.authReducer(df(authData), df(action));

      expect(res).toEqual(auth);
    });     // should update auth on logout

  });       // describe authReducer
});         // describe Reducers
