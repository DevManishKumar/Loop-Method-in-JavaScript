
const forOfLoop = () => {

  // For-of loop - 
  // A loop that can be used for arrays to iterate over
  // them without specifying the last limit. This loop
  // ends when reach the last index of the array.

  const numbers = [11, 22, 33, 44, 55];

  for (const num of numbers) {
    console.log(num);
  }

  // Result : 11 22 33 44 55
}

export default forOfLoop;