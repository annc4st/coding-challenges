// Please do not change the name of this function
function calculateDivisors(num) {
  // Your code here
  let  sum =0;

  if(typeof num !== 'number'){
    return "Provide a number to calculate";
  } else if (num <=3) {
    return 0;
  } else if (num > 30) {
    return "Provide a number between 4 and 30 to calculate";
    
  } else {
    for (let i = 1; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  }
  console.log(sum);
  return sum;
}

module.exports = calculateDivisors;