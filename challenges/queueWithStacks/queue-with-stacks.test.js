'use strict';

const PseudoQueue = require('./queue-with-stacks.js');



describe('Testing queue with  2 stacks', () => {
  it ('Enqueue should put a value at the top of the first stack with multiple values', () => {
    let myQueue = new PseudoQueue();
    myQueue.enqueue(10);
    myQueue.enqueue(15);
    myQueue.enqueue(20);
    myQueue.enqueue(5);
    expect(myQueue.stackOne.top.value).toEqual(5);
    expect(myQueue.stackOne.top.next.value).toEqual(20);
    expect(myQueue.stackOne.top.next.next.value).toEqual(15);
    expect(myQueue.stackOne.top.next.next.next.value).toEqual(10);
    expect(myQueue.stackTwo.top).toBe(null);

  })

  it ('Enqueue should put a value at the top of the first stack with one value', () => {
    let myQueue = new PseudoQueue();
    myQueue.enqueue(5);
    expect(myQueue.stackOne.top.value).toEqual(5);
    expect(myQueue.stackTwo.top).toBe(null);
  })

  it ('Dequeue should return the value from the top of the second stack', () => {
    let myQueue = new PseudoQueue();
    myQueue.enqueue(10);
    myQueue.enqueue(15);
    myQueue.enqueue(20);
    myQueue.enqueue(5);
    expect(myQueue.dequeue().value).toEqual(10);
    expect(myQueue.stackTwo.top.value).toEqual(15);
    expect(myQueue.stackTwo.top.next.value).toEqual(20);
    expect(myQueue.stackTwo.top.next.next.value).toEqual(5);
    expect(myQueue.stackOne.top).toBe(null);

    expect(myQueue.dequeue().value).toEqual(15);
    expect(myQueue.stackTwo.top.value).toEqual(20);
    expect(myQueue.stackTwo.top.next.value).toEqual(5);
    expect(myQueue.stackOne.top).toBe(null);
  })
});