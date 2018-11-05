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
};
