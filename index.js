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
