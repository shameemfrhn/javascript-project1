function reverseString(inputString) {
    
    const charArray = inputString.split('');
  
    
    const reversedArray = charArray.reverse();
  

    const reversedString = reversedArray.join('');
  
    return reversedString;
  }
  
  
  const originalString = "Hello, world!";
  const reversed = reverseString(originalString);
  console.log(`Original string: ${originalString}`);
  console.log(`Reversed string: ${reversed}`);
  