'use strict';


// create a function that takes in two binary trees
// traverse the first tree and put the results in an object as key value pairs
// traverse the second tree and check if the value exists in the object (by the key)
// if so, put the value in an array
// return the array


const thing = require('../../data-structures/tree/tree.js');


function treeIntersection (tree1, tree2) {
  let comparison = getValues(tree1.root);
  let duplicates = findDuplicates(tree2.root, comparison);
  return duplicates;

}

function getValuesHelper(root, results) {
  results[root.value] = root.value;

  if (root.left !== null){
    getValuesHelper(root.left, results);
  }
  if (root.right !== null) {
    getValuesHelper(root.right, results);
  }

}

function getValues(root) {
  try {
    let results = {};
    if (root !== null){
      getValuesHelper(root, results);
    }
    return results;
  }
  catch(err){
    console.error('Sorry, this error occurred: ' + err);
  }
}

function findDuplicatesHelper(root, results, obj) {
  if (root.value === obj[root.value]){
    results.push(root.value)
  }
  if (root.left) {
    findDuplicatesHelper(root.left, results, obj)
  }

  if (root.right) {
    findDuplicatesHelper(root.right, results, obj)
  }

}

function findDuplicates(root, obj) {
  try {
    let results = [];
    if (root !== null) {
      findDuplicatesHelper(root, results, obj);
    }
    return results;
  }
  catch(err){
    console.error('Sorry, this error occurred: ' + err);
  }
}



module.exports = treeIntersection;






