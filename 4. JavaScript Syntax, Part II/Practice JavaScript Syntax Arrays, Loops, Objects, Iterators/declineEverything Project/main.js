// Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array
// and calls politelyDecline() with each of them.

// The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = function (veggies) {
    veggies.forEach(politelyDecline);
}

declineEverything(veggies);