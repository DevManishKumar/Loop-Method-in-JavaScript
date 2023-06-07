const mapLoop = () => {

  // Map loop - 
  // An ES6 approach to iterate over an array and store
  // the result in a new variable.
  
  const numbers = [11, 22, 33, 44, 55];
  const nums = numbers.map((num) => {
    return num;
  });

  console.log(nums)

  // Result : 11 22 33 44 55
};

export default mapLoop;
