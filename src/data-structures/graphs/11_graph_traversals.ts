import {Graph} from "./10_graph";
import {Stack} from "../03_stack";

export class Graph2 extends Graph {

  depthFirstRecursive(startVertex: string): any {
    const results: any[] = [];
    const visited = {};

    const dfs = (vertex: string) => {
      if (!this.adjList[vertex]) {
        return null;
      }
      results.push(vertex);
      visited[vertex] = true;

      for (const neighbor of this.adjList[vertex]) {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
    }

    dfs(startVertex);
    return results;
  }

  depthFirstIterative(startVertex: string): any {
    const results: any[] = [];
    const discovered = {};
    const stack = new Stack();

    // mark when we first meet node
    discovered[startVertex] = true;
    stack.push(startVertex);

    while (stack.size > 0) {
      const currVertex = stack.pop();
      results.push(currVertex);

      for (const neighbor of this.adjList[currVertex]) {
        if (!discovered[neighbor]) {
          // mark when we first meet, before going deeper into one neighbor
          discovered[neighbor] = true;
          // with FILO order, we go deep into graph
          // and 'go back' (visit other neighbors) when deepest node reached
          stack.push(neighbor);
        }
      }
    }
    return results;
  }
}

const graph = new Graph2();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log('\nDFS (recursive):');
console.log(graph.depthFirstRecursive('A'));
// [ 'A', 'B', 'D', 'E', 'C', 'F' ]

console.log('\nDFS (iterative):');
console.log(graph.depthFirstIterative('A'));
// [ 'A', 'C', 'E', 'F', 'D', 'B' ]
