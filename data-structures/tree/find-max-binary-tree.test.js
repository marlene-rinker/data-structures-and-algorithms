'use strict';

const test = require('./tree.js');

describe('Testing findMaxValue binary tree method', () => {
  it ('should find the max value with positive numbers', () => {
    let tree = new test.BinaryTree();
    tree.root = new test.Node(3);
    tree.root.left = new test.Node(2);
    tree.root.right = new test.Node(1);
    tree.root.left.left = new test.Node(4);
    tree.root.left.right = new test.Node(15);
    tree.root.right.left = new test.Node(6);
    tree.root.right.right = new test.Node(2);
    expect(tree.findMaxValue(tree.root, tree.root.value)).toEqual(15);
  })

  it ('should find the max value with negative numbers', () => {
    let tree = new test.BinaryTree();
    tree.root = new test.Node(-3);
    tree.root.left = new test.Node(-2);
    tree.root.right = new test.Node(-1);
    tree.root.left.left = new test.Node(-4);
    tree.root.left.right = new test.Node(-15);
    tree.root.right.left = new test.Node(-6);
    tree.root.right.right = new test.Node(-2);
    expect(tree.findMaxValue(tree.root, tree.root.value)).toEqual(-1);
  })

  it ('should find the max value with mix of positive and negative numbers', () => {
    let tree = new test.BinaryTree();
    tree.root = new test.Node(-3);
    tree.root.left = new test.Node(-2);
    tree.root.right = new test.Node(-1);
    tree.root.left.left = new test.Node(4);
    tree.root.left.right = new test.Node(-15);
    tree.root.right.left = new test.Node(6);
    tree.root.right.right = new test.Node(2);
    expect(tree.findMaxValue(tree.root, tree.root.value)).toEqual(6);
  })

  it ('should find the max value with only one node', () => {
    let tree = new test.BinaryTree();
    tree.root = new test.Node(3);
    expect(tree.findMaxValue(tree.root, tree.root.value)).toEqual(3);
  })

});