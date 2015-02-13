/**
@license dfs | (c) Andy Parry. | https://github.com/MontyGoose/depth-first-search/blob/master/LICENSE
*/

'use strict';
var DEBUG = true;
var _ = require('lodash');

exports = module.exports = DFS;

/** 
 * @constructor
 * @public
 */
function DFS() {
    console.log("here we are big boy!");
    this.graph = {};    
};


/** 
 * Adds an edge to the the graph
 * @param(from, to) - from and to nodes that define the edge
 */
DFS.prototype.addEdge = function(from,to)  {
    var that = this;
    var adjacent = this.graph[from] || [];
    adjacent.push(to);
    this.graph[from] = adjacent;
    if (DEBUG) console.log("graph2 after",this.graph);
}


function adjacentNode(node) {
    return this.graph[node] || [];
}



DFS.prototype.search = function(start, end) {
    var start = start,
        end = end,
        paths = [],
        visited = [],
        that = this;
    
    visited.push(start);
    
    df_search()
    
    return paths;

    
    function df_search() {
        console.log("Visited",visited);
        var nodes = that.graph[_.last(visited)] || [];
        console.log("Nodes",nodes);
        _.forEach(nodes, function(node) {
            if(!_.includes(visited,node)) {
                visited.push(node);
                if (!node === end) {
                    dfs_search();
                }
            } else {
                paths.push(visited);
            }
            visited.pop();
        });
    
    }
    
}

