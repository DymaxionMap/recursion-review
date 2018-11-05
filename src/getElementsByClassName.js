// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  /*
  input => string of className
  output => array of elements that contain 'className'
  if (element contains className)
    push to the element to array
  base case - if (element doesn't have children)
                return
  recursive case - if (element has children) 
                   for (each child) 
                    getElementsByClassName(child)
  
  */
  var elementsWithClass = [];
  var checkElements = function(child) {
    if (child.classList && child.classList.contains(className)) {
      elementsWithClass.push(child);
    }
    
    if (child.childNodes.length === 0) {
      return;
    }
    
    child.childNodes.forEach(function(element) {
      checkElements(element);
    });
  };
  checkElements(document.body);
  return elementsWithClass;
};
