// given 2 strings, write a function to tell if one is a permutation of the other
/*
Qs: are permutations case sensitive? Is white space considered?

O: boolean, true or false
I: two strings
C: minimize time complexity, whitespace/casesensitive?
E: empty strings

Thoughts:
- first things first, if the strings are not of equal length, they cannot be permutations
- My basic idea is to go through each string and see how many times each letter occurs. If
the number of occurrences of each letter is the same, then I will have a permutation
- I am going to assume case does not matter for this implementation

Psuedo:
create s1val and s2val vars to hold chars and occurences

check if s1 and s2 are same length
  if not, return false

make s1 and s2 lwoercase

iterate through s1
  if curval not in s1val, add, else, increment
iterate through s2
  if curval not in s2val, add, else, increment

iterate through s1val
  if s1val at key is not equal to s2val at key
    return false

return true


*/

// const checkPermutation = (s1, s2) => {
//   const s1val = {};
//   const s2val = {};

//   if (s1.length !== s2.length) {
//     return false;
//   }

//   s1 = s1.toLowerCase();
//   s2 = s2.toLowerCase();


//   for (let i = 0; i < s1.length; i++) {
//     let curVal = s1[i];
//     if (!s1val[curVal]) {
//       s1val[curVal] = 1;
//     } else {
//       s1val[curVal]++;
//     }
//   }
//   for (let j = 0; j < s2.length; j++) {
//     let curVal = s2[j];
//     if (!s2val[curVal]) {
//       s2val[curVal] = 1;
//     } else {
//       s2val[curVal]++;
//     }
//   }
//   console.log(s1val)
//   console.log(s2val)

//   for (let key in s1val) {
//     if (s1val[key] !== s2val[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// Time complexity: s1 iterate -> O(n), s2 iterate -> O(n), s1val iterate -> O(n)
// O(n) + O(n) + O(n) = O(n), linear time complexity
// const s3 = 'rAin';
// const s4 = 'iraNs';
// console.log(checkPermutation(s3, s4)); // false

// const s5 = 'raIn';
// const s6 = 'iRan';
// console.log(checkPermutation(s5, s6)); // true

// const s7 = 'rain';
// const s8 = 'irrn';
// console.log(checkPermutation(s7, s8)); // false


// CTCI approach
/*
Sort the stirngs
- create a sorting function that sorts the strings, then compare sorted strings

*/

const sortCheckPermutation = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  s1 = JSON.stringify(s1.toLowerCase().split('').sort());
  s2 = JSON.stringify(s2.toLowerCase().split('').sort());


  return s1 === s2;
}

// Time complexity: Chrome uses Timsort, which for smaller arrays has O(n), and for
// larger arrays has O(nlog(n))
// Total: O(n) , but a smaller linear than before


const s3 = 'rAin';
const s4 = 'iraNs';
console.log(sortCheckPermutation(s3, s4)); // false

const s5 = 'raIn';
const s6 = 'iRan';
console.log(sortCheckPermutation(s5, s6)); // true

const s7 = 'rain';
const s8 = 'irrn';
console.log(sortCheckPermutation(s7, s8)); // false
