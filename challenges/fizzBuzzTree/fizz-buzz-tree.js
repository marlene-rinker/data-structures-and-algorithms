'use strict';

const thing = require('../../data-structures/tree/tree.js');

function fizzBuzzTree (tree) {
  //create new tree
  let newTree = new thing.BinaryTree();

  //go through tree
  if (!tree.root){
    return newTree; //returns an empty tree
  }

  let current = tree.root;
  let newValue = fizzBuzzChecker(current.value);
  newTree.root = new thing.Node(newValue);
  let newCurrent = newTree.root;
  fizzBuzzTreeHelper(current, newCurrent);

  return newTree;


}

function fizzBuzzTreeHelper(current, newCurrent) {
  if(current.left){
    let newValue = fizzBuzzChecker(current.left.value);
    newCurrent.left = new thing.Node(newValue);
    fizzBuzzTreeHelper(current.left, newCurrent.left);
  }

  if(current.right){
    let newValue = fizzBuzzChecker(current.right.value);
    newCurrent.right = new thing.Node(newValue);
    fizzBuzzTreeHelper(current.right, newCurrent.right);
  }

 
}

function fizzBuzzChecker(value){
    let str = '';
    if (value % 3 === 0) {str += 'Fizz'};
    if (value % 5 === 0) {str += 'Buzz'};
    if (str === '') { str = value.toString()};
    return str;
}


module.exports = fizzBuzzTree;


let tree = new thing.BinaryTree();
tree.root = new thing.Node(7);
tree.root.left = new thing.Node(5);
tree.root.right = new thing.Node(3);
tree.root.left.left = new thing.Node(30);
tree.root.left.right = new thing.Node(9);
// fizzBuzzTree(tree);
// console.log(fizzBuzzTree(tree));
let myTree = fizzBuzzTree(tree);
console.log(myTree.root);
console.log(myTree.root.left);
console.log(myTree.root.right);
console.log(myTree.root.left.left);
console.log(myTree.root.left.right);
