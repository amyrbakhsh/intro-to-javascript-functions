//Exercise 2

const isAdult = age => {
    if (age >= 18) {
      return 'Adult'
    } else {
      return 'Minor'
    }
  }
  console.log('Exercise 2 Result:',isAdult(19))

// ===================================================================================
//Exercise 3
  
const isCharAVowel = alpha => {
    if (alpha === 'a' || alpha==='e' || alpha === 'i' || alpha === 'o' || alpha === 'u' || alpha === 'A' || alpha==='E' || alpha === 'I' || alpha === 'O' || alpha === 'U') {
        return 'True'
    } else {
        return 'False'
    }
}

console.log('Exercise 3 Result:', isCharAVowel('y'))

// ===================================================================================
//Exercise 4


	const generateEmail = (name , domain) => {
		return name +'@'+ domain
	}


	console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// ===================================================================================
//Exercise 5


const greetUser = (userName , timeOfDay) => {
    if (timeOfDay === 'morning'){
        return `Good morning, ${userName}`
    } else if 
        (timeOfDay === 'afternoon'){
            return `Good afternoon, ${userName}`
        } else if 
            (timeOfDay === 'evening'){
                return `Good evening, ${userName}`
            } else { 
            return `You need coffee, ${userName}`
            }
        }
    
        console.log('Exercise 5 Result:', greetUser("Sam", "morning"))
		
// ===================================================================================
//Exercise 6

	const maxOfThree = (x, y, z) => {
		if (x > y && x > z) {
		  return x
		} else if 
			(y > x && y > z){
				return y
			} else {
				return z
			}
		}
	  
		console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

// ===================================================================================
//Exercise 7
	
function calculateTip(billAmount, tipPercentage){
    const amountOfTip = (billAmount * (tipPercentage / 100))
    return amountOfTip
  }

console.log('Exercise 7 Result:', calculateTip(50, 20))

// ===================================================================================
//Exercise 8

function convertTemperature(temp, scale) {
    if (scale === 'C'){
        return ((temp * 9/5)+ 32)
    } else if (scale === 'F'){
        return((temp - 32)* 5/9)
    }
}

console.log('Exercise 8 Result:', convertTemperature(35, 'C'))

//===================================================================================
//Exercise 9

function basicCalculator (numA, numB, operation){
    if (operation === 'add'){
        return numA + numB
    } else if (operation === 'subtract'){
        return numA - numB
    } else if (operation === 'multiply'){
        return numA * numB
    } else if (operation === 'divide'){
        return numA / numB
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"))