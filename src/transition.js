SparkFn.transition = function(method, timeframe, callback) {
	// Check if we have a callback, if not set it to and empty function
	if(callback === undefined)
		callback = new Function();
	
	// Check if the timeframe is set, if not default it to 800ms
	if(timeframe === undefined)
		timeframe = 800;
	
	// Loop through all elements
	for(var e in this.elements) {
		// Work out what method we need to do
		switch(method)
		{
			case 'slidedown':
				// Set overflow to hidden
				Spark(this.elements[e]).css({overflow: 'hidden', display: 'block'});
				
				// Get original height
				var original = (window.getComputedStyle) ?
					window.getComputedStyle(this.elements[e], null).height :
					this.elements[e].currentStyle.height;
				
				// Set height to 0
				Spark(this.elements[e]).css({height: 0});
				
				// Slide height to original
				Spark(this.elements[e]).animate({height: original}, timeframe, callback);
				break;
			
			case 'slideup':
				var selector = this.selector;
				
				var element = this.elements[e];
								
				// Get original height
				var original = (window.getComputedStyle) ?
					window.getComputedStyle(this.elements[e], null).height :
					this.elements[e].currentStyle.height;
				
				// Slide height to 0
				Spark(this.elements[e]).animate({height: 0}, timeframe, function() {
					// Set height to original
					Spark(element).css({height: original, display: 'none'});
					
					// Run the callback
					callback();
				});
				break;
			
			case 'fadein':
				// Display it
				Spark(this.elements[e]).css({display: 'block', opacity: 0});
				
				// Fade opacity to 100
				Spark(this.elements[e]).animate({opacity: 1}, timeframe, callback);
				break;
			
			case 'fadeout':
				var selector = this.selector;
				
				var element = this.elements[e];
				
				// Fade opacity to 0
				Spark(this.elements[e]).animate({opacity: 0}, timeframe, function() {
					// Set opacity to 100
					Spark(element).css({opacity: 1, display: 'none'});
					
					// Run the callback
					callback();
				});
				break;
			
			case 'sneakin':
				// Set overflow to hidden
				Spark(this.elements[e]).css({overflow: 'hidden', display: 'block', opacity: 0});
				
				// Get original height
				var original = (window.getComputedStyle) ?
					window.getComputedStyle(this.elements[e], null).height :
					this.elements[e].currentStyle.height;
				
				// Set height to 0
				Spark(this.elements[e]).css({height: 0});
				
				// Slide height to original
				Spark(this.elements[e]).animate({height: original, opacity: 1}, timeframe, callback);
				break;
			
			case 'sneakout':
				var selector = this.selector;
				
				var element = this.elements[e];
								
				// Get original height
				var original = (window.getComputedStyle) ?
					window.getComputedStyle(this.elements[e], null).height :
					this.elements[e].currentStyle.height;
				
				// Slide height to 0
				Spark(this.elements[e]).animate({height: 0, opacity: 0}, timeframe, function() {
					// Set height to original
					Spark(element).css({height: original, display: 'none'});
					
					// Run the callback
					callback();
				});
				break;
		}
	}
	
	// Return the Spark object
	return this;
};