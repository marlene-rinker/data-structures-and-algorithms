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
  append(value) {
    try {
    // used codeburst.io for reference for this code
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      return this.head;
    }
    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = newNode;
    return this.head;
    }
    catch(err){
      console.error('Sorry, this error occurred: ' + err);
    }
  }

  insertBefore(value, newValue) {
    
    let newNode = new Node(newValue);
    let current = this.head;
    if (this.head.value === value){
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }
    while(current.next) {
      if (current.next.value === value){
        newNode.next = current.next;
        current.next = newNode;
        return this.head;
      }
      current = current.next;     
    }
    return this.append(newValue);// if value doesn't exist, put the new node at the end since nothing to put it before

  }

  insertAfter(value, newValue) {
  
    let newNode = new Node(newValue);
    let current = this.head;
    
    while(current) {
      if (current.value === value){
        newNode.next = current.next;
        current.next = newNode;
        return this.head;
      }
      current = current.next;     
    }
      
    return this.insert(newValue);// if value doesn't exist, put the new node at the beginning of the list so it's before everything

  }

  getListLength(){
    let current = this.head;
    let length = 0;
    while(current){
      length = length + 1; 
      current = current.next; 
    }
    return length;
  }
  
  kthFromEnd(k){
    const listLength = this.getListLength();
    const nodeToFind = listLength - k;
    let current = this.head;
    let counter = 0;
    if (nodeToFind > 0){
      while(current){
        counter = counter + 1;
        if (counter === nodeToFind){
          return current.value;
        }
        current = current.next;
      }
    }
    return 'Exception: Invalid list position';
  }


}



module.exports = LinkedList;
