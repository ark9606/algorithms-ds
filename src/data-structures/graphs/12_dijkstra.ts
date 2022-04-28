import {PriorityQueue} from "../heaps/08_priority_queue";

export class Graph {
  protected readonly adjList: any;

  constructor() {
    this.adjList = {};
  }

  addVertex(vertexName: string): void {
    if (!this.adjList[vertexName]) {
      this.adjList[vertexName] = {};
    }
  }

  addEdge(vertex1: string, vertex2: string, weight: number): void {
    if (this.adjList[vertex1] && this.adjList[vertex2]) {
      // if graph directed leave only first
      this.adjList[vertex1][vertex2] = weight;
      // as graph undirected, add also reverse edge
      this.adjList[vertex2][vertex1] = weight;
    }
  }

  public removeEdge(vertex1: string, vertex2: string): void {
    if (this.adjList[vertex1]) {
      for (const vertex in this.adjList[vertex1]) {
        if (vertex === vertex2) {
          delete this.adjList[vertex1][vertex2];
        }
      }
    }
    if (this.adjList[vertex2]) {
      for (const vertex in this.adjList[vertex2]) {
        if (vertex === vertex1) {
          delete this.adjList[vertex2][vertex1];
        }
      }
    }
  }

  public removeVertex(vertex: string): void {
    if (this.adjList[vertex]) {
      for (const v in this.adjList[vertex]) {
        this.removeEdge(vertex, v);
      }
      delete this.adjList[vertex];
    }
  }

  public shortestPath(startVert: string, endVert: string): any {
    // distances from startVert to all others
    const distances = {};
    // todo what store ???
    const queue = new PriorityQueue();
    // previous vertex for each vertex to get to the end
    const previous = {};
    for (const vertex in this.adjList) {
      // init, as we did not go any vertex yet
      previous[vertex] = null;

      if (vertex === startVert) {
        // distance to same vertex is 0
        distances[vertex] = 0;
        // to begin with startV
        queue.enqueue(vertex, 0);
        continue;
      }
      // set the max possible distance to every vertex
      distances[vertex] = Infinity;
      queue.enqueue(vertex, Infinity);
    }
    return [];
  }
}

// const graph = new Graph();
// graph.addVertex('Tokyo');
// graph.addVertex('NewYork');
// graph.addVertex('Paris');
// graph.addVertex('Tokyo');
// graph.addVertex('Miami');
//
// graph.addEdge('Tokyo', 'Paris', 0);
// graph.addEdge('NewYork', 'Miami', 0);
//
// graph.removeEdge('NewYork', 'Miami');
//
// graph.addEdge('NewYork', 'Miami', 0);
// graph.addEdge('NewYork', 'Paris', 0);
// graph.removeVertex('NewYork');
// console.log(graph);

const VERT = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
};

const graph = new Graph();
graph.addVertex(VERT.A);
graph.addVertex(VERT.B);
graph.addVertex(VERT.C);
graph.addVertex(VERT.D);
graph.addVertex(VERT.E);
graph.addVertex(VERT.F);

graph.addEdge(VERT.A, VERT.B, 4);
graph.addEdge(VERT.A, VERT.C, 2);
graph.addEdge(VERT.B, VERT.E, 3);
graph.addEdge(VERT.C, VERT.D, 2);
graph.addEdge(VERT.C, VERT.F, 4);
graph.addEdge(VERT.D, VERT.F, 1);
graph.addEdge(VERT.D, VERT.E, 3);
graph.addEdge(VERT.E, VERT.F, 1);

console.log('\nShortest path from A to E:');
console.log(graph.shortestPath(VERT.A, VERT.E));
