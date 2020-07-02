'use strict';

const fizzBuzzTree = require('./fizz-buzz-tree.js');
const thing = require('../../data-structures/tree/tree.js');

describe('Testing fizz buzz tree', () => {
  it ('should return a tree with correct fizzbuzz values in the right locations', () => {
    let tree = new thing.BinaryTree();
    tree.root = new thing.Node(7);
    tree.root.left = new thing.Node(5);
    tree.root.right = new thing.Node(3);
    tree.root.left.left = new thing.Node(30);
    tree.root.left.right = new thing.Node(9);
    tree.root.right.left = new thing.Node(10);
    tree.root.right.right = new thing.Node(45);
    let myTree = fizzBuzzTree(tree);
    expect(myTree.root.value).toEqual('7')
    expect(myTree.root.left.value).toEqual('Buzz')
    expect(myTree.root.right.value).toEqual('Fizz')
    expect(myTree.root.left.left.value).toEqual('FizzBuzz')
    expect(myTree.root.left.right.value).toEqual('Fizz')
    expect(myTree.root.right.left.value).toEqual('Buzz')
    expect(myTree.root.right.right.value).toEqual('FizzBuzz')
  })

  it ('should return an empty tree if given an empty tree', () => {
    let tree = new thing.BinaryTree();
    let myTree = fizzBuzzTree(tree);
    expect(myTree.root).toBe(null);
  })

})