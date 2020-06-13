'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    try {
    // used codeburst.io for reference for this code
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
    }
    catch(err){
      console.error('Sorry, this error occurred: ' + err);
    }
  }

  includes(value) {
    try{
      let current = this.head;
      while(current) {
        if (current.value === value){
          return true;
        }
        current = current.next;     
      }
      return false;
    }
    catch(err){
      console.error('Sorry, this error occurred: ' + err);
    }
  }

  toString(){
    try {
      let stringList = '';
      let current = this.head;
      while(current) {
        stringList = stringList + `{ ${current.value} } -> `;
        current = current.next;
      }
      stringList = stringList + 'NULL';
      return stringList;
    }
    catch(err){
      console.error('Sorry, this error occurred: ' + err);
    }
  }
}

const myList = new LinkedList();
myList.insert('Marlene');
myList.insert('Dave');
myList.insert(4);
console.log(myList);
console.log(myList.toString());

module.exports = LinkedList;
