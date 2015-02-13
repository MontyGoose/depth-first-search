'use strict';

var expect = require('chai').expect;
var DFS = require('../lib/index');


describe('Create DFS Graph', function() {
    var dfs = new DFS();
    dfs.addEdge("a","b");
    dfs.addEdge("b","c");
    dfs.addEdge("c","d");
    dfs.addEdge("a","c");        
    dfs.addEdge("a","d");    
    
    
    dfs.search("a","b");
    expect(dfs).to.be.an('object');
});



    