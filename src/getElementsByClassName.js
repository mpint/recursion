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
			
			_.each(children, function (child) {

				var classArray = child.className.split(' ');
				if ( child.children.length > 0 ) {

					_.contains(classArray, findThisClass) ? results.push( child ) : false ;
					scanDOM( child );
				} else {
					
					_.contains(classArray, findThisClass) ? results.push( child ) : false ;
				}
			});
		
		}
		
		scanDOM( document );
		return results;
	}
	
	return ( new Error('no document!') );
};
