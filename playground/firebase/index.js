import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBWG5SaHBxbm636-GWpTQjDyFdeo4o0eIc",
  authDomain: "hutch-todo-app.firebaseapp.com",
  databaseURL: "https://hutch-todo-app.firebaseio.com",
  storageBucket: "hutch-todo-app.appspot.com",
  messagingSenderId: "511664054511"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref()

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Casey',
    age: 39
  }
});

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Applcation'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('Update worked.');
// }, (e) => {
//   console.log('Update failed.');
// });

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Gandalf'
// });

// firebaseRef.child('app').update({name: 'Todone Application'});
// firebaseRef.child('user').update({name: 'Radagast'});

// firebaseRef.remove();
// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire db', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value');
// });

// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.update({
//   isRunning: false
// });
//
// firebaseRef.off();
// // NB: off argument turns off just a particular listener, no arg -> all off
//
// firebaseRef.update({
//   isRunning: true
// });

var notesRef = firebaseRef.child('notes');

////// basic push:
// var newNotesRef = notesRef.push();
// newNotesRef.set({
//   text: 'Walk the dog.'
// });

////// chained:
// var newNotesRef = notesRef.push().set({
//   text: 'Walk the dog.'
// });

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});
notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});
notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

////// push shortcut:
var newNoteRef = notesRef.push({
  text: 'Walk the dog.'
});
console.log('Todo id', newNoteRef.key);
