const convertToCelsius = function(celsius) {
    const result = (celsius - 32) / 1.8;
    return +result.toFixed(1); 
};

const convertToFahrenheit = function(fahrenheit) {
  const result = (fahrenheit * 1.8) + 32;
  return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
