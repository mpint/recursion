// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
/* var stringifyJSON = function(obj) {

console.log('start:',obj);
  // your code goes here
  try {
	var objLen = Object.keys(obj).length;
	
	if (objLen === 0 && typeof obj === 'object' && obj.constructor === Array) {
		var obj = '[]';
		return (obj);
	
	}
	
	if (objLen && objLen > 0) {
	
		var keys = Object.keys(obj), i;
			console.log('keys:',keys);
		for ( i = 0; i < objLen; i++ ){
			console.log(keys[i]);
			stringifyJSON(keys[i]);
		
		}
	}
	
  }
  catch (e){
	// catches all values not undefined and function
		
		if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'undefined' || obj === null) {
		console.log(typeof obj, obj, 'SUCCESS!');

		return ('' + obj);
		}
		
		if (typeof obj === 'string') {
			console.log(typeof obj, obj, 'SUCCESS!');
			return  '"' + obj + '"';
		}

	}
   finally{}

};
 */
var stringifyJSON = function(obj) {
	console.log(obj);
	if (typeof obj === 'string') { return '"' + obj + '"';}
	if ( obj && obj.constructor === Array) {
		var len = obj.length, elemArray = [];
		if (len === 0) { return '[]';}
		
		for (var i = 0; i < len; i++) {
			elemArray.push( stringifyJSON( obj[i] ));
			console.log('elemArray',elemArray);
		}
		console.log('finalArray',elemArray);
		return ('[' + elemArray + ']');
	}
	return String(obj);
};