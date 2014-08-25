// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	// your code here
	var findThisClass = className;
	
	if (document.documentElement) {
		var results = [];
		
		function scanDOM (node) {
		
			var children = node.children;
			
			console.log('node:',node,'children:',children);
			
			_.each(children, function (child) {
				console.log('child',child,'numchildren', child.children);
				if ( child.children.length > 0 ) {
					var classArray = new Array(child.className);
					console.log('working');
					_.contains(child.className, findThisClass) ? results.push( child ) : false ;
					scanDOM( child );
				} else {
					var classArray = new Array(child.className);				
					console.log(classArray);
					_.contains(child.className, findThisClass) ? results.push( child ) : false ;
				}
			});
		console.log('RESULTS:', results);
		return results;
		
		}
		
		scanDOM( document );
	}
	
	return ( new Error('no document!') );
};
