function calculateRectangleArea(length, width) {
    
    if (typeof length !== 'number' || typeof width !== 'number') {
      return "Both length and width must be valid numbers.";
    }
  

    const area = length * width;
  
    return area;
  }
  

  const length = 5;
  const width = 10;
  const area = calculateRectangleArea(length, width);
  console.log(`The area of the rectangle is ${area}`);
  