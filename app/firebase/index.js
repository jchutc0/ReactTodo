import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBWG5SaHBxbm636-GWpTQjDyFdeo4o0eIc",
    authDomain: "hutch-todo-app.firebaseapp.com",
    databaseURL: "https://hutch-todo-app.firebaseio.com",
    storageBucket: "hutch-todo-app.appspot.com",
    messagingSenderId: "511664054511"
  };
  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
