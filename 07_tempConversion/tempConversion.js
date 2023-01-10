const convertToCelsius = function(fahrenTemp) {
  let celsiusTemp = (fahrenTemp-32)*5/9;
  return parseFloat(celsiusTemp.toFixed(1));
  
};

const convertToFahrenheit = function(celsiusTemp) {

  let fahrenTemp = 9/5*celsiusTemp+32;
  return parseFloat(fahrenTemp.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
