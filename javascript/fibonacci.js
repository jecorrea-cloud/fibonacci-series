function fibonacci(num) {
  // type your code here
  let first=0, second=1

  if (num===0) {return 0}

  for (let i=0; i<num-1; i++ )
  {
    let sum=first+second
    first=second
    second=sum
  }
  
  return second

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 3");
  console.log("=>", fibonacci(4));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("")

  console.log("Expecting: 6765");
  console.log("=>", fibonacci(20));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/**
 * If input num=0, return 0
 * 
 * Otherwise set two variables for 0 & 1.
 * Loop through num - 1 times to assign
 * another variable the sum between the 
 * first two. Then assign the first one
 * the current value of the second one
 * and the second one the current value
 * of the sum.
 * 
 * Return the value of the second variable
 */
// And a written explanation of your solution
/**
 * First set two variables 'first' and 'second' to 0 & 1, which will
 * represent the first two values of the Fibonacci sequence.
 * Then, set a conditional to return 0 if the value passed as an argument is zero.
 * Otherwise set a loop that will run num minus 1 times. This is because of the zero-indexing 
 * being used, making ('num' - 1) equal to the length of the sequence's array where 'num' represents it's index.
 * Inside the loop, the variable 'sum' will keep track of the sum between 'first' and 'second' values,
 * then set 'first' to equal 'second' and 'second' to equal 'sum' before the next iteration.
 * Finally, once the loop finishes, return the value held at 'second'
 */
