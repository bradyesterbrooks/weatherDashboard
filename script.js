console.log('test');

//let establish a few variables we will need 

var city_list = [];
let city
let Key = 'bfb4dd173c09127c6a080ab08eadf4a2';
  
let searchData = $(".search-data")

//lets establish the functions we will need

function getWeather() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + Key + "&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $(".search-data").html("");
        var Div1 = $("<div class='cityWeather'>");
        Div1.html("<h2>Current Weather</h2><br>")
        searchData.prepend(Div1);

        cityName = response.name;
        var p1 = $("<p>").html("<h4>" + cityName + "</h4>");
        Div1.append(p1);
        var Now = moment().format("LLLL");
        var p2 = $("<p>").html("<i>" + Now + "</i>");
        Div1.append(p2);
        //wind
        var Wind = response.wind.speed;
        var w2 = $("<p>").text("Wind Speed: " + Wind + " mph");
        Div1.append(w2);
        //temp
        var temp = response.main.temp
        var t1 = $("<p>").text("Temperature: " + temp + " F");
        Div1.append(t1)
        //humidity
        var humidity = response.main.humidity
        var h1 = $("<p>").text("Humidity: " + humidity + " %");
        Div1.append(h1);


        //Push search term into array ONLY if the name doesn't already exist
        if (city_list.includes(response.name) === false) {
            city_list.push(response.name)
        }
    })



}



$(document).ready(function () {
    $("#run-search").on("click", function () {
        console.log('click');
        city = $("#search-term").val()
        getWeather();
        
        // display5day()
    })
    //render buttons
    // renderButtons()
})
