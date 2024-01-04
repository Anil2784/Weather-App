const apikey = "b87ad822b16fc1995b2c7f51a7633c42";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input")
const searchBtn =document.querySelector(".search button")


async function checkWether(city){
    const resoponse = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await resoponse.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", () =>{
    checkWether(searchBox.value);
})
