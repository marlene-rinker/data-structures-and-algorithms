'use strict';

function multiBracketValidation(input){

  if (input.length <= 1){
    return false;
  }

  let matchingOpeningBracket;
  let char;
  let stack = [];
  let string = input.replace(/[^\[\]\(\)\{\}]+/g,'');


  let openBrackets = ['(', '[', '{'];
  let closeBrackets = [')', ']', '}'];

  for(let i = 0; i < string.length; i++){
    char = string[i];

    if (closeBrackets.indexOf(char) > -1){
      matchingOpeningBracket = openBrackets[closeBrackets.indexOf(char)]
      if (stack.length === 0 || (stack.pop() !== matchingOpeningBracket)){
        return false;
      }
    }else {
      stack.push(char);
    }
  }
  return (stack.length === 0);
};

module.exports = multiBracketValidation;


