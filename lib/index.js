/**
@license dfs | (c) Andy Parry. | https://github.com/MontyGoose/depth-first-search/blob/master/LICENSE
*/

'use strict';
var _ = require('lodash');

exports = module.exports = DFS;

/** 
 * @constructor
 * @public
 */
function DFS() {
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
    df_search(); // start search
    return paths;
    
    function df_search() {
        var nodes = that.graph[_.last(visited)] || [];
        _.forEach(nodes, function(node) {
            if(!_.includes(visited,node)) {
                visited.push(node);
                if (node != end) {
                    df_search();
                } else {
                    paths.push(visited.join(","));  // return paths as CSV
                }
                visited.pop();
            }
        });
    
    }
    
}



/*
			if (!visited.contains(node)) {
				visited << node;    
				if (!node.equals(end)) {
					depthFirstSearch()
				} else {
					paths << new ArrayList(visited)  
				}
				visited.pop()
			}



*/