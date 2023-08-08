function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;
  
    if (unit === 'celsius') {
      result = {
        celsius: temperature,
        fahrenheit: (temperature * 9 / 5) + 32,
        kelvin: temperature + 273.15
      };
    } else if (unit === 'fahrenheit') {
      result = {
        celsius: (temperature - 32) * 5 / 9,
        fahrenheit: temperature,
        kelvin: (temperature - 32) * 5 / 9 + 273.15
      };
    } else if (unit === 'kelvin') {
      result = {
        celsius: temperature - 273.15,
        fahrenheit: (temperature - 273.15) * 9 / 5 + 32,
        kelvin: temperature
      };
    }
  
    document.getElementById('result').innerHTML = `
      Celsius: ${result.celsius.toFixed(2)}°C<br>
      Fahrenheit: ${result.fahrenheit.toFixed(2)}°F<br>
      Kelvin: ${result.kelvin.toFixed(2)}K
    `;
  }