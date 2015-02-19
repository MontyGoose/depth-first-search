'use strict';

var expect = require('chai').expect;
var DFS = require('../lib/index');


        // a -> b -> c -> d
        //  --------->
        //  -------------->
    describe('Simple Graph', function() {     
        var dfs = new DFS();
        dfs.addEdge("a","b");
        dfs.addEdge("b","c");
        dfs.addEdge("c","d");
        dfs.addEdge("a","c");        
        dfs.addEdge("a","d");    

        it('should return paths as an array', function () {
            var paths = dfs.search("a","d");        
            expect(paths).to.be.instanceof(Array);
        });
        
        it('should return correct number of available paths', function () {
            var paths = dfs.search("a","d"); //a->d is possible 3 times        
            expect(paths).to.be.length(3);
        });
        
        it('should return correct available paths', function () {
            var paths = dfs.search("a","d"); //a->d is possible 3 times, a-b-c-d, a-c-d, a-d        
            expect(paths).to.contain("a,b,c,d");
            expect(paths).to.contain("a,c,d");
            expect(paths).to.contain("a,d");
        });

        
        it('should not return incorrect available paths', function () {
            var paths = dfs.search("a","d"); //a->d is possible 3 times, a-b-c-d, a-c-d, a-d        
            expect(paths).to.not.contain("a,b");
            expect(paths).to.not.contain("e,a,f");
            expect(paths).to.not.contain("a,b,d");
        });

    });


    describe('Pentagram Graph', function() {  // 5 nodes all of which connect to each other
        var graph = new DFS();
        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("A", "D");
        graph.addEdge("A", "E");
        graph.addEdge("B", "C");
        graph.addEdge("B", "D");
        graph.addEdge("B", "E");
        graph.addEdge("C", "D");
        graph.addEdge("C", "E");
        graph.addEdge("D", "E");
        graph.addEdge("B", "A");
        graph.addEdge("C", "A");
        graph.addEdge("D", "A");
        graph.addEdge("E", "A");
        graph.addEdge("C", "B");
        graph.addEdge("D", "B");
        graph.addEdge("E", "B");
        graph.addEdge("D", "C");
        graph.addEdge("E", "C");
        graph.addEdge("E", "D");  

    
        it('should return correct number of available paths', function () {
            var paths1 = graph.search("A","D"); //any combination should return 16 paths
            expect(paths1).to.be.length(16);
            var paths2 = graph.search("C","D"); //any combination should return 16 paths
            expect(paths2).to.be.length(16);            
        });
    });


        //  a -> b -> c    d -> e

    describe('No route graph', function() {     
        var dfs = new DFS();
        dfs.addEdge("a","b");
        dfs.addEdge("b","c");
        dfs.addEdge("d","e");
        
        it('should return paths as an array', function () {
            var paths = dfs.search("a","e");        
            expect(paths).to.be.instanceof(Array);
        });
        
        it('should return correct number of available paths', function () {
            var paths = dfs.search("a","e"); //a->e is not possible
            expect(paths).to.be.length(0);
        });
        
    });
    