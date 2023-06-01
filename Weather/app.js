const mainThing1 = document.getElementById("main-thing1")
const mainThing2 = document.getElementById("main-thing2")
const mainThing3 = document.getElementById("main-thing3")

const pointOne = document.querySelector('.point-one')
const pointTwo = document.querySelector('.point-two')
const pointThree = document.querySelector('.point-three')

function findWeather(){
    
    const city = document.getElementById("input-box").value
    
    console.log(city)

    const url = 'https://api.api-ninjas.com/v1/weather?city=' + city

    fetch(url, {
        method: "GET",
        headers: { 'X-Api-Key': 'wHjnquxbQGgvy/+PS/YHzw==ARPHIiGDU4XkXthG'}})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        mainThing1.textContent = data.temp;
        mainThing2.textContent = data.humidity;
        mainThing3.textContent = data.wind_speed;

        pointOne.innerHTML = `
        <p class="point one">Temperature is ${data.temp} °C</p>
        <p class="point two">Max temperature is ${data.max_temp} °C</p>
        <p class="point three">Min temperature is ${data.min_temp} °C</p>`

        pointTwo.innerHTML = `
        <p class="point one">Cloud Precipitation is ${data.cloud_pct}</p>
        <p class="point two">Humidity is ${data.humidity}</p>`

        pointThree.innerHTML = `
        <p class="point one">Wind speed is ${data.wind_speed}</p>
        <p class="point two">Wind Degree is ${data.wind_degrees}</p>
        `
    });

}

