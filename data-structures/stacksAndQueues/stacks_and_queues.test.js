'use strict';

const test = require('./stacks_and_queues.js');
// let myStack = new test.stack();
// let myQueue = new test.queue();

describe('Testing stack', () => {
  it ('Should successfully push onto a stack', () => {
    let myStack = new test.stack();
    myStack.push('test');
    expect(myStack.top.value).toEqual('test');
  })

  it ('Should successfully push multiple values onto a stack', () => {
    let myStack = new test.stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    expect(myStack.top.value).toEqual(3);
    expect(myStack.top.next.value).toEqual(2);
    expect(myStack.top.next.next.value).toEqual(1);
  })

  it ('Should successfully pop a value off a stack', () => {
    let myStack = new test.stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.pop();
    expect(myStack.top.value).toEqual(2);
    expect(myStack.top.next.value).toEqual(1);
  })

  it ('Should successfully empty a stack after multiple pops', () => {
    let myStack = new test.stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.pop();
    myStack.pop();
    myStack.pop();
    expect(myStack.top).toEqual(null);
  })

  it ('Should successfully peek the next item on the stack', () => {
    let myStack = new test.stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    expect(myStack.peek()).toEqual(3);
  })

  it ('Should successfully instantiate an empty stack', () => {
    let myStack = new test.stack();
    expect(myStack.top).toEqual(null);
  })

  it ('Should raise an exception when pop or peek called on an empty stack', () => {
    let myStack = new test.stack();
    expect(myStack.pop()).toEqual('Stack is empty, nothing to remove');
    expect(myStack.peek()).toEqual('Stack is empty, nothing to remove');

  })

});

describe('Testing queue', () => {
  it ('Should successfully enqueue into a queue', () => {
    let myQueue = new test.queue();
    myQueue.enqueue('test');
    expect(myQueue.rear.value).toEqual('test');
  })

  it ('Should successfully enqueue multiple values into a queue', () => {
    let myQueue = new test.queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    expect(myQueue.rear.value).toEqual(3);
    expect(myQueue.front.value).toEqual(1);
    expect(myQueue.front.next.value).toEqual(2);
  })

  it ('Should successfully dequeue a value out of a queue', () => {
    let myQueue = new test.queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.dequeue();
    expect(myQueue.rear.value).toEqual(3);
    expect(myQueue.front.value).toEqual(2);
  })

  it ('Should successfully empty a queue after multiple dequeues', () => {
    let myQueue = new test.queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();
    expect(myQueue.front).toEqual(null);
  })

  it ('Should successfully peek the next item on the stack', () => {
    let myQueue = new test.queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    expect(myQueue.peek()).toEqual(1);
  })

  it ('Should successfully instantiate an empty queue', () => {
    let myQueue = new test.queue();
    expect(myQueue.front).toEqual(null);
  })

  it ('Should raise an exception when dequeue or peek called on an empty stack', () => {
    let myQueue = new test.queue();
    expect(myQueue.dequeue()).toEqual('Queue is empty, nothing to remove');
    expect(myQueue.peek()).toEqual('Queue is empty, nothing to remove');

  })

});