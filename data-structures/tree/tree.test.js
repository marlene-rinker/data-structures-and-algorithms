'use strict';

const test = require('./tree.js');

describe('Testing binary tree methods', () => {
  it ('preOrder should return values from the tree in the right order', () => {
    let tree = new test.BinaryTree();
    tree.root = new test.Node(1);
    tree.root.left = new test.Node(2);
    tree.root.right = new test.Node(3);
    tree.root.left.left = new test.Node(4);
    tree.root.left.right = new test.Node(5);
    tree.root.right.left = new test.Node(6);
    tree.root.right.right = new test.Node(7);
    expect(tree.preOrder(tree.root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
  })

  it ('inOrder should return values from the tree in the right order', () => {
    let tree = new test.BinaryTree();
    tree.root = new test.Node(1);
    tree.root.left = new test.Node(2);
    tree.root.right = new test.Node(3);
    tree.root.left.left = new test.Node(4);
    tree.root.left.right = new test.Node(5);
    tree.root.right.left = new test.Node(6);
    tree.root.right.right = new test.Node(7);
    expect(tree.inOrder(tree.root)).toEqual([4, 2, 5, 1, 6, 3, 7]);
  })

  it ('postOrder should return values from the tree in the right order', () => {
    let tree = new test.BinaryTree();
    tree.root = new test.Node(1);
    tree.root.left = new test.Node(2);
    tree.root.right = new test.Node(3);
    tree.root.left.left = new test.Node(4);
    tree.root.left.right = new test.Node(5);
    tree.root.right.left = new test.Node(6);
    tree.root.right.right = new test.Node(7);
    expect(tree.postOrder(tree.root)).toEqual([4, 5, 2, 6, 7, 3, 1]);
  })
});

describe('Testing binary search tree methods', () => {
  it ('add should add a new node in the right place in the tree', () => {
    let tree = new test.BinarySearchTree();
    tree.add(25);
    tree.add(15);
    tree.add(50);
    tree.add(10);
    tree.add(17);
    tree.add(42);
    tree.add(70);
    expect(tree.root.value).toEqual(25);
    expect(tree.root.right.value).toEqual(50);
    expect(tree.root.right.left.value).toEqual(42);
    expect(tree.root.right.right.value).toEqual(70);
    expect(tree.root.left.value).toEqual(15);
    expect(tree.root.left.left.value).toEqual(10);
    expect(tree.root.left.right.value).toEqual(17);
  })

  it ('contains should check if a value is in the tree', () => {
    let tree = new test.BinarySearchTree();
    tree.add(25);
    tree.add(15);
    tree.add(50);
    tree.add(10);
    tree.add(17);
    tree.add(42);
    tree.add(70);
    console.log(tree);
    expect(tree.contains(25)).toBe(true);
    expect(tree.contains(15)).toBe(true);
    expect(tree.contains(50)).toBe(true);
    expect(tree.contains(10)).toBe(true);
    expect(tree.contains(17)).toBe(true);
    expect(tree.contains(42)).toBe(true);
    expect(tree.contains(70)).toBe(true);
    expect(tree.contains(3)).toBe(false);
    expect(tree.contains(125)).toBe(false);
    expect(tree.contains(51)).toBe(false);
  })

  
});