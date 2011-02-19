SparkFn.css = function(css) {
	// Set up any variables
	var element = null;
	var calSin = null;
	var calCos = null;
	var radians = null;
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
		
			// Check if they provided a css object
			if(css !== undefined) {
				// Loop through all css values assigning them
				for(var c in css) {
					// If the selector contains dashes then convert it to the JavaScript version
					if(c.indexOf('-') !== -1) {
						element.style[c.replace(/-([a-z])/gi, function(s, g1) { return g1.toUpperCase() })] = css[c];
					}
					else {
						element.style[c] = css[c];
					}
				
					// If opacity is being set we need to set all the other values for cross browser opacity
					if(c == 'opacity') {
						element.style.MozOpacity = css[c];
						element.style.KhtmlOpacity = css[c];
						element.style.filter = 'alpha(opacity=' + (css[c] * 100) + ')';
						element.style.zoom = '1';
					}
					
					// If rotation is being set we need to make it cross browser
					if(c == 'rotation') {
						radians = parseInt(css[c]) * (Math.PI * 2 / 360);
						calSin = Math.sin(radians);
						calCos = Math.cos(radians);
						element.style.filter = 'progid:DXImageTransform.Microsoft.Matrix(M11=' + calCos + ', M12=-' + calSin + ',M21=' + calSin + ', M22=' + calCos + ', sizingMethod="auto expand")';
						
						// original layout
						var x = target.offsetLeft;
						var y = target.offsetTop;
						var w = target.offsetWidth;
						var h = target.offsetHeight;
						
						// find bounding box dimensions
						// IE has updated these values based on transform set above
						var wb = target.offsetWidth;
						var hb = target.offsetHeight;
						
						// determine how far origin has shifted
						var sx = (wb - w) / 2;
						var sy = (hb - h) / 2;
						
						// translation, corrected for origin shift
						// rounding helps, but doesn't eliminate, integer jittering
						target.style.left = Math.round(x + e - sx) + 'px';
						target.style.top = Math.round(y + f - sy) + 'px';
						
						element.style.WebkitTransform = 'rotate(' + css[c] + ')';
						element.style.MozTransform = 'rotate(' + css[c] + ')';
						element.style.OTransform = 'rotate(' + css[c] + ')';
						element.style.transform = 'rotate(' + css[c] + ')';
						element.style.zoom = '1';
					}
				}
			}
			else {
				// Return the elements attributes
				return element.style;
			}
		}
	}
	
	// Return the Spark object
	return this;
};