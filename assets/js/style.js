var searchButton = document.getElementById("searchBtn")
var city = document.querySelector("#citySearch")

var apiKey = "6afe51d5612df9b7d231871fe756c85b"

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



var dateBox = document.querySelector(".dateBox");
var weatherBox = document.querySelector(".weatherBox");



function getWeather() {
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&appid=" + apiKey + "&units=imperial")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        
        // Date for loop
        for (var i = 0;  i < 6; i++) {
            var newDate2 = document.createElement("p");

            newDate2.textContent = moment().add(i, "days").format("MM-D-YYYY");
            newDate2.classList.add("col-2");

            dateBox.append(newDate2);
        }

        // Weather for loop
        for (var i = 0;  i < data.list.length; i+=7) {
            // Create a new element
            // var newDate = document.createElement("p");
            var newImg = document.createElement("img");
            var newTemp = document.createElement("p");
            var newWind = document.createElement("p");
            var newHumid = document.createElement("p");

            var newContainer = document.createElement("div");

            // Change texts and images
            // newDate.textContent = data.list[i].dt_txt


            newContainer.classList.add("col-2");

            newImg.src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";
            newTemp.textContent = "Temp: " + data.list[i].main.temp + " F";
            newWind.textContent = "Wind: " + data.list[i].wind.speed + " MPH";
            newHumid.textContent = "Humidity: " + data.list[i].main.humidity + "%";
            

            // Print texts and images
            // weatherBox.append(newDate);
            weatherBox.append(newContainer);
            newContainer.append(newImg);
            newContainer.append(newTemp);
            newContainer.append(newWind);
            newContainer.append(newHumid);
        }
       
    })

    console.log(city.value);

    console.log("clicked");
    
    weatherBox.textContent = "";
    dateBox.textContent = "";



    var newBtnContainer = document.getElementById("storageBtn")

    var newBtn = document.createElement("button")

    localStorage.setItem("cityName" , city.value);
    newBtn.textContent = localStorage.getItem("cityName");
    newBtnContainer.append(newBtn)

}

searchButton.addEventListener("click", getWeather);









// not working APIs


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


// newDate1 = data.list[i].dt_txt.split(" ")[0]
// newDate.textContent = newDate1

