/*
Given two strings, write a function to check if they are one (or zero) edits away from being equal
An edit can be inserting a character, removing a character, or replacing a character
I -> 'pale', 'ple' O -> true
I -> 'pales', 'pale' O -> true
I -> 'pale', 'bale' O -> true
I -> 'pale', 'bake' O -> false

O: boolean
I: two strings
C: minimize time complexity
E: does capitalization matter? if so, that. Otherwise, empty strings and identical strings
E: Words with same letters but different order

- First we can check to see if the two strings are the same, as that will result in true
- I'm thinking that what I might do is create an two objs that track the occurances of each
letter in each string. Once I have that, I can compare the values in the objs. For each value
that obj1 has that obj2 does not have, I can increment a numEdits tracker. If this numEdits is equal
to one or less at the end of the comparison, I know I will be able to make a single edit
  - this does not work in cases where the letters are the same but the order is different, I need to find
    a way to account for order. Maybe if I created arrays instead of objects to track values
- Walking through with an array for storage for each string, I can now handle same letters in different order.
When string1[index] !== string2[index], I increment editTracker and

- New approach:
- if the strings are equal, we return true
- if the two strings are the same length but not equal, we know that the edit would be to replace a char
- if the first string length + 1 equals second string length (or visa vis), we know that we will insert/remove
- if first string is 1 longer, the insert will occur on second; if second is 1 longer, insert on first
- in case of same length, we will call a func to determine if there is only one replacement difference
  - create var editTracker set to 0
  -iterate through s1 and compare values at index in s1 and s2
    -if there is a difference, increment editTracker
  - if editTracker <=1, return true
- in case of different lengths, we will call a func to determine if there is only one insert diff
  - arguments will be longer string first, then shorter string; This way I will only have to deal with
  insertion as opposed to insert and delete
  - func will iterate turn each string into array and iterate through the longer arr
    - if vals of shorter and longer are not equal, increment editTracker and insert missing char into
    the shorter array so we can keep iterating as if edit was made
  - if editTracker > 1 at end, we can return false

  - The action in this insert function was what I was thinking of initially. What I missed was how to handle
  chars that needed to be replaced as well

 */


const oneAway = (s1, s2) => {
  // same strings
  if (s1 === s2) {
    return true;
  }
  // same length but not equal
  if (s1.length === s2.length) {
    return replace(s1, s2);
  }
  // if first string is longer by 1
  if (s1.length === s2.length + 1) {
    return insert(s1, s2)
  }
  // if second string is longer by 1
  if (s1.length + 1 === s2.length) {
    return insert(s2, s1)
  }
}

const replace = (s1, s2) => {
 let editTracker = 0;
 for (let i = 0; i < s1.length; i++) {
   let s1Val = s1[i];
   let s2Val = s2[i];
   if (s1Val !== s2Val) {
     editTracker++;
   }
 }
 return editTracker > 1 ? false : true
}

const insert = (longer, shorter) => {
  let editTracker = 0;
  longer = longer.split('');
  shorter = shorter.split('');

  for (let i = 0; i < longer.length; i++) {
    let s1Val = longer[i];
    let s2Val = shorter[i];

    if (s1Val !== s2Val) {
      editTracker++;
      shorter.splice(i, 0, s1Val);
    }
  }
  return editTracker > 1 ? false : true;
}

const inp1 = 'pale';
const inp2 = 'ple';
const inp3 = 'pales';
const inp4 = 'bale';
const inp5 = 'bake';

console.log(oneAway(inp1, inp1)); // true
console.log(oneAway(inp1, inp2)); // true
console.log(oneAway(inp2, inp1)); // true
console.log(oneAway(inp3, inp1)); // true
console.log(oneAway(inp1, inp4)); // true
console.log(oneAway(inp1, inp5)); // false
console.log(oneAway(inp3, inp5)); // false