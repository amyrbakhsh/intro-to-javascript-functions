  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/


const isAdult = age => {
    if (age >= 18) {
      return 'Adult'
    } else {
      return 'Minor'
    }
  }
  console.log('Exercise 2 Result:',isAdult(19))
//   console.log('Exercise 2 Result:',isAdult(12))