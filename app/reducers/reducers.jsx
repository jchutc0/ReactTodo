var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
    return action.searchText;

    default:
    return state;
  };        // switch
};          // searchTextReducer

export var showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
    return !state;

    default:
    return state;
  };        // switch
};          // showCompletedReducer

export var todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      {
        id: uuid(),
        text: action.text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }
    ];      // return array

    case 'TOGGLE_TODO':
    // match item of action.id in todos
    // modify it, set completed = !completed
    // update completedAt (timestamp or undefined)
    return state.map((todo) => {
      if(todo.id === action.id) {
        var completed = !todo.completed;
        var completedAt = completed ? moment().unix() : undefined;
      }
      return {
        ...todo,
        completed,
        completedAt
      };
    });

    default:
    return state;
  };        // switch
};          // todosReducer
