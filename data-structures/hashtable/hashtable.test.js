'use strict';

const HashTable = require('./hashtable.js');

describe('Testing linked list', () => {
  it ('Should create a hash', () => {
    const myHashTable = new HashTable(1024);
    let hash = myHashTable.hash('Test');
    expect(hash).toBe(352);
    expect(hash).not.toBe(100);
  })

  it ('Should add an item to the hash table', () => {
    const myHashTable = new HashTable(1024);
    myHashTable.add('Test', 'test info');
    expect(myHashTable.contains('Test')).toEqual(true);
  })

  it ('Should get an item from the hash table', () => {
    const myHashTable = new HashTable(1024);
    myHashTable.add('Test', 'test info');
    expect(myHashTable.get('Test')).toEqual('test info');
  })

  it ('Should be able to check if the hash table contains an item', () => {
    const myHashTable = new HashTable(1024);
    myHashTable.add('Test', 'test info');
    expect(myHashTable.contains('Test')).toEqual(true);
    expect(myHashTable.contains('Test2')).toEqual(false);
  })

});