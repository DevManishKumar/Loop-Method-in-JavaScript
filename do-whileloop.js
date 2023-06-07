const doWhileLoop = () => {

  // Do-While Loop - 
  // The syntax looks similar to while loop but 
  // the only difference is the code is executed
  // one time beofore checking the conditon.

  const numbers = [11, 22, 33, 44, 55];
  let i = 0;
  do {
    console.log(numbers[i]);
    i++;
  } while (i < numbers.length);

  // Result : 11 22 33 44 55
};

export default doWhileLoop;
