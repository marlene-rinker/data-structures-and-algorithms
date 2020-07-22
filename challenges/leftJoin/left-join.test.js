'use strict';

const HashMap = require('../../data-structures/hashtable/hashtable.js');

const leftJoin = require('./left-join.js');

describe('Testing left join', () => {
  it ('should return an array with the values correctly left-joined', () => {

  const synonyms = new HashMap(1024);
  synonyms.add('fond', 'enamored');
  synonyms.add('wrath', 'anger');
  synonyms.add('diligent', 'employed');
  synonyms.add('outfit', 'garb');
  synonyms.add('guide', 'usher');

  const antonyms = new HashMap(1024);
  antonyms.add('fond', 'averse');
  antonyms.add('wrath', 'delight');
  antonyms.add('diligent', 'idle');
  antonyms.add('guide', 'follow');
  antonyms.add('flow', 'jam');

  expect(leftJoin(synonyms, antonyms)).toEqual([
    [ 'diligent', 'employed', 'idle' ],
    [ 'outfit', 'garb', null ],
    [ 'fond', 'enamored', 'averse' ],
    [ 'guide', 'usher', 'follow' ],
    [ 'wrath', 'anger', 'delight' ]
  ]);
  })

  
  it ('should return an array with the values from hashmap1 if hashmap2 is empty', () => {

  const synonyms = new HashMap(1024);
  synonyms.add('fond', 'enamored');
  synonyms.add('wrath', 'anger');
  synonyms.add('diligent', 'employed');
  synonyms.add('outfit', 'garb');
  synonyms.add('guide', 'usher');

  const antonyms = new HashMap(1024);
  

  expect(leftJoin(synonyms, antonyms)).toEqual([
    [ 'diligent', 'employed', null ],
    [ 'outfit', 'garb', null ],
    [ 'fond', 'enamored', null ],
    [ 'guide', 'usher', null ],
    [ 'wrath', 'anger', null ]
  ]);
  })

  it ('should return an empty array if hashmap1 is empty', () => {

    const synonyms = new HashMap(1024);
    
  
    const antonyms = new HashMap(1024);
    antonyms.add('fond', 'averse');
    antonyms.add('wrath', 'delight');
    antonyms.add('diligent', 'idle');
    antonyms.add('guide', 'follow');
    antonyms.add('flow', 'jam');
  
    expect(leftJoin(synonyms, antonyms)).toEqual([]);
    })

    it ('should return an empty array if both hashmaps are empty', () => {

      const synonyms = new HashMap(1024);
      
      const antonyms = new HashMap(1024);
    
      expect(leftJoin(synonyms, antonyms)).toEqual([]);
      })
});

