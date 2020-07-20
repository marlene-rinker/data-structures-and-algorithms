# Repeated Word
Find the first repeated word in a "book"

## Challenge
- Write a function that accepts a lengthy string parameter.

- Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.


## Approach & Efficiency
Created a HashTable class with a constructor and four methods. Created tests to verify the functionality. (Copied in Node and LinkedList classes to use with the HashTable class).

In the HashTable class, `hash` takes in a key and uses ascii values and math to determine the index. This has an efficiency of O(n). `add` takes in a key and value and uses the hash method to determine where to put the key/value and put them in the table. This usually has an efficiency of O(1). `get` takes in a key and uses the hash method to find its index so it can get the value. This usually has an efficiency of O(1). `contains` takes in a key and uses the hash method to find its index and then checks to see if its in the table or not and returns a boolean. This usually has an efficiency of O(1).


## Whiteboard
![whiteboard](repeated-word.jpg)