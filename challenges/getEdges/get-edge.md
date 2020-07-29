# Graph Get Edge
Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

## Challenge
Write a function which takes in a graph and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.



## Approach & Efficiency
Created a function that determines if a trip is possible with direct flights and how much it would cost. Created tests to verify the functionality. 

`verifyTrip` traverses the graph using a breadth-first approach searching for a node with the value of a certain city. When it finds the node, it checks to see if the next city in the array is one of its neighbors. If so, it gets the weight of the edge between them. If there are more cities in the array, it checks to see if the next city in the array is a neighbor of the second city. If so, it gets the weight of the edge adds it to the previous weight. This continues as long as there are cities in the array. If you can get to all the cities, return true with the total weight value. If you can't get to all of the cities, then return false with $0. This method is O(n) since it could go through the whole graph.


## Whiteboard
![whiteboard](get-edge.jpg)