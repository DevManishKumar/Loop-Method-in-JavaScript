const forInLoop = () => {

  // For-in loop - 
  // Similar to for-of loop but it's used on javaScript objects.
  
  const numbers = {
    1: 11,
    2: 22,
    3: 33,
    4: 44,
    5: 55,
  };

  for (const num in numbers) {
    console.log(numbers[num]);
  }

  // Result : 11 22 33 44 55
};

export default forInLoop;
