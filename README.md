# depth-first-search
Node module to perform DFS on a Graph and return available paths

## Usage

```Javascript
var DFS = require('dfs');

var dfs = new DFS();

// or optionally pass map of edges
var dfs = new DFS(['A','B']);


//Add element to chain  (if "word")
markov.addToChain("audrey");
markov.addToChain("markov");
// or "sentence"
markov.addToChain("The cat sat on the mat.");

// or add array of element ("word")
markov.addArrayToChain(["hello","audrey","markov"]);