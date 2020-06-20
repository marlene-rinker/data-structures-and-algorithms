'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    return this.top;
  }

  pop(){
    if (this.top === null){
      return ('Stack is empty, nothing to remove');
    }
    let value = this.top;
    this.top = this.top.next;
    value.next = null;
    return value;
  }

  peek(){    
    if (this.top === null){
      return ('Stack is empty, nothing to remove');
    }
    return this.top.value;
  }

  isEmpty(){
    return this.top === null;
  }

} 

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.rear) {
      this.rear.next = newNode;
    } else {
      this.front = newNode;
    }
    this.rear = newNode;
    return this.rear;
  }

  dequeue(){
    if (this.front === null){
      return ('Queue is empty, nothing to remove');
    }
    let value = this.front;
    this.front = this.front.next;
    value.next = null;
    return value;
  }

  peek(){    
    if (this.front === null){
      return ('Queue is empty, nothing to remove');
    }
    return this.front.value;
  }

  isEmpty(){
    return this.front === null;
  }

} 

module.exports = {
   stack: Stack,
   queue: Queue,
}
