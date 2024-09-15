

function withouts(data, ...valuesToRemove) {
   return data.filter(item => !valuesToRemove.includes(item));
  }
  
  const data = [1, 2, 3, 4, 5];
  const result = withouts(numbers, 2, 4, 6);
  
  console.log(result);
  