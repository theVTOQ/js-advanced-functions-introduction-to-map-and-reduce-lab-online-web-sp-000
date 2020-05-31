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
