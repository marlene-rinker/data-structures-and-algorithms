'use strict';

const LinkedList = require('./linked-list.js');

describe('Testing linked list', () => {
  it ('Should instantiate an empty list', () => {
    const myList = new LinkedList();

    expect(myList).toEqual({ head: null });
    })

  it ('Should insert properly into the linked list at head', () => {
    const myList = new LinkedList();
    myList.insert('Test Entry');
    expect(myList.head).toEqual({ value: 'Test Entry', next: null });
    })
    
  it ('Head property properly points to the first node in the linked list', () => {
    const myList = new LinkedList();
    myList.insert('Test entry 1');
    myList.insert('Test entry 2');  
    expect(myList.head.value).toEqual('Test entry 2');
    }) 

  it ('Can properly insert nodes into the linked list', () => {
    const myList = new LinkedList();
    myList.insert('Test entry 1');
    myList.insert('Test entry 2');
    expect(myList.head.value).toEqual('Test entry 2');
    expect(myList.head.next.value).toEqual('Test entry 1');
    })
    
  it ('Returns true when finds a value in the linked list', () => {
    const myList = new LinkedList();
    myList.insert('Test entry 1');
    myList.insert('Test entry 2');
    let result = myList.includes('Test entry 1');
    expect(result).toBe(true);
    })
    
  it ('Returns false when doesn\'t find a value in the linked list', () => {
    const myList = new LinkedList();
    myList.insert('Test entry 1');
    myList.insert('Test entry 2');
    let result = myList.includes('Test entry 3');
    expect(result).toBe(false);
    }) 
    
  it ('Properly returns a collection of all the values in the linked list', () => {
    const myList = new LinkedList();
    myList.insert('Test entry 1');
    myList.insert('Test entry 2');
    expect(myList.toString()).toEqual('{ Test entry 2 } -> { Test entry 1 } -> NULL');
    })  

  });

  describe('Testing more linked list functionality', () => {
    
    it ('Should insert properly into the linked list at the end', () => {
      const myList = new LinkedList();
      myList.insert('Initial Entry');
      myList.append('Appended Entry');
      expect(myList.head.next).toEqual({ value: 'Appended Entry', next: null });
    })
      
    it ('Should insert multiple nodes properly into the linked list at the end', () => {
      const myList = new LinkedList();
      myList.insert('Initial Entry');
      myList.append('Appended Entry 1');
      expect(myList.head.next).toEqual({ value: 'Appended Entry 1', next: null });
      myList.append('Appended Entry 2');
      expect(myList.head.next.next).toEqual({ value: 'Appended Entry 2', next: null });
    })
  
    it ('Can insert a node before a node in the middle of the linked list', () => {
      const myList = new LinkedList();
      myList.insert('Test entry 1');
      myList.insert('Test entry 2');
      myList.insert('Test entry 3');
      myList.insertBefore('Test entry 2', 'Inserted entry');
      expect(myList.head.next.value).toEqual('Inserted entry');
      expect(myList.head.next.next.value).toEqual('Test entry 2');
    })

    it ('Can insert a node before the first node in the linked list', () => {
      const myList = new LinkedList();
      myList.insert('Test entry 1');
      myList.insertBefore('Test entry 1', 'Inserted entry');
      expect(myList.head.value).toEqual('Inserted entry');
      expect(myList.head.next.value).toEqual('Test entry 1');
    })  


    it ('Can insert a node after a node in the middle of the linked list', () => {
      const myList = new LinkedList();
      myList.insert('Test entry 1');
      myList.insert('Test entry 2');
      myList.insert('Test entry 3');
      myList.insertAfter('Test entry 2', 'Inserted entry');
      expect(myList.head.next.value).toEqual('Test entry 2');
      expect(myList.head.next.next.value).toEqual('Inserted entry');
    }) 
      
    it ('Can insert a node after the last node of the linked list', () => {
      const myList = new LinkedList();
      myList.insert('Test entry 1');
      myList.insert('Test entry 2');
      myList.insert('Test entry 3');
      myList.insertAfter('Test entry 1', 'Inserted entry');
      expect(myList.head.next.next.value).toEqual('Test entry 1');
      expect(myList.head.next.next.next).toEqual({ value: 'Inserted entry', next: null });
    })
      
   });

   describe('Testing find value at kth from end of linked list', () => {
    
    it ('Should log exception when k is greater than the length of the list', () => {
      const myList = new LinkedList();
      myList.insert(1);
      myList.insert(2);
      expect(myList.kthFromEnd(4)).toEqual('Exception: Invalid list position');
    })

    it ('Should log exception when k is equal to the length of the list', () => {
      const myList = new LinkedList();
      myList.insert(1);
      myList.insert(2);
      expect(myList.kthFromEnd(2)).toEqual('Exception: Invalid list position');
    })

    it ('Should log exception when k is not a positive integer', () => {
      const myList = new LinkedList();
      myList.insert(1);
      myList.insert(2);
      expect(myList.kthFromEnd(-2)).toEqual('Exception: Invalid list position');
    })

    it ('Should work when linked list is a size of 1', () => {
      const myList = new LinkedList();
      myList.insert(1);
      expect(myList.kthFromEnd(2)).toEqual('Exception: Invalid list position');
      expect(myList.kthFromEnd(0)).toEqual(1);
    })

    it ('Should work when k from end of list is in the middle of the list', () => {
      const myList = new LinkedList();
      myList.insert(1);
      myList.insert(2);
      myList.insert(3);
      myList.insert(4);
      myList.insert(5);
      myList.insert(6);
      expect(myList.kthFromEnd(3)).toEqual(4);
    }) 
   });
  

  