// Selecting the input element with the class 'search' inside which there is an input element.
const searchInput = document.querySelector('.search input');

// Selecting the button element with the class 'search'.
const searchBtn = document.querySelector('.search button');

// Selecting the element with the class 'icon', which is assumed to be an image element.
const image = document.querySelector('.icon');

// Defining an asynchronous function named 'getWeather' that takes a 'city' parameter.
async function getWeather(city) {
    // Using the Fetch API to make a request to the OpenWeatherMap API based on the provided city.
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29ef907e99db8857182c57271af15292&units=metric`);

    // Checking if the response status is 404 (Not Found).
    if (res.status == 404) {
        // Displaying an error message if the city is not found.
        document.querySelector('.error').style.display = 'block';
    } else {
        // Hiding the error message if the city is found.
        document.querySelector('.error').style.display = 'none';
    }

    // Parsing the response data as JSON.
    var data = await res.json();
    
    // Logging the data to the console for debugging purposes.
    console.log(data);

    // Updating the HTML content to display temperature in Fahrenheit.
    document.querySelector('.celcius').innerHTML = Math.round(Math.round(data.main.temp) * (9 / 5) + 32) + "°F";

    // Updating the HTML content to display the city name.
    document.querySelector('.city').innerHTML = data.name;

    // Updating the HTML content to display humidity percentage.
    document.querySelector('.humitidyP').innerHTML = Math.round(data.main.humidity) + "%";

    // Updating the HTML content to display wind speed in km/h.
    document.querySelector('.windS').innerHTML = Math.round(data.wind.speed) + "km/h";

    // Setting the image source based on the weather condition.
    if (data.weather[0].main == 'Clouds') {
        image.src = './cloud.jpeg';
    } else if (data.weather[0].main == 'Clear') {
        image.src = './clear.jpeg';
    } else if (data.weather[0].main == 'Rain') {
        image.src = './rain.png';
    } else if (data.weather[0].main == 'Drizzle') {
        image.src = './drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
        image.src = './mist.png';
    }
}

// Adding a click event listener to the search button, triggering the getWeather function with the input value.
searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
});
