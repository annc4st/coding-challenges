function solution (roman) {
    const yearMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    const yearNormal = roman.split('').map(symbol => yearMap[symbol]);

    const yearValue = yearNormal.reduce((total, current, index, arr) => {
        if (current < arr[index + 1]) {
            return total - current;
        } else {
            return total + current;
        }
    }, 0);

    return yearValue;
}


console.log(solution('MCMXC'))