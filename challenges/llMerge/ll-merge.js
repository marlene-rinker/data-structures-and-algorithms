'use strict';
const LinkedList = require('../../data-structures/linkedList/linked-list.js');

let mergeLists = function(list1, list2){
  if (list1.head === null){
    return list2.head;
  }
  if (list2.head === null){
    return list1.head;
  }
  let list3 = new LinkedList();
  list3.head = list1.head;
  list1.head = list1.head.next;
  let current = list3.head;
  while(list1.head && list2.head) {
    current.next = list2.head;
    current = current.next;
    list2.head = list2.head.next;
  
    current.next = list1.head;
    current = current.next;
    list1.head = list1.head.next;
  }
  if (list1.head) {
    current.next = list1.head;
  }
  if (list2.head){
    current.next = list2.head;
  }
  return list3.head;

}

module.exports = mergeLists;
