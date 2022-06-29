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


function getWeather() {
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&appid=" + apiKey + "&units=imperial")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        temp.textContent = data.list[0].main.temp + " F"
        wind.textContent = data.list[0].wind.speed + " MPH"
        humidity.textContent = data.list[0].main.humidity + " %"
        
        var icon = data.list[0].weather[0].icon
        weatherImg.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
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






// //example 1
// var repoList = document.querySelector('ul');
// var fetchButton = document.getElementById('fetch-button');

// function getApi() {
//   // Replace `octocat` with anyone else's GitHub username
//   var requestUrl = 'https://api.github.com/users/octocat/repos';

//   fetch(requestUrl)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);




// //example2
// var usersContainer = document.getElementById('users');
// var fetchButton = document.getElementById('fetch-button');

// function getApi() {
//   var requestUrl = 'https://api.github.com/users?per_page=5';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       //Using console.log to examine the data
//       console.log(data);
//       for (var i = 0; i < data.length; i++) {
//         //Creating a h3 element and a p element
//         var userName = document.createElement('h3');
//         var userUrl = document.createElement('p');

//         //Setting the text of the h3 element and p element.
//         userName.textContent = data[i].login;
//         userUrl.textContent = data[i].url;

//         //Appending the dynamically generated html to the div associated with the id="users"
//         //Append will attach the element as the bottom most child.
//         usersContainer.append(userName);
//         usersContainer.append(userUrl);
//       }
//     });
// }
// fetchButton.addEventListener('click', getApi);