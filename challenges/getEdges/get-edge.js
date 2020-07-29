'use strict';

const Graph = require('../../data-structures/graph/graph.js');

//trip is an array of cities for the business trip, flights is a graph with the flight routes - each city is a vertex/node
function verifyTrip(trip, flights) {
  let cost = 0;

  if(trip.length <= 1) {
    return [false, 0];
  }

  
  
  
  for (let i = 0; i < trip.length-1; i++) {
    let neighbors = flights.getNeighbors(trip[i]);
    let run = compareNodes(neighbors, trip[i+1]);
    if (run[0]) {
      cost += run[1];
      continue;
    }

    neighbors = flights.getNeighbors(trip[i+1]);
    run = compareNodes(neighbors, trip[i]);
    if (run[0]) {
      cost += run[1];
      continue;
    }
    return [false, 0];
       

  }
  return [true, cost];
};

function compareNodes(neighbors, searchNode) {
    for (let n=0; n<neighbors.length; n++) {
      if (searchNode === neighbors[n].vertex) {
        return [true, neighbors[n].weight];
      }
    }
    
  return [false, 0];
     
};

module.exports = verifyTrip;



