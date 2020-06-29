class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(ui){
    this.location.textContent = `${ui.name}, ${ui.sys.country}`;
    this.desc.textContent = ui.weather[0].description;
    this.string.textContent = `${ui.main.temp}°`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${ui.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity: ${ui.main.humidity}%`
    this.feelsLike.textContent = `Feels like: ${ui.main.feels_like}°`
    this.dewpoint.textContent = `Pressure: ${ui.main.pressure} hPa`
    this.wind.textContent = `Wind Speed: ${ui.wind.speed} meter/sec`
  }
}