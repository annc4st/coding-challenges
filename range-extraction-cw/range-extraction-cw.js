// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

let list1 = [
  -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
  19, 20,
];

// function solution(list){

//    let result = []; //stores the formatted parts of the list.
//    let rangeStart = list[0];
//    let rangeEnd = list[0]

//    for (let i=1; i< list.length; i++){
//     let current = list[i];
//     if (current === rangeEnd +1){
//         rangeEnd = current; //If the current element (list[i]) is the next integer after rangeEnd, update rangeEnd to the current element.
//                             // If not, it means the range has ended. Depending on the length of the range, append either a range or individual numbers to result.
//     }else {
//         if(rangeEnd - rangeStart >= 2 ) {
//             console.log(rangeEnd, rangeStart)
//             result.push(rangeStart + '-' + rangeEnd)
//         } else {
//             for (let j = rangeStart; j <= rangeEnd; j++) {
//                 result.push(j.toString());
//             }
//         }
//         //Reset rangeStart and rangeEnd to the current element for the next potential range.
//         rangeStart = list[i];
//         rangeEnd = list[i];
//     }
//     }
//     return result.join(',');
//    }

function solution2(list) {
  let start = list[0];
  let result = "";
  let end = list[0];

  for (let i = 1; i < list.length; i++) {
    current = list[i];

    if (current === end + 1) {
      end = current;
    } else {
      if (end - start >= 2) {
        result += start.toString() + "-" + end.toString() + ",";
      } else {
        for (let j = start; j <= end; j++) {
          result += j.toString() + ",";
        }
      }
      start = current;
      end = current;
    }
  }
  if (end - start >= 2) {
    result += start.toString() + "-" + end.toString() + ",";
  } else {
    for (let j = start; j <= end; j++) {
      result += j.toString() + ",";
    }
  }

  // Remove the trailing comma
  result = result.slice(0, -1);
  return result;
}

console.log(solution2(list1));



function solution3(individualIntegers) {
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(",");
}

function splitIntoRanges(ranges, number) {
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	var lastRange = ranges[ranges.length - 1];
	var lastNumber = lastRange[lastRange.length - 1];

	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

console.log(solution3(list1));

// nice
function solution(list){
  for(var i = 0; i < list.length; i++){
     var j = i;
     while(list[j] - list[j+1] == -1) j++;
     if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
 }
 return list.join();
}

solution = (list)=>list.reduce((acc,curr,i) => {
  if (i==0) return curr.toString();
  if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
  if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
  return acc+","+curr;
});


function solution(list){
  return list
    .reduce((acc, n, i, arr) => {
      if(n !== arr[i - 1] + 1) {
        acc.push([n]);
      } else {
        acc[acc.length - 1].push(n);
      }
      return acc;
    }, [])
    .map(arr => arr.length > 2 ? `${arr[0]}-${arr[arr.length-1]}` : arr)
    .join(',');
}

function solution(nums){
  nums = nums.map((v, i) => nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? '-' : v);
     return nums.filter((v, i) => v != '-' || nums[i - 1] != '-').join(',').replace(/,-,/g, '-');
 }



 function solution(list){
  var s = '';
  var l = list.length;
  for(var i=0; i<l; i++){
    if(list[i] == list[i+2]-2) {
      s += list[i] + '-';
      for(i; i<l; i++){
        if(list[i] != list[i+2]-2) break;
      }
    } else {
      s += list[i];
      if(i != l-1) s += ',';
    }
  }
  return s;
}


const solution = list =>
  list.map((val, idx) => list[idx - 1] === val - 1 && list[++idx] === val + 1 ? `~` : val).join(`,`).replace(/,?(~,)+/g, `-`);

