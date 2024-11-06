Link:https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
Description: Number of People in the Bus

var number = function(busStops) {
  let acumulador = 0; 

 
  for (let i = 0; i < busStops.length; i++) {
    acumulador += busStops[i][0]; 
    acumulador -= busStops[i][1];
  }

  return acumulador; 
};