'use strict';
const test = require('./fifo-animal-shelter.js');

describe('Testing animal shelter', () => {
  it ('Enqueue should successfully add animals into the shelter', () => {
    let myShelter = new test.shelter();
    let dog1 = new test.animal('dog1', 'dog');
    let dog2 = new test.animal('dog2', 'dog');
    let cat1 = new test.animal('cat1', 'cat');
    let cat2 = new test.animal('cat2', 'cat');
    myShelter.enqueue(dog1);
    myShelter.enqueue(cat1);
    myShelter.enqueue(dog2);
    myShelter.enqueue(cat2);
    expect(myShelter.animals[0].name).toEqual('dog1');
    expect(myShelter.animals[1].name).toEqual('cat1');
    expect(myShelter.animals[2].name).toEqual('dog2');
    expect(myShelter.animals[3].name).toEqual('cat2');
  })

  it ('Dequeue should successfully return the type of animal you request that entered the shelter first', () => {
    let myShelter = new test.shelter();
    let dog1 = new test.animal('dog1', 'dog');
    let dog2 = new test.animal('dog2', 'dog');
    let cat1 = new test.animal('cat1', 'cat');
    let cat2 = new test.animal('cat2', 'cat');
    myShelter.enqueue(dog1);
    myShelter.enqueue(cat1);
    myShelter.enqueue(dog2);
    myShelter.enqueue(cat2);
    expect(myShelter.dequeue('cat').name).toEqual('cat1');
    expect(myShelter.animals[0].name).toEqual('dog1');
  })

  it ('Dequeue should successfully return the animal that\'s been in the shelter longest if pref is not dog or cat', () => {
    let myShelter = new test.shelter();
    let dog1 = new test.animal('dog1', 'dog');
    let dog2 = new test.animal('dog2', 'dog');
    let cat1 = new test.animal('cat1', 'cat');
    let cat2 = new test.animal('cat2', 'cat');
    myShelter.enqueue(dog1);
    myShelter.enqueue(cat1);
    myShelter.enqueue(dog2);
    myShelter.enqueue(cat2);
    expect(myShelter.dequeue('pig').name).toEqual('dog1');
    expect(myShelter.animals[0].name).toEqual('cat1');
  })

  it ('Dequeue should successfully return the animal that\'s been in the shelter longest if pref is not provided', () => {
    let myShelter = new test.shelter();
    let dog1 = new test.animal('dog1', 'dog');
    let dog2 = new test.animal('dog2', 'dog');
    let cat1 = new test.animal('cat1', 'cat');
    let cat2 = new test.animal('cat2', 'cat');
    myShelter.enqueue(dog1);
    myShelter.enqueue(cat1);
    myShelter.enqueue(dog2);
    myShelter.enqueue(cat2);
    expect(myShelter.dequeue().name).toEqual('dog1');
    expect(myShelter.animals[0].name).toEqual('cat1');
  })

  it ('Dequeue should successfully return a message if animal type requested isn\'t available', () => {
    let myShelter = new test.shelter();
    let cat1 = new test.animal('cat1', 'cat');
    let cat2 = new test.animal('cat2', 'cat');
    myShelter.enqueue(cat1);
    myShelter.enqueue(cat2);
    expect(myShelter.dequeue('dog')).toEqual('No dog available');
  })

  it ('Dequeue should successfully return a message if the shelter is empty', () => {
    let myShelter = new test.shelter();
    expect(myShelter.dequeue('dog')).toEqual('Shelter is empty');
  })

})