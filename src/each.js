SparkFn.each = function(callback) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e = 0; e < ((this.elements.length) ? this.elements.length : 1); e++) {
		// Grab the current element
		element = this.elements[e];
		
		// Run the specified function and pass the element to it
		callback(element);
	}
	
	// Return the Spark object
	return this;
};