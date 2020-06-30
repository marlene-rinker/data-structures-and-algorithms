'use strict';

const test = require('./tree.js');

describe('Testing traverseBreadthFirst binary tree method', () => {
  it ('should return values from the tree in the right order', () => {
    let tree = new test.BinaryTree();
    tree.root = new test.Node(2);
    tree.root.left = new test.Node(7);
    tree.root.right = new test.Node(5);
    tree.root.left.left = new test.Node(2);
    tree.root.left.right = new test.Node(6);
    tree.root.left.right.left = new test.Node(5);
    tree.root.left.right.right = new test.Node(11);
    tree.root.right.right = new test.Node(9);
    tree.root.right.right.left = new test.Node(4);
    expect(tree.traverseBreadthFirst()).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  })
});