const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
search.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            // console.log(event.target.value);
            getWeatherData(event.target.value);
        }
    }
)
// async function()

const getWeatherData = async (city) => {
    weather.innerHTML = `<h1 class="loader">Loading...</h1>`
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`;

    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    console.log("sunset", new Date(data.sys.sunset * 1000).toLocaleTimeString());
    console.log("sunrise", new Date(data.sys.sunrise * 1000).toLocaleTimeString());

    if (data.cod == "404") {
        weather.innerHTML = `<h1>City Not Found</h1>`
    } else {
        weather.innerHTML = `
        <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
    }


    // console.log(data);
    // console.log(data.main.temp);
    // console.log(data.weather[0].main);
    // console.log(data.weather[0].icon);


}