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
}).then(() => {
  console.log('Set worked');
}, (e) => {
  console.log('Set failed');
});


// firebaseRef.set({
//   appName: 'Todo Application'
// });

firebaseRef.child('user').set({
  name: 'Mike'
});

firebaseRef.child('app').set({
  name: 'Adobe Photoshop'
});
