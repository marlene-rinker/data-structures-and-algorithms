# data-structures-and-algorithms


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

## API
`insert()` takes in a value and adds a new node with that value to the head of the list. `includes()` takes in a value and returns true if that value is in the list and false if it's not in the list. `toString()` returns a string that represents all of the values in the list.


# Linked List Insertions
Extend my LinkedList class to include append, insertBefore, and insertAfter functionality.

## Challenge
- Write the following methods for the Linked List class:

  - .append(value) which adds a new node with the given value to the end of the list

  - .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node

  - .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node


## Approach & Efficiency
Added three methods to the LinkedList class: append(), insertBefore(), and insertAfter(). Created tests to verify the functionality. 

## API
`append()` takes in a value and adds a new node with that value to the end of the list. `includesBefore()` takes in a value and a new value. It adds a new node with the new value to the list before the node with value. `includesAfter()` takes in a value and a new value. It adds a new node with the new value to the list after the node with value.

# Find k-th Value From End of Linked List 
Extend my LinkedList class to find the value of the node that is a certain number (k) from the end of the linked list.

## Challenge
- Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.


## Approach & Efficiency
Added two methods to the LinkedList class: getListLength() and kthFromEnd(). Created tests to verify the functionality.

## API
`getListLength()` finds the length of the linked list. `kthFromEnd()` takes in a number (k) and returns the value at the kth from the end position of the linked list. 

# Merge Lists 
Write a function that takes in two linked lists and merges them into a zipped list.

## Challenge
Write a function called `mergeLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.


## Approach & Efficiency
Added a function called mergeLists in a new file that requires my LinkedList class from the previous linked list challenges. Created tests to verify the functionality.

## API
`mergeLists()` takes in two linked lists, creates a new list, puts nodes alternately from the two lists into the new list. 