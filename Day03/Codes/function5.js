//Write recursive function to print numbers from 1 to n

function printNumbers(n) {
  if (n < 1) {
    return; // Base case: if n is less than 1, stop the recursion
  }
  
  printNumbers(n - 1); // Recursively call the function with n - 1
  console.log(n); // Print the current number
}
printNumbers(5);
