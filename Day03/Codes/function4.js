//Write a boolean function to find a given number is prime

function isPrime(num) {
  if (num <= 1) {
    return false; // 0 and 1 are not prime numbers
  }

  // Check for factors from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If num is divisible by any number, it's not prime
    }
  }

  return true; // If no factors are found, it's prime
}
console.log(isPrime(7)); 
console.log(isPrime(10)); 
console.log(isPrime(1)); 
