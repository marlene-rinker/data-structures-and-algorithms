'use strict';

const Stack = require('../../data-structures/stacksAndQueues/stacks_and_queues.js');

class PseudoQueue {
  //instantiate two stacks in the constructor
  constructor() {
    this.stackOne = new Stack.stack();
    this.stackTwo = new Stack.stack();
  }

  enqueue(value) {
    //populate the first stack with the input value
    this.stackOne.push(value);
    return this.stackOne.value;
  }

  dequeue(){
    //pop values off of the first stack and put them in the second stack
    while (this.stackOne.isEmpty() === false) {
      let value = this.stackOne.pop().value;
      this.stackTwo.push(value);
    }
    //extract the value from the second stack 
    return this.stackTwo.pop();
  }
}

module.exports = PseudoQueue;

let myQueue = new PseudoQueue();
myQueue.enqueue(10);
myQueue.enqueue(15);
myQueue.enqueue(20);
console.info('first log', myQueue);
myQueue.enqueue(5);
console.log(myQueue);
console.info(myQueue.dequeue());
console.log(myQueue);

