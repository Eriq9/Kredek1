function onLoad() {


    var icon = document.cookie.split(",")[3];
    var Api1 = "https://openweathermap.org/img/wn/"

    var img = document.createElement("img");
    img.src = Api1.concat(icon,"@2x.png")

    document.getElementById("data1").innerHTML = document.cookie.split(",")[0];
    document.getElementById("data2").innerHTML = document.cookie.split(",")[1] + " [K]";
    document.getElementById("data3").innerHTML = document.cookie.split(",")[2];
    document.getElementById("data4").appendChild(img); 
}

