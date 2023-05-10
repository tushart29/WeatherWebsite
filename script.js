const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const image = document.querySelector('.icon');

async function getWeather(city) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29ef907e99db8857182c57271af15292&units=metric`);
    if (res.status == 404) {
        document.querySelector('.error').style.display = 'block';
    }
    else {
        document.querySelector('.error').style.display = 'none';
    }
    var data = await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML = Math.round(Math.round(data.main.temp) * (9 / 5) + 32) + "°F";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humitidyP').innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector('.windS').innerHTML = Math.round(data.wind.speed) + "km/h";

    if (data.weather[0].main == 'Clouds') {
        image.src = './cloud.jpeg'
    }
    else if (data.weather[0].main == 'Clear') {
        image.src = './clear.jpeg'
    }
    else if (data.weather[0].main == 'Rain') {
        image.src = './rain.png'
    }
    else if (data.weather[0].main == 'Drizzle') {
        image.src = './drizzle.png'
    }
    else if (data.weather[0].main == 'Mist') {
        image.src = './mist.png'
    }
}
searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
})