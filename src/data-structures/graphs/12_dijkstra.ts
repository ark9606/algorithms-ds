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
