// Write a method to replace all spaces in a string with '%20'
// Assume the string has sufficient space at the end to hold the additional characters
// ex. I -> 'Mr. John Smith  ' O -> 'Mr.%20John%20Smith'

/*
- So, it looks like the spaces at the end of the string are just to give sufficient space for the new chars
- First impression is that this seems like a case for regex, so I can determine where a space is
- I'm not super comfortable with regex, maybe there is another way around
- I need to iterate through the string, and in the case of a space, replace it with %20. Maybe I can split
the string into an array based on words, and concat the words with the symbol in place
 */

const urlify = (string) => {
  let result = [];
  const splitted = string.split(' ');
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length > 0) {
      result = result.concat(splitted[i]).concat('%20');
    }
  }
  result.pop();
  result = result.join('');
  return result;
}

const input1 = 'Mr. John Smith   ';
const res1 = urlify(input1);
console.log(res1); // 'Mr.%20John%20Smith'