/*
Given a string, write a function to check if it is a permutation of a palindrome
A palindrome is a word or phrase the same forward and backwards
A permutation is a rearrangement of letters
The palindrome does not need to be limited to dictionary words
Ignore casing and non-letter chars
EX. I -> 'Tact Coa' O -> True (permutations: 'taco cat', 'atco cta')

I: string
O: boolean reflecting whether the input was a permutation of a palindrome
C: ignore non-letters, ignore case
E: empty string, string with only non-char letters

Okay. So, what are the characteristics of a permutation of a palindrome? A palindrome reads the same
front to back. This would mean that except for the central pivot letter, there must be an equal number
of each letter.

 */

const palindromePermutation = (string) => {
  let storage = {};
  let oddChars = 0;
  // return false if empty string
  if (string === '') {
    return false;
  }
  // make lowercase, make array
  string = string.toLowerCase().split('');

  // remove spaces
  for (let j = 0; j < string.length; j++) {
    if (string[j] === ' ') {
      string.splice(j, 1);
    }
  }
  // even letter input
  if (isEven(string.length)) {
    for (let k = 0; k < string.length; k++) {
      let curVal = string[k];
      if (!storage[curVal]) {
        storage[curVal] = 1;
      } else {
        storage[curVal]++;
      }
    }

    for (let key in storage) {
      if (!isEven(storage[key])) {
        oddChars++;
      }
    }
    if (oddChars === 0) {
      return true;
    }

  // odd letter input
  } else {
    for (let i = 0; i < string.length; i++) {
      let curChar = string[i];
      if (!storage[curChar]) {
        storage[curChar] = 1;
      } else {
        storage[curChar]++;
      }
    }
    for (let key in storage) {
      if (!isEven(storage[key])) {
        oddChars++;
      }
    }
    if (!isEven(oddChars) && oddChars > 0) {
      return true;
    }
  }
  return false;

}

const isEven = (num) => {
  return num % 2 === 0;
}


const inp1 = 'Tact Coa';
console.log(palindromePermutation(inp1)) // true

const inp2 = 'Moom';
console.log(palindromePermutation(inp2)) // true

const inp3 = 'Tact oa';
console.log(palindromePermutation(inp3)) // false

const inp4 = 'act toa';
console.log(palindromePermutation(inp3)) // false