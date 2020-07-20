'use strict';

const HashTable = require('../../data-structures/hashtable/hashtable.js');

function findFirstRepeatedWord(str) {


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

