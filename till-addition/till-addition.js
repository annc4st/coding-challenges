// Please do not change the name of this function
function till (cash) {
  const moneyMap ={
  "1p": 0.01,
  "2p": 0.02,
  "5p": 0.05,
  "10p": 0.1,
  "20p": 0.2,
  "50p": 0.5,
  "£1": 1,
  "£2": 2,
  "£5": 5,
  "£10": 10,
  "£20": 20,
  "£50": 50
}

  let sum = 0;
  for (let item in cash){
    if(moneyMap.hasOwnProperty(item)){
      sum += moneyMap[item] * cash[item];
    }
  }
  return `£${sum}`;
  
};

console.log(till({ "1p": 1, "2p": 1 }))

module.exports = till;
