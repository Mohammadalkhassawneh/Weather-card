const apiKey = "4d8fb5b93d4af21d66a2948710284366";
const temperature=document.querySelector('.weather-temp');
const btn=document.querySelector('.location-button');
// const City = 'Amman';
const Pressure = document.querySelectorAll ('.value')[0];
const Humidity = document.querySelectorAll ('.value')[1];
const WindSpeed = document.querySelectorAll ('.value')[2];
const downList = document.querySelector ('.location-button');
const Location = document.querySelector ('.location');
const day1 = document.querySelector ('.date-dayname');
const month1 = document.querySelector ('.date-day');


downList.onchange = function(){

    const cityName = downList.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data =>{
      const temp=Math.floor(data.main.temp);
      temperature.innerHTML=temp+'°C';
      console.log (data);
      const pressure1 = (data.main.pressure);
      Pressure.innerHTML = pressure1;
      const Humidity1 = (data.main.humidity);
      Humidity.innerHTML = (Humidity1 +  ' %');
      const windSpeed = (data.wind.speed);
      WindSpeed.innerHTML = (windSpeed + ' Km/h');
      Location.innerHTML = (cityName);
  
    
    });
}
    const d = new Date();

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    let day = weekday[d.getDay()];
    day1.innerHTML = day;

    function join(t, a, s) {
        function format(m) {
           let f = new Intl.DateTimeFormat('en', m);
           return f.format(t);
        }
        return a.map(format).join(s);
     }
     
     let a = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
     let s = join(new Date, a, '-');
     month1.innerHTML = s;


// console.log (data);

// function chooseCity(city) {
// downList.addEventListener ('change', (e)=> {


// })

// }