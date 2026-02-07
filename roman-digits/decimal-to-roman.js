/*
Create an object that maps Roman numeral symbols to their decimal values 
and an empty string to store the Roman numeral representation.
Iterate through the Roman numeral symbols in descending order of their decimal values. 
For each symbol, calculate how many times it fits into the input number and 
append that symbol to the result string that many times.
Subtract the portion of the number converted to Roman numerals 
from the input. Repeat this process for all symbols. And then return the result string.
*/

const converter = (input) => {
    const yearMap = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,     
    }

    let str = '';
    let inputNumber = Number(input);
    if(inputNumber.isNaN) {
        return "input is Not a Number"
    }

    if(inputNumber <1) {
        // output element should contain the text 
      return "Please enter a number greater than or equal to 1"
      } else if (inputNumber >= 4000){
        return "Please enter a number less than or equal to 3999"
      } else {
        for (let i of Object.keys(yearMap)) { 
           
            let q = Math.floor(inputNumber / yearMap[i]); 
            // console.log( q * yearMap[i]);
            inputNumber -= q * yearMap[i]; 
            str += i.repeat(q); 
        } 
      
        return str; 
      }
}
 
console.log(converter(1995)); 