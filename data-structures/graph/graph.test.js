const Graph = require('./graph.js');

describe('Testing graph', () => {
  it ('Should create a graph with a node', () => {
    const myGraph = new Graph();
    myGraph.addNode(1);
    expect(myGraph).not.toBe(null);
    
  })

  it ('Should create a graph with nodes and edges', () => {
    const myGraph = new Graph();
    const one = myGraph.addNode(1);
    const two = myGraph.addNode(2);
    const four = myGraph.addNode(4);
    const six = myGraph.addNode(6);
    const seven = myGraph.addNode(7);
    const eight = myGraph.addNode(8);
    const ten = myGraph.addNode(10);

    myGraph.addEdge(one, two);
    myGraph.addEdge(one, four);
    myGraph.addEdge(two, four);
    myGraph.addEdge(four, six);
    myGraph.addEdge(six, eight);
    myGraph.addEdge(six, ten);
    myGraph.addEdge(seven, ten);
    expect(myGraph.size()).toBe(7);
    expect(typeof myGraph).toBe('object');
    expect(myGraph).toHaveProperty('adjlist');
    expect(myGraph.adjlist).not.toBe(null);    
  })

  it ('Should get neighbors of a node', () => {
    const myGraph = new Graph();
    const one = myGraph.addNode(1);
    const two = myGraph.addNode(2);
    const four = myGraph.addNode(4);
    const six = myGraph.addNode(6);
    

    myGraph.addEdge(one, two);
    myGraph.addEdge(one, four);
    myGraph.addEdge(two, four);
    myGraph.addEdge(four, six);
    
    expect(myGraph.getNeighbors(one)[0].vertex.value).toEqual(2);
    expect(myGraph.getNeighbors(one)[1].vertex.value).toEqual(4);
  })

  it ('Should get the nodes from the graph', () => {
    const myGraph = new Graph();
    const one = myGraph.addNode(1);
    const two = myGraph.addNode(2);
    const four = myGraph.addNode(4); 
    myGraph.addEdge(one, two);
    myGraph.addEdge(one, four);
    myGraph.addEdge(two, four);
    let nodes = myGraph.getNodes();
    expect(nodes[0][0].value).toEqual(1);
    expect(nodes[1][0].value).toEqual(2);
    expect(nodes[2][0].value).toEqual(4);
  })

  it ('Should be able to get the number of nodes in the graph', () => {
    const myGraph1 = new Graph();
    myGraph1.addNode(1);
    myGraph1.addNode(2);

    const myGraph2 = new Graph();
    const one = myGraph2.addNode(1);
    const two = myGraph2.addNode(2);
    const four = myGraph2.addNode(4);
    const six = myGraph2.addNode(6);
    const seven = myGraph2.addNode(7);
    const eight = myGraph2.addNode(8);
    const ten = myGraph2.addNode(10);

    myGraph2.addEdge(one, two);
    myGraph2.addEdge(one, four);
    myGraph2.addEdge(two, four);
    myGraph2.addEdge(four, six);
    myGraph2.addEdge(six, eight);
    myGraph2.addEdge(six, ten);
    myGraph2.addEdge(seven, ten);


    expect(myGraph1.size()).toBe(2);
    expect(myGraph2.size()).toBe(7);
  })

});