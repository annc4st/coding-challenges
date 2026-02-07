// Please do not change the name of this function
function changeCalculator (num) {
  const moneyMap ={
    "1": 1,
    "2": 2,
    "5": 5,
    "10": 10,
    "20": 20,
    "50": 50
  }

  const change = {};

  const coinsInDescendOrder = [ '50', '20', '10', '5', '2', '1' ]

  for (const key in moneyMap) {
    // if change is equal to one of the coins denominations 
    if(moneyMap[key] === num){ 
      let count = num / moneyMap[key];
      change[moneyMap[key]] = count;
      
    } else { 
      
      for (const coin of coinsInDescendOrder) {
        const value = moneyMap[coin];
        
        if (num >= value) {
          count = Math.floor(num / value);
          change[coin] = count;
          num = num - count * value;
         
        }
      }
    }
  }
  
  return change;

};

console.log(changeCalculator(2));
// console.log(changeCalculator(7));
// should return {'5':1,'2':1}

module.exports = changeCalculator;
