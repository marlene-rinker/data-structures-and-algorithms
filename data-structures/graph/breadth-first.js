'use strict';

const Graph = require('./graph.js');

class breadthFirst extends Graph {
  traverseBreadthFirst(startVertex) {

    const queue = [];
    const visitedNodes = new Set(); // this is basically an array of unique values;

    queue.push(startVertex);
    visitedNodes.add(startVertex);
    console.log(queue);

    while (queue.length) {
      const current = queue.shift(); // the new pop()!!

      
      const neighbors = this.getNeighbors(current);
      

      // check if there are neighbors that haven't been visited
      for (let edge of neighbors) {
        
        const vertex = edge.vertex;

        if (visitedNodes.has(vertex)) {
          continue;
        } else {
          visitedNodes.add(vertex);
        }
        

        // push each edge that is adjacent to current into the queue.
        queue.push(vertex);
  
      }
    };
    return visitedNodes;
  };
};  





module.exports = breadthFirst;