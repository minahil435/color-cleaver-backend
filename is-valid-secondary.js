/******************
 * YOUR CODE HERE *
 ******************/


function isValidSecondary(color){
if (color === 'orange' || color === 'purple' || color === 'green'){
    return true
  }
  return false
}

// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
