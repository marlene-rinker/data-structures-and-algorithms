'use strict';

const HashTable = require('../../data-structures/hashtable/hashtable.js');

function findFirstRepeatedWord(str) {
//split string to get array of words
// for each word, using the word as a key,
//if the hashtable contains the key, compare the values, if not equal, then add the value to the table
// if the values match, return the value as the first repeated one
// if the hashtable doesn't contain the key, add the value

let newString = str.replace(/[^a-zA-Z ]/g, '');//get rid of anything that's not a word, but leave spaces


let words = newString.split(' ');//put each word into an array

let hashMap = new HashTable(1014);

let repeatedWord = 'No repeated words';

for(let i = 0; i < words.length; i++) {
  let word = words[i].toLowerCase();
  let containsWord = hashMap.contains(word);
  
  if (containsWord === true) {
    repeatedWord = word;
    break;
  }

  if (containsWord === false) {
    hashMap.add(word, word);
  }
}

return repeatedWord;


}

module.exports = findFirstRepeatedWord;

// let myString = 'Once upon a time, there was a brave princess who...'
// let myString2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'
// let myString3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'
// let myString4 = 'It is a beautiful day...';

// console.log(findFirstRepeatedWord(myString));
// console.log(findFirstRepeatedWord(myString2));
// console.log(findFirstRepeatedWord(myString3));
// console.log(findFirstRepeatedWord(myString4));