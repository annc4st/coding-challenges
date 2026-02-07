// Please do not change the name of this function
function dnaPairs(dna) {
  // Write your code here

  const pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };

  const result = [];

  for (let base of dna) {
    result.push([base, pairs[base]]);
  }
  console.log(result);
  return result;
}



module.exports = dnaPairs;
