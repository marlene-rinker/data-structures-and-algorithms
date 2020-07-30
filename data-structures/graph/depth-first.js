'use strict';

const Graph = require('./graph.js');

class depthFirst extends Graph {
  traverseDepthFirst(startVertex) {
     const visitedNodes = [];

     this.traverseDepthFirstHelper(visitedNodes, startVertex);
     return visitedNodes;
  }

  traverseDepthFirstHelper(visitedNodes, startVertex) {
    visitedNodes.push(startVertex.value);
    const neighbors = this.getNeighbors(startVertex);
    for (let edge of neighbors) {
      if (visitedNodes.includes(edge.vertex.value)) {
        continue;
      }
      this.traverseDepthFirstHelper(visitedNodes, edge.vertex);
    }
  }
};  

module.exports = depthFirst;


const myGraph = new depthFirst();
const a = myGraph.addNode('A');
const b = myGraph.addNode('B');
const c = myGraph.addNode('C');
const d = myGraph.addNode('D');
const e = myGraph.addNode('E');
const f = myGraph.addNode('F');
const g = myGraph.addNode('G');
const h = myGraph.addNode('H');


myGraph.addEdge(a, b);
myGraph.addEdge(a, d);
myGraph.addEdge(b, c);
myGraph.addEdge(b, d);
myGraph.addEdge(c, g);
myGraph.addEdge(d, e);
myGraph.addEdge(d, h);
myGraph.addEdge(d, f);
myGraph.addEdge(f, h);

console.log(myGraph.traverseDepthFirst(a));

// const myGraph = new depthFirst();
// const one = myGraph.addNode(1);
// const two = myGraph.addNode(2);
// const four = myGraph.addNode(4);
// const six = myGraph.addNode(6);


// myGraph.addEdge(one, two);
// myGraph.addEdge(one, four);
// myGraph.addEdge(two, four);
// myGraph.addEdge(four, six);
// console.log(myGraph.traverseDepthFirst(one));