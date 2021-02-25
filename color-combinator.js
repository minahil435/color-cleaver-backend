/******************
 * YOUR CODE HERE *
 ******************/

function colorCombinator(colorOne, colorTwo) {
  if ((colorOne === 'red' && colorTwo === 'yellow') || ((colorTwo === 'red' && colorOne === 'yellow'))) {
    return 'orange'
  }
  else if ((colorOne === 'red' && colorTwo === 'blue') || ((colorOne === 'blue' && colorTwo === 'red'))) {
    return 'purple'
  }
  else if ((colorOne === 'yellow' && colorTwo === 'blue') || ((colorOne === 'blue' && colorTwo === 'yellow'))) {
    return 'green'
  }
}

// Our setup code here. Don't touch!
if (typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
