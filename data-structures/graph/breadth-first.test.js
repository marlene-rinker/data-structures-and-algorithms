const breadthFirst = require('./breadth-first.js');

describe('Testing breadth first traversal', () => {

  it ('Should return a collection of nodes in breadth first traversal order', () => {
    const myGraph = new breadthFirst();
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
    let values = myGraph.traverseBreadthFirst(one);
    let testArray = [];
    for (let item of values) {
      testArray.push(item.value);
    }
    expect(testArray[0]).toEqual(1);
    expect(testArray[1]).toEqual(2);
    expect(testArray[2]).toEqual(4);
    expect(testArray[3]).toEqual(6);
    expect(testArray[4]).toEqual(8);
    expect(testArray[5]).toEqual(10);     
  })

  it ('Should return a collection of nodes in breadth first traversal order', () => {
    const myGraph = new breadthFirst();
    const one = myGraph.addNode(1);
    const two = myGraph.addNode(2);
    const four = myGraph.addNode(4);
    const six = myGraph.addNode(6);
    const seven = myGraph.addNode(7);
    const eight = myGraph.addNode(8);
    const ten = myGraph.addNode(10);

    myGraph.addEdge(one, two);
    myGraph.addEdge(one, four);
    myGraph.addEdge(two, ten);
    myGraph.addEdge(four, six);
    myGraph.addEdge(six, eight);
    myGraph.addEdge(six, ten);
    myGraph.addEdge(ten, seven);
    let values = myGraph.traverseBreadthFirst(one);
    let testArray = [];
    for (let item of values) {
      testArray.push(item.value);
    }
    expect(testArray[0]).toEqual(1);
    expect(testArray[1]).toEqual(2);
    expect(testArray[2]).toEqual(4);
    expect(testArray[3]).toEqual(10);
    expect(testArray[4]).toEqual(6);
    expect(testArray[5]).toEqual(7);     
    expect(testArray[6]).toEqual(8);     
  })

  it ('Should return a collection of nodes in breadth first traversal order', () => {
    const myGraph = new breadthFirst();
    const one = myGraph.addNode(1);
    const two = myGraph.addNode(2);
    
    let values = myGraph.traverseBreadthFirst(one);
    let testArray = [];
    for (let item of values) {
      testArray.push(item.value);
    }
    expect(testArray[0]).toEqual(1);
    expect(testArray[1]).toEqual(undefined);//only node 1 should be in the set
     
  })

});