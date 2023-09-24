function getRandomNumber(min, max) {

    if (min >= max) {
      return "Invalid input: Minimum value must be less than the maximum value.";
    }
  

    const randomNumber = Math.random() * (max - min) + min;
  
    return randomNumber;
  }
  
  
  const min = 1;
  const max = 10;
  const randomNum = getRandomNumber(min, max);
  console.log(`Random number between ${min} and ${max}: ${randomNum}`);
  