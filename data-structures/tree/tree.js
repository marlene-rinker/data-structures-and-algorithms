'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrderHelper(root, results) {
    results.push(root.value);

    if (root.left !== null){
      this.preOrderHelper(root.left, results);
    }
    if (root.right !== null) {
      this.preOrderHelper(root.right, results);
    }

  }

  preOrder(root) {
    try {
      let results = [];
      this.preOrderHelper(root, results);
      return results;
    }
    catch(err){
      console.error('Sorry, this error occurred: ' + err);
    }
  }

  inOrderHelper(root, results) {

    if (root.left !== null) {
      this.inOrderHelper(root.left, results);
    }
    results.push(root.value);
    if (root.right !== null){
      this.inOrderHelper(root.right, results);
    }
  }


  inOrder(root) {
    try {
      let results = [];
      this.inOrderHelper(root, results);
      return results;
    }
    catch(err){
      console.error('Sorry, this error occurred: ' + err);
    }
  } 

  postOrderHelper(root, results) {

    if (root.left !== null) {
      this.postOrderHelper(root.left, results);
    }
    if (root.right !== null) {
      this.postOrderHelper(root.right, results);
    }
    results.push(root.value);
  }

  postOrder(root) {
    try { 
      let results = [];
      this.postOrderHelper(root, results);
      return results;
    } 
    catch(err){
      console.error('Sorry, this error occurred: ' + err);
    }
  }

  findMaxValue(root, max) {

    try {

      if (root.value > max){
        max = root.value;
      }

      if (root.left) {
        max = this.findMaxValue(root.left, max);
      }
      if (root.right) {
        max = this.findMaxValue(root.right, max);
      }
    
      return max;
            
    }
    catch(err){
      console.error('Sorry, this error occurred: ' + err);
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  add(value) {
    try{
      let root = this.root;
    
      // if nothing in tree, then make new node the root
      if (!root) {
        this.root = new Node(value);
        return;
      }
    
      let current = root;
      let newNode = new Node(value);
    
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left; 
          continue;   
        }
        if(!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
    catch(err){
      console.error('Sorry, this error occurred: ' + err);
    }
  }

  contains(value) {
    try {
      
      let root = this.root;
  
      if (!root) {
        return false;
      }
  
      let current = root;
  
      while(current){
        if (current.value === value) {
          //found it
          return true;
        }
        if (value < current.value) {
          //go to the left
          current = current.left;
          continue; 
        }
        //go to the right
        current = current.right;
      }
      return false;
    }
    catch(err){
      console.error('Sorry, this error occurred: ' + err);
    }
  }
}

let tree = new BinaryTree();
tree.root = new Node(-3);
tree.root.left = new Node(-2);
tree.root.right = new Node(-1);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(-15);
tree.root.right.left = new Node(-6);
tree.root.right.right = new Node(-2);
console.log(tree.findMaxValue(tree.root, tree.root.value));


module.exports = {
  Node,
  BinarySearchTree,
  BinaryTree
}

//After I wrote my original code and had it working, I asked Dave Rinker (my husband) to help me refactor it to try to get rid of the else statements (killing unicorns). He told me about "continue". Just wanted to note that since it's not something we've covered. Now I've learned something new. He also gave me a hint that I might need a helper function to return an array in the Binary Tree methods.