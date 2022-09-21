// 1 Greater Than 

function isGreaterThan(value, target) {
 return value > target
}

// 2 Greater Than or Equal
function isGreaterThanOrequal(value, target) {
  return value >= target
}

// 3 Value is in range
function isInrange(value,min,max) {
  return value >= min && value <= max
}

// 4 
function exponentiation(num1,num2){
  return num1**num2
}


module.exports = {
  isGreaterThan,
  isGreaterThanOrequal,
  isInrange,
  exponentiation
}