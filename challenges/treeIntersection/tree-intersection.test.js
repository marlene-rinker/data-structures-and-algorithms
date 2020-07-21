const treeIntersection = require('./tree-intersection.js');
const thing = require('../../data-structures/tree/tree.js');

describe('Testing tree intersection', () => {
  it ('should return an array with the common values in both trees', () => {
    let tree = new thing.BinaryTree();
    tree.root = new thing.Node(150);
    tree.root.left = new thing.Node(100);
    tree.root.right = new thing.Node(250);
    tree.root.left.left = new thing.Node(75);
    tree.root.left.right = new thing.Node(160);
    tree.root.right.left = new thing.Node(200);
    tree.root.right.right = new thing.Node(350);
    tree.root.left.right.left = new thing.Node(125);
    tree.root.left.right.right = new thing.Node(175);
    tree.root.right.right.left = new thing.Node(300);
    tree.root.right.right.right = new thing.Node(500);

    let tree2 = new thing.BinaryTree();
    tree2.root = new thing.Node(42);
    tree2.root.left = new thing.Node(100);
    tree2.root.right = new thing.Node(600);
    tree2.root.left.left = new thing.Node(15);
    tree2.root.left.right = new thing.Node(160);
    tree2.root.right.left = new thing.Node(200);
    tree2.root.right.right = new thing.Node(350);
    tree2.root.left.right.left = new thing.Node(125);
    tree2.root.left.right.right = new thing.Node(175);
    tree2.root.right.right.left = new thing.Node(4);
    tree2.root.right.right.right = new thing.Node(500);
    
    expect(treeIntersection(tree, tree2)).toEqual([100,160,125,175,200,350,500]);

  })

  it ('should return an empty array if given two empty trees', () => {
    let tree = new thing.BinaryTree();
    let tree2 = new thing.BinaryTree();
    expect(treeIntersection(tree, tree2)).toEqual([]);
  })

  it ('should return an empty array if first tree is empty', () => {
    let tree = new thing.BinaryTree();
    let tree2 = new thing.BinaryTree();
    tree2.root = new thing.Node(42);
    tree2.root.left = new thing.Node(100);
    tree2.root.right = new thing.Node(600);
    tree2.root.left.left = new thing.Node(15);
    tree2.root.left.right = new thing.Node(160);
    tree2.root.right.left = new thing.Node(200);
    tree2.root.right.right = new thing.Node(350);
    tree2.root.left.right.left = new thing.Node(125);
    tree2.root.left.right.right = new thing.Node(175);
    tree2.root.right.right.left = new thing.Node(4);
    tree2.root.right.right.right = new thing.Node(500);
    expect(treeIntersection(tree, tree2)).toEqual([]);
  })

  it ('should return an empty array if the second tree is empty', () => {
    let tree = new thing.BinaryTree();
    tree.root = new thing.Node(150);
    tree.root.left = new thing.Node(100);
    tree.root.right = new thing.Node(250);
    tree.root.left.left = new thing.Node(75);
    tree.root.left.right = new thing.Node(160);
    tree.root.right.left = new thing.Node(200);
    tree.root.right.right = new thing.Node(350);
    tree.root.left.right.left = new thing.Node(125);
    tree.root.left.right.right = new thing.Node(175);
    tree.root.right.right.left = new thing.Node(300);
    tree.root.right.right.right = new thing.Node(500);
    let tree2 = new thing.BinaryTree();
    expect(treeIntersection(tree, tree2)).toEqual([]);
  })

})