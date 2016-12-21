var moment = require('moment');

console.log(moment().format());

// January 1, 1970 12am -> 0
// January 1, 1970 12:01am -> 60

var now = moment();

// console.log('Current timestamp', now.unix());

var timestamp = now.unix();
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format());

var format = 'MMM D, YY @ h:mm a';
console.log('current moment', currentMoment.format(format));
