# Queue with Stacks 
Write a class that uses enqueue and dequeue methods utilizing two stack objects.

## Challenge
Create a brand new `PseudoQueue` class. Do not use an existing Queue. Instead, this `PseudoQueue` class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 `Stack` objects. Ensure that you create your class with the following methods:

- enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
- dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.

The `Stack` instances have only `push`, `pop`, and `peek` methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.


## Approach & Efficiency
Added a function called mergeLists in a new file that requires my LinkedList class from the previous linked list challenges. Created tests to verify the functionality.

`mergeLists()` takes in two linked lists, creates a new list, puts nodes alternately from the two lists into the new list. I think this might be 0(1) since I'm re-assigning the pointers, not traversing through each list. It may be 0(n) since I have to do this for each node in each list.

## Whiteboard
![whiteboard](/queue-with-stacks.jpg)
