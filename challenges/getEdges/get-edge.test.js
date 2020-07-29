const verifyTrip = require('./get-edge.js');
const Graph = require('../../data-structures/graph/graph.js');


describe('Testing find trip', () => {
  it ('should return true and cost of trip if direct routes', () => {
    const myGraph = new Graph();
    const phoenix = myGraph.addNode('Phoenix');
    const atlanta = myGraph.addNode('Atlanta');
    const jacksonville = myGraph.addNode('Jacksonville');
    const miami = myGraph.addNode('Miami');
    const denver = myGraph.addNode('Denver');
    const freeport = myGraph.addNode('Freeport');
    myGraph.addEdge(phoenix, atlanta, 150);
    myGraph.addEdge(phoenix, jacksonville, 82);
    myGraph.addEdge(atlanta, jacksonville, 10);
    myGraph.addEdge(atlanta, miami, 42);
    myGraph.addEdge(miami, denver, 73);
    myGraph.addEdge(miami, jacksonville, 30);
    myGraph.addEdge(denver, freeport, 100);
    myGraph.addEdge(freeport, jacksonville, 25);
    let trip = [jacksonville, phoenix];
    let trip2 = [atlanta, miami, denver];
    expect(verifyTrip(trip, myGraph)).toEqual([true, 82])
    expect(verifyTrip(trip2, myGraph)).toEqual([true, 115])
  })

  it ('should return false and 0 if not all direct routes', () => {
    const myGraph = new Graph();
    const phoenix = myGraph.addNode('Phoenix');
    const atlanta = myGraph.addNode('Atlanta');
    const jacksonville = myGraph.addNode('Jacksonville');
    const miami = myGraph.addNode('Miami');
    const denver = myGraph.addNode('Denver');
    const freeport = myGraph.addNode('Freeport');
    myGraph.addEdge(phoenix, atlanta, 150);
    myGraph.addEdge(phoenix, jacksonville, 82);
    myGraph.addEdge(atlanta, jacksonville, 10);
    myGraph.addEdge(atlanta, miami, 42);
    myGraph.addEdge(miami, denver, 73);
    myGraph.addEdge(miami, jacksonville, 30);
    myGraph.addEdge(denver, freeport, 100);
    myGraph.addEdge(freeport, jacksonville, 25);
    let trip3 = [denver, phoenix];
    let trip4 = [freeport, atlanta, denver];
    expect(verifyTrip(trip3, myGraph)).toEqual([false, 0])
    expect(verifyTrip(trip4, myGraph)).toEqual([false, 0])
  })

  it ('should return false and 0 if no cities or one city in the itinerary', () => {
    const myGraph = new Graph();
    const phoenix = myGraph.addNode('Phoenix');
    const atlanta = myGraph.addNode('Atlanta');
    const jacksonville = myGraph.addNode('Jacksonville');
    const miami = myGraph.addNode('Miami');
    const denver = myGraph.addNode('Denver');
    const freeport = myGraph.addNode('Freeport');
    myGraph.addEdge(phoenix, atlanta, 150);
    myGraph.addEdge(phoenix, jacksonville, 82);
    myGraph.addEdge(atlanta, jacksonville, 10);
    myGraph.addEdge(atlanta, miami, 42);
    myGraph.addEdge(miami, denver, 73);
    myGraph.addEdge(miami, jacksonville, 30);
    myGraph.addEdge(denver, freeport, 100);
    myGraph.addEdge(freeport, jacksonville, 25);
    let trip5 = [phoenix];
    let trip6 = [];
    expect(verifyTrip(trip5, myGraph)).toEqual([false, 0])
    expect(verifyTrip(trip6, myGraph)).toEqual([false, 0])
  })

})