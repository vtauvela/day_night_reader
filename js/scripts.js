// JavaScript to get hour in the day
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var date = new Date(); //date = variable, Date = object
var current_hour = date.getHours();

console.log(current_hour);

// If Nighttime
if ( current_hour >= 12 ) {
	// If night time,
	//  Remove 'day' Class
	$('body').removeClass('day');

	// Add 'night' Class
	$('body').removeClass('night');

};


