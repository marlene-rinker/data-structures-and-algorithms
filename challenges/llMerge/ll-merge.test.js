'use strict';

const LinkedList = require('../../data-structures/linkedList/linked-list.js');
const mergeLists = require('./ll-merge.js');


describe('Testing merge lists', () => {
    
  it ('Should properly create a new zipped list when lists are same length', () => {
    const myList1 = new LinkedList();
    myList1.append(1);
    myList1.append(3);
    myList1.append(2);

    const myList2 = new LinkedList();
    myList2.append(5);
    myList2.append(9);
    myList2.append(4);

    let myList3 = mergeLists(myList1, myList2);
    console.log(myList3);
    expect(myList3.value).toEqual(1);
    expect(myList3.next.value).toEqual(5);
    expect(myList3.next.next.value).toEqual(3);
    expect(myList3.next.next.next.value).toEqual(9);
    expect(myList3.next.next.next.next.value).toEqual(2);
    expect(myList3.next.next.next.next.next.value).toEqual(4);
  })

  it ('Should properly create a new zipped list when list1 is shorter than list2', () => {
    const myList1 = new LinkedList();
    myList1.append(1);
    myList1.append(3);
    

    const myList2 = new LinkedList();
    myList2.append(5);
    myList2.append(9);
    myList2.append(4);

    let myList3 = mergeLists(myList1, myList2);
    console.log(myList3);
    expect(myList3.value).toEqual(1);
    expect(myList3.next.value).toEqual(5);
    expect(myList3.next.next.value).toEqual(3);
    expect(myList3.next.next.next.value).toEqual(9);
    expect(myList3.next.next.next.next.value).toEqual(4);
  })

  it ('Should properly create a new zipped list when list1 is longer than list2', () => {
    const myList1 = new LinkedList();
    myList1.append(1);
    myList1.append(3);
    myList1.append(2);

    const myList2 = new LinkedList();
    myList2.append(5);
    myList2.append(9);
    

    let myList3 = mergeLists(myList1, myList2);
    console.log(myList3);
    expect(myList3.value).toEqual(1);
    expect(myList3.next.value).toEqual(5);
    expect(myList3.next.next.value).toEqual(3);
    expect(myList3.next.next.next.value).toEqual(9);
    expect(myList3.next.next.next.next.value).toEqual(2);
  })

  it ('Should properly create a new list when list1 is empty', () => {
    const myList1 = new LinkedList();
    

    const myList2 = new LinkedList();
    myList2.append(5);
    myList2.append(9);
    myList2.append(4);
    

    let myList3 = mergeLists(myList1, myList2);
    console.log(myList3);
    expect(myList3.value).toEqual(5);
    expect(myList3.next.value).toEqual(9);
    expect(myList3.next.next.value).toEqual(4);
  })

  it ('Should properly create a new list when list2 is empty', () => {
    const myList1 = new LinkedList();
    myList1.append(1);
    myList1.append(3);
    myList1.append(2);

    const myList2 = new LinkedList();
        

    let myList3 = mergeLists(myList1, myList2);
    console.log(myList3);
    expect(myList3.value).toEqual(1);
    expect(myList3.next.value).toEqual(3);
    expect(myList3.next.next.value).toEqual(2);
  })
    
});

