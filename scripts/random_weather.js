let allInfo = {};
let time = 5000;
let current = {};
let time2 = 1000;
let city = "";
let desc = "";
let temp = "";


let Api1 = "http://api.openweathermap.org/data/2.5/weather?q="
let Api3 = "&appid=08ba5dd31d0f7c44acd5ee3c8d364099"


function onLoad() {
    loadWeather()
        .then(data => displayWeather(data));
 
}


function loadWeather() {

    let x
    let Api2
    x = Math.floor(Math.random() * 3) + 1;
    if (x == 1){
        Api2 = "London"
    }
    else if (x == 2){
        Api2 = "Wroclaw"
    
    }
    else {
        Api2 = "Berlin"
    }

    let Api = Api1.concat(Api2,Api3)
    return fetch(Api)
        .then(response => response.json())
        //.then(response => console.log(response))
        .catch(error => console.log(error));
}

function displayWeather(info) {
    allInfo = info
    document.getElementById("city").innerHTML = info.name;
    document.getElementById("temp").innerHTML = info.main.temp;
    document.getElementById("desc").innerHTML = info.weather[0].description;
    setInterval(lalala,time)
}

function lalala(){

    loadWeather()
        .then(data2 => changeCity(data2));

}


function changeCity(info2){
    current = info2
    city = current.name;
    temp = current.main.temp;
    desc = current.weather[0].description;
    updateDiv();
}

function fadeout(){

    document.getElementById("fade").style.opacity = 0;
}

function updateDiv(){
    fadeout();
    setTimeout(updateHTML,time2)

}

function updateHTML(){

    document.getElementById("city").innerHTML = city;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("desc").innerHTML = desc;
    document.getElementById("fade").style.opacity = '1';
}