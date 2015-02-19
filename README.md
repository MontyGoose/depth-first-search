# depth-first-search
Node module to perform DFS on a Graph and return available paths

## Usage

```Javascript
var DFS = require('dfs');

//create new DFS graph
var dfs = new DFS();

// or optionally pass map of edges
var dfs = new DFS(['A','B']);  //TODO

//add edges to the graph
dfs.addEdge(from,to); 


//return all paths (as CSV) available between two nodes.
dfs.search(from, to);

## Further details
Check out the tests for more examples.
