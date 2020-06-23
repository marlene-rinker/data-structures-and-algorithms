# data-structures-and-algorithms
[Queue with Stacks](/challenges.queueWithStacks/queue-with-stacks.md)


# Reverse an Array 
Reverse the contents of an array.

## Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Approach & Efficiency
Wrote a function that would take in an array, find the length of the array, then starting with the last item, pushes each item into a new array and returns the new array.

# Shift an Array 
Add a value to the middle of an array.

## Challenge
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency
Wrote a function that takes in an array and a value, creates a new array with the array values, finds the middle of the new array, then puts the value into the middle of the new array and returns the new array.

![whiteboard](/challenges/arrayShift/array-shift.jpg)


# Array Binary Search 
Search for a value in an array, return index of element if there, return -1 if not there.

## Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
Wrote a function that takes in an array and a value, searches for the value in the array. If the value is there, returns the index of the element. If the value isn't there, returns -1.

![whiteboard](/challenges/arrayBinarySearch/array-binary-search.jpg)

# Singly Linked List 
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Challenge
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

  - Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

  - Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

  - Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"

- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

- Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

## Approach & Efficiency
Created a Node class. Created a LinkedList class. The LinkedList class has three methods: includes(), insert(), and toString(). Created tests to verify the functionality. 

`insert()` takes in a value and adds a new node with that value to the head of the list (O(1) efficiency). `includes()` takes in a value and returns true if that value is in the list and false if it's not in the list (O(n) efficiency). `toString()` returns a string that represents all of the values in the list (O(n) efficiency).

## Whiteboard

![whiteboard](/data-structures/linkedList/linked-list.jpg)



# Linked List Insertions
Extend my LinkedList class to include append, insertBefore, and insertAfter functionality.

## Challenge
- Write the following methods for the Linked List class:

  - .append(value) which adds a new node with the given value to the end of the list

  - .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node

  - .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node


## Approach & Efficiency
Added three methods to the LinkedList class: append(), insertBefore(), and insertAfter(). Created tests to verify the functionality. 

`append()` takes in a value and adds a new node with that value to the end of the list (O(n) efficiency). `includesBefore()` takes in a value and a new value. It adds a new node with the new value to the list before the node with value (O(n) efficiency). `includesAfter()` takes in a value and a new value. It adds a new node with the new value to the list after the node with value (O(n) efficiency).

## Whiteboard

![whiteboard](/data-structures/linkedList/ll-insertions.jpg)

# Find k-th Value From End of Linked List 
Extend my LinkedList class to find the value of the node that is a certain number (k) from the end of the linked list.

## Challenge
- Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.


## Approach & Efficiency
Added two methods to the LinkedList class: getListLength() and kthFromEnd(). Created tests to verify the functionality.

`getListLength()` finds the length of the linked list (O(n) efficiency). `kthFromEnd()` takes in a number (k) and returns the value at the kth from the end position of the linked list (O(n) efficiency).


## Whiteboard

![whiteboard](/data-structures/linkedList/ll-kth-from-end.jpg)

# Merge Lists 
Write a function that takes in two linked lists and merges them into a zipped list.

## Challenge
Write a function called `mergeLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.


## Approach & Efficiency
Added a function called mergeLists in a new file that requires my LinkedList class from the previous linked list challenges. Created tests to verify the functionality.

`mergeLists()` takes in two linked lists, creates a new list, puts nodes alternately from the two lists into the new list. I think this might be 0(1) since I'm re-assigning the pointers, not traversing through each list. It may be 0(n) since I have to do this for each node in each list.

## Whiteboard
![whiteboard](/challenges/llMerge/ll-merge.jpg)

# Stacks and Queues
Create a Node class. Create a Stack class. Create methods for the Stack class. Create a Queue class. Create methods for the Queue class.

## Challenge
Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

Create a Stack class that has a top property. It creates an empty Stack when instantiated.

- This object should be aware of a default empty value assigned to top when the stack is created.

- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.

- Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.

  - Should raise exception when called on empty stack

- Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.

  - Should raise exception when called on empty stack

- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.

Create a Queue class that has a front property. It creates an empty Queue when instantiated.

- This object should be aware of a default empty value assigned to front when the queue is created.

- Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

- Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.

  - Should raise exception when called on empty queue

- Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

  - Should raise exception when called on empty queue

- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

Be sure to follow your languages best practices for naming conventions.


## Approach & Efficiency
Created a Node class. Created a Stack class. The Stack class has 4 methods. Created a Queue class. The Queue class has 4 methods. Created tests to verify the functionality. 

**Stack Methods**

`push()` takes in a value and adds a new node with that value to the top of the stack (O(1) efficiency). `pop()` removes the node from the top of the stack and returns that node's value (O(1) efficiency). `peek()` returns the value of the node at the top of the stack (O(1) efficiency). `isEmpty()` returns a boolean indicating if the stack is empty or not (O(1) efficiency).

**Queue Methods**

`enqueue()` takes in a value and adds a new node with that value to the back of the queue (O(1) efficiency). `dequeue()` removes the node from the front of the queue and returns that node's value (O(1) efficiency). `peek()` returns the value of the node at the front of the queue (O(1) efficiency). `isEmpty()` returns a boolean indicating if the queue is empty or not (O(1) efficiency).

## Whiteboard

Node and Stack

![whiteboard - Stack](/data-structures/stacksAndQueues/stack.jpg)

Queue

![whiteboard - Queue](/data-structures/stacksAndQueues/queue.jpg)