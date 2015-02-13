class Search {

	private start
	private end
	private paths = []
	private visited = []
	private graph
	
	Search(Graph graph) {this.graph = graph}

	def search(def start,def end) {
		this.start = start;this.end = end;
		this.paths = []
		visited.add(start)
		depthFirstSearch()
		return this.paths
	}
		
	private depthFirstSearch() {
		def nodes = this.graph.adjacentNodes(visited.last());
		nodes.each() { node ->
			if (!visited.contains(node)) {
				visited << node;    
				if (!node.equals(end)) {
					depthFirstSearch()
				} else {
					paths << new ArrayList(visited)  
				}
				visited.pop()
			}
		}
	}
	
}

class Graph {
	
	def map = [:]
	
	def addEdge(node1, node2) {
		def adjacent = (this.map.get(node1) ?: []) as Set
		adjacent.add(node2)
		map.put(node1, adjacent)
	}
	
	def adjacentNodes(node) {
		(this.map.get(node) ?: []) as Set
	}
		
		 
}




/////// impl
class RouteBuilderService {

	Graph graph
	
	RouteBuilderService() {}

	
	def getTransformationInterfaces(routelist) {
		def prev = null
		def interfaces = []
		routelist.each { current ->
			if (prev) //find TransformationInterfaces by using "pairs" of mimetypes from the route
				interfaces.add(InterfaceDefinition.findAllByTypeAndStatusAndDatatype_inAndDatatype_out(InterfaceType.TRANSFORMATION,"active",prev,current))
			prev = current
		}
		interfaces
	}
	
	
	def getAllRoutes() {
		//work our from consumer (out) and SI (in) all possibles
		// call get routes for each one !
		//return big bag of fun!
	}
	
	def getRoutes(from, to) {
		def routes = []
		this.search(from,to).collect {  //convert mimetype route into Transformation Interfaces
			getTransformationInterfaces(it).combinations().each() {
				routes.add(it)
			}
		}
		routes
	}
	
	private buildGraph = {
		def g = new Graph()
		InterfaceDefinition.findAllByStatusAndType("active", InterfaceType.TRANSFORMATION).each() {
			g.addEdge(it.datatype_in, it.datatype_out);
		}
		this.graph = g
	}
	
	// search will return a route of valid & available mimetypes make up the path eg. [1,2,6,15]
	private search(from,to) {
		if (!this.graph) buildGraph()
		def s = new Search(this.graph)
		return s.search(from,to)
	}
	
	
}