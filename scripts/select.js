const form = document.getElementById("radio-buttons");
let Api = "";
let question = "question1"
let weather_array = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let answer = form[question].value;

    if (answer === "London") {
        Api = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=08ba5dd31d0f7c44acd5ee3c8d364099"
      } else if (answer === "Wroclaw") {
        Api = "http://api.openweathermap.org/data/2.5/weather?q=Wroclaw&appid=08ba5dd31d0f7c44acd5ee3c8d364099"
      } else if (answer === "Moscow") {
        Api = "http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=08ba5dd31d0f7c44acd5ee3c8d364099"
      } else {
        Api = "http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=08ba5dd31d0f7c44acd5ee3c8d364099"
      } 

      fetch(Api)
        .then(response => response.json())
        .then((data) => {
          weather_array = []
          weather_array.push(data.name);
          weather_array.push(data.main.temp);
          weather_array.push(data.weather[0].description);
          weather_array.push(data.weather[0].icon);
          document.cookie = weather_array;
          //console.log(document.cookie);
          //console.log(Api);
          window.location.href = "results.html";
        })
        .catch(console.error);
});
