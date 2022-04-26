class Graph {
  // adjacency list
  private readonly adjList: any;

  constructor() {
    this.adjList = {};
  }

  public addVertex(vertexName: string): Graph {
    if (!this.adjList[vertexName]) {
      this.adjList[vertexName] = [];
    }
    return this;
  }

  public addEdge(vertex1: string, vertex2: string): Graph {
    if (this.adjList[vertex1] && this.adjList[vertex2]) {
      // if graph directed leave only first
      this.adjList[vertex1].push(vertex2);
      // as graph undirected, add also reverse edge
      this.adjList[vertex2].push(vertex1);
    }
    return this;
  }

  public removeEdge(vertex1: string, vertex2: string): Graph {
    if (Array.isArray(this.adjList[vertex1])) {
      this.adjList[vertex1] = this.adjList[vertex1].filter(v => v !== vertex2);
    }
    if (Array.isArray(this.adjList[vertex2])) {
      this.adjList[vertex2] = this.adjList[vertex2].filter(v => v !== vertex1);
    }
    return this;
  }

  public removeVertex(vertex: string): Graph {
    if (Array.isArray(this.adjList[vertex])) {
      this.adjList[vertex].forEach(v => this.removeEdge(vertex, v));
      delete this.adjList[vertex];
    }
    return this;
  }
}

const graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('NewYork');
graph.addVertex('Paris');
graph.addVertex('Tokyo');
graph.addVertex('Miami');

graph.addEdge('Tokyo', 'Paris');
graph.addEdge('NewYork', 'Miami');

graph.removeEdge('NewYork', 'Miami');

graph.addEdge('NewYork', 'Miami');
graph.addEdge('NewYork', 'Paris');
graph.removeVertex('NewYork');
console.log(graph);
