function sumDigits(number) {
  //Turn the argument into an absolute number
  let absoluteNumber = Math.abs(number);
  //Turn the number into a string
  let stringDigits = String(absoluteNumber);
  //Create a variable to hold the sum
  let sum = 0;
  //Go through the string, turn the digits back into numbers and add them to the tally
  for (let i = 0; i < stringDigits.length; i++) {
    sum += Number(stringDigits[i]);
  }
  //Return the final tally count
  return sum;
}