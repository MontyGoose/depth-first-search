package com.bnymellon.amt.testbest;

import groovy.util.GroovyTestCase

import com.bnymellon.amt.testbest.graph.*


public class SearchGroovyTest extends GroovyTestCase {

	
	void testSimple() {
		Graph graph = new Graph();
		graph.addEdge("A", "B");
		graph.addEdge("B", "C");
		
		
		def s = new Search(graph);
		def paths =  s.search("A","C");
		
		assert 1 == paths.size
		assert ["A","B","C"] == paths.getAt(0)

		
	}

	
	void testPentagram() {
		Graph graph = new Graph();
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
        
        
        def s = new Search(graph);
        def paths =  s.search("A","E");
		
		print paths
		
		assert 16 == paths.size()
		
		paths =  s.search("A","B");
		assert 16 == paths.size()

				
		
	} 

}
