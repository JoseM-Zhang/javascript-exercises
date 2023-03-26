const convertToCelsius = function(tempFaren) {
  return Math.round(((tempFaren-32) / 1.8)*10)/10;
};

const convertToFahrenheit = function(tempCelsius) {
  return Math.round((tempCelsius*1.8 + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
