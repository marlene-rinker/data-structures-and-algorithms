'use strict';
const test = require('./fifo-animal-shelter.js');

describe('Testing animal shelter', () => {
  it ('Should successfully add animals into the shelter', () => {
    let myShelter = new test.shelter();
    let dog1 = new test.animal('dog1', 'dog');
    let dog2 = new test.animal('dog2', 'dog');
    let cat1 = new test.animal('cat1', 'cat');
    let cat2 = new test.animal('cat2', 'cat');
    myShelter.enqueue(dog1);
    myShelter.enqueue(cat1);
    myShelter.enqueue(dog2);
    myShelter.enqueue(cat2);
    console.log(myShelter);
    expect(myShelter.animals[0].name).toEqual('dog1');
    expect(myShelter.animals[1].name).toEqual('cat1');
    expect(myShelter.animals[2].name).toEqual('dog2');
    expect(myShelter.animals[3].name).toEqual('cat2');
  })

  // it ('Should successfully add animals into the shelter', () => {
  //   let myShelter = new test.shelter();
  //   let dog1 = new test.animal('dog1', 'dog');
  //   let dog2 = new test.animal('dog2', 'dog');
  //   let cat1 = new test.animal('cat1', 'cat');
  //   let cat2 = new test.animal('cat2', 'cat');
  //   myShelter.enqueue(dog1);
  //   myShelter.enqueue(cat1);
  //   myShelter.enqueue(dog2);
  //   myShelter.enqueue(cat2);
  //   console.log(myShelter);
  //   expect(myShelter.animals[0].name).toEqual('dog1');
  //   expect(myShelter.animals[1].name).toEqual('cat1');
  //   expect(myShelter.animals[2].name).toEqual('dog2');
  //   expect(myShelter.animals[3].name).toEqual('cat2');
  // })

})