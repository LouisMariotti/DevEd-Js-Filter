// Calbacks higher order functions

const videos = [
  "pranking my sister! is she Okay (gone wrong)",
  "How to Javascript",
  "html tutorial",
  "learning piano",
  "Js",
];

const games = [
  { title: "Fifa 08", rating: 7.8 },
  { title: "Fifa 09", rating: 9 },
  { title: "Fifa 10", rating: 5.7 },
  { title: "Fifa 11", rating: 11 },
  { title: "Fifa 12", rating: 8 },
];

// videos.forEach(function (video) {
//   // This is the callback function and runs everytime we loop over each element in the above array
//   console.log("run");
//   console.log(video);
// });

// button.addEventListner("click", function () {
//   // function() is the callback function, this wait for the order to run, so when we click on the button the function run in this case
// });

// videos.forEach(function (video) {
//   // forEach is a higher order function. It is a function that takes another function as parameter
//   console.log(video); // Going to run over for each individual string in the videos array
// });

// Higher order function

// function repeater(fn) {
//   fn();
//   fn();
//   fn();
// }

// function sayHello() {
//   console.log("Hello There!");
// }

// repeater(sayHello); // Function take another function as a parameter

// Can do it clearer Higher order function

// function repeater(fn) {
//   fn();
//   fn();
//   fn();
// }

// repeater(function () {
//   console.log("Hello There");
// });

// Callback is the function that get added and get executed later

// MAP bit different than higher order functions.
/* MAP allow us to create a copy of an array that we will be able to
modify it, add some modifications */

// const newVideos = videos.map(function (video) {
//   return video.toUpperCase();
// });

// newVideos.push("LOL");

// console.log(videos);

// console.log(newVideos); // All our items will be uppercased

/* Big different is that forEach runs over each element and 
allow us to run some kinds of functionality, but doesn't return us
a value that we can store inside a variable. Use mapping more for
creating modifications */

// Find

/* Find is going through every element but looking for a particular one
and will return only when he has found it */

// const searchTuto = videos.find(function (video) {
//   return video.includes("html"); // Check for a condition. If find a video title that includes 'html' then it will return it
// });

// console.log(searchTuto); // Will return html tutorial

// Filter
/* Works kind of the same as Find but return multiple values*/

const shortSearch = videos.filter(function (video) {
  return video.length < 15;
});
console.log(shortSearch); // Will return only the values with less than 15 letters

const bestGames = games.filter(function (game) {
  return game.rating >= 8;
});
console.log(bestGames);
