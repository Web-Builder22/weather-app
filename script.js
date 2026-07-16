console.log("JS Loaded");

let searchBtn = document.getElementById("searchBtn");
let display = document.getElementById("cityInput");



searchBtn.addEventListener("click", async () => {
    if(display.value==""){
        alert("please enter the name first");
        return;
    }
    try{
          const city = display.value;

    const apiKey = "871f5162ebfb9a44f78881863d484c56";

     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);


    const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const pressure = document.getElementById("pressure");
const weatherIcon = document.getElementById("weatherIcon");

cityName.innerText=data.name;
temperature.innerText=data.main.temp +" C";
humidity.innerText=data.main.humidity+ "%";
feelsLike.innerText=data.main.feels_like+ " C";
pressure.innerText=data.main.pressure +"PA";
wind.innerText=data.wind.speed + " km/h";

    }
 catch (error) {

        alert("Something went wrong!");

        console.log(error);

    }

});

