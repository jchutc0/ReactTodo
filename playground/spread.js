// to run:
//    node playground/spread.js


// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final;
//
// final = [3, ...groupA];
// final = [...groupB, 3, ...groupA];
// // final = [...groupA, ...groupB];
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

// Hi Andrew. You are 25
function hiThere(name, age) {
  console.log('Hi ' + name + '. You are ' + age + '.');
}

hiThere(...person);
hiThere(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew'];
final = [...names, ...final];
for (var i = 0; i < final.length; i++) {
  console.log('Hi ' + final[i] + '.');
}

console.log('..');
final.forEach(function(name) {
  console.log('Hi ' + name + '.');
});
