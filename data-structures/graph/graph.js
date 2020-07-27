'use strict';

const util = require('util');

class Vertex {
  constructor(value) {
    this.value = value; // any value
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjlist = new Map(); // contain all of the vertices(nodes) in our graph
  }



  addNode(value) {
    const vertex = new Vertex(value);
    this.adjlist.set(vertex, []);

    return vertex;
  }



  addEdge(startVertex, endVertex) {
    if (!this.adjlist.has(startVertex) || !this.adjlist.has(endVertex)) {
      console.log('Invalid Vertices');
    }

    const edges = this.adjlist.get(startVertex);
    edges.push(new Edge(endVertex, 0));
  }



  getNeighbors(vertex) {
    if (!this.adjlist.has(vertex)) {
      console.log('Invalid Vertex');
    }

    return [...this.adjlist.get(vertex)];
  }

  getNodes() {
    let nodes = [];
    for (let node of this.adjlist) {
      nodes.push(node);
    }
    return nodes; //returns an array that contains each node(vertex) as an array
  }

  size() {
    return this.adjlist.size;
  }

  
  
}

module.exports = Graph;

const myGraph = new Graph();
const one = myGraph.addNode(1);
const two = myGraph.addNode(2);
const four = myGraph.addNode(4);
const six = myGraph.addNode(6);


myGraph.addEdge(one, two);
myGraph.addEdge(one, four);
myGraph.addEdge(two, four);
myGraph.addEdge(four, six);

console.log(myGraph.size());
console.log(myGraph.getNeighbors(one));
