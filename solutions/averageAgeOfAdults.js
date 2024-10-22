/*
Work only in the solution/*.js file, don't touch the other files.
Fill the function adultsAverageAge(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "name": "Alex Smith",
  "age": 20,
}

Calculate the average age of those users who are adults (above or equal 18). Return the result (as a number).
You do not have to deal with the case, when there are only underage users in the list.

*/

function averageAgeOfAdults(users) {
  let adults = 0;
  let ageSum = 0;
  for(let i=0; i<users.length; i++) {
    let person = users[i];
    if(person.age>=18) {
      adults++;
      ageSum+=person.age;
    }
  }
  return Math.round(ageSum/adults);
}

module.exports = averageAgeOfAdults;
