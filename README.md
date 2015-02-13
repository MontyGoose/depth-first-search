# depth-first-search
Node module to perform DFS on a Graph and return available paths

## Usage

```Javascript
var DFS = require('dfs');

//create new DFS graph
var dfs = new DFS();

// or optionally pass map of edges
var dfs = new DFS(['A','B']);

//add edges to the graph
dfs.addEdge(from,to) 


//return paths available betweem two nodes.
dfs.search(from, to)