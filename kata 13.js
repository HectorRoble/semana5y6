
Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
Description: Conteo de vocales

function getCount(str) {

    const vowels = 'aeiou';

    return str.split('').filter(char => vowels.includes(char)).length;
}
