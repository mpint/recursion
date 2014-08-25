var stringifyJSON = function(obj) {
console.log('CURRENT IN',obj);
	if (_.isString(obj)) { return '"' + obj + '"';}
	if ( obj && obj.constructor === Array) {
		var len = obj.length,elemArray = [];
		if (len === 0) { return '[]';}
		
		for (var i = 0; i < len; i++) {
			if ( _.isFunction(obj[i]) || _.isUndefined(obj[i]) ) { 			
				console.log('working arr');
				return obj[i];
			}
			
			elemArray.push( stringifyJSON( obj[i] ));
			console.log('elemArray',elemArray);
		}
		console.log('finalArray',elemArray);
		return ('[' + elemArray + ']');
	}
	if (obj && obj.constructor === Object) {
		
		if (_.isEmpty(obj)) { return '{}';}
		
		var keyArray = Object.keys(obj), keyLen = keyArray.length, totalArray = [];
		
		
		for (var i = 0; i < keyLen; i++) {
					
			if ( _.isFunction( obj[keyArray[i]] ) || _.isUndefined( obj[keyArray[i]] ) ) {
				console.log('working obj');
				return '{}';
			}
			
			totalArray.push( stringifyJSON( keyArray[i] ) + ':' + stringifyJSON( obj[keyArray[i]]) );
		}
		return ( '{' + totalArray.join() + '}' );
	}
	
	return String(obj);
};