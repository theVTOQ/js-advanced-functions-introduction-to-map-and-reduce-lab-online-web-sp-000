// Your code here
function mapToNegativize(array){
  const negativizedValues = [];
  array.forEach(num => {
    negativizedValues.push(num * -1);
  });
  return negativizedValues;
}

function mapToNoChange(array){
  return array;
}

function mapToDouble(array){
  const doubledValues = [];
  array.forEach(num => {
    doubledValues.push(num * 2);
  });
  return doubledValues;
}

function mapToSquare(array){
  const squaredValues = [];
  array.forEach(num => {
    squaredValues.push(num ** 2);
  });
  return squaredValues;
}

function reduceToTotal(array, startingPoint){
  array.forEach(num => {
    stratingPoint += num;
  });
  return startingPoint;
}
