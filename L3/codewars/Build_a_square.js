// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// Первое решение
function generateShape(integer) {
  let shape = '';
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      shape += '+'
    }
    
    if (i !== integer - 1) shape += '\n' 
  }
  return shape
}

// Второе решение
function generateShape(integer){
  let shape = '';
  for (var i = 0; i < integer; i++) {
    shape += '+'.repeat(integer);

    if(i < integer - 1) shape += '\n';
  }
  return shape
}