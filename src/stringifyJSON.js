// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Create base case for primitives (number, string, boolean, null)
  // Create case for arrays 
  // Create case for objects
  
  if (typeof obj === 'number') {
    return String(obj);
  }

  if (obj === null) {
    return String(obj);
  }

  if (typeof obj === 'boolean') {
    return String(obj);
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'function') {
    return undefined;
  }

  if (obj === undefined) {
    return undefined;
  }

  if (Array.isArray(obj)) {
    var results = [];
    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    return '[' + results.join(',') + ']';
  }

  if (typeof obj === 'object') {
    var results = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + results.join(',') + '}';
  }
};
