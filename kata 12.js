
Link: https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript
Description: Sum of integers in string

function sumOfIntegersInString(input) {
 
    const numbers = input.match(/\d+/g);
    
    return numbers ? numbers.reduce((sum, num) => sum + parseInt(num, 10), 0) : 0;
}
