var searchButton = document.getElementById("searchBtn")

var city = document.querySelector("#citySearch")

var apiKey = "6afe51d5612df9b7d231871fe756c85b"

// key = 6afe51d5612df9b7d231871fe756c85b
// &units=imperial
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}



var temp = document.querySelector(".todayTemp");
var wind = document.querySelector(".todayWind");
var humidity = document.querySelector(".todayHumidity");


var weatherImg = document.getElementById("weatherImg");


// function getWeather() {
    
//     fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&appid=" + apiKey + "&units=imperial")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data)
//         temp.textContent = data.list[0].main.temp + " F"
//         wind.textContent = data.list[0].wind.speed + " MPH"
//         humidity.textContent = data.list[0].main.humidity + "%"
        
//         var icon = data.list[0].weather[0].icon
//         weatherImg.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
//     })

//     console.log(city.value);


//     console.log("clicked");
// }

// searchButton.addEventListener("click", getWeather);







var newTestContainer = document.getElementById("newTest");


function getWeather() {
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&appid=" + apiKey + "&units=imperial")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)


        for (var i = 0;  i < data.list.length; i+=7) {

            var newTemp = document.createElement("p");
            var newWind = document.createElement("p");
            var newHumid = document.createElement("p");
            var newImg = document.createElement("img");


            newTemp.textContent = "Temp: " + data.list[i].main.temp + " F"
            newWind.textContent = "Wind: " + data.list[i].wind.speed + " MPH"
            newHumid.textContent = "Humidity: " + data.list[i].main.humidity + "%"
            newImg.src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png"

                     

            newTestContainer.append(newTemp);
            newTestContainer.append(newWind);
            newTestContainer.append(newHumid);
            newTestContainer.append(newImg);

        }


        
       
    })

    console.log(city.value);


    console.log("clicked");
}

searchButton.addEventListener("click", getWeather);



















// function getWeather() {
//     fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city.value + "&appid=" + apiKey + "&units=imperial" + "&cnt=5")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data)
//     })
// }
// searchButton.addEventListener("click", getWeather);





// function getWeather() {
//     fetch("https://api.openweathermap.org/data/2.5/onecall?q=" + city.value + "&appid=" + apiKey + "&units=imperial" + "&exclude=daily")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data)
//     })
// }
// searchButton.addEventListener("click", getWeather);





// function getWeather() {
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + apiKey + "&units=imperial")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data)
//     })
// }
// searchButton.addEventListener("click", getWeather);




