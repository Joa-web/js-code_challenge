const API_KEY = '2cd1d21be26c55ca742e40606515d1ea'

function onGeoOk (position) {
    let lat =position.coords.latitude;
    let lon =position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weatherBox span:first-child')
        const temp = document.querySelector('#weatherBox span:nth-child(2)')
        const city = document.querySelector('#weatherBox span:last-child')
        const weatherChange = data.weather[0].main
        const icon = data.weather[0].icon
        const tempNum = data.main.temp
        if (weatherChange == 'Clear') {
            weather.innerHTML=`<i class="fa-solid fa-sun fa-lg"></i>${weatherChange}`
        } else if(weatherChange == 'Cloud') {
            weather.innerHTML=`<i class="fa-solid fa-cloud fa-lg"></i>${weatherChange}`
        } else if(weatherChange =='Thunderstorm') {
            weather.innerHTML=`<i class="fa-solid fa-cloud-bolt fa-lg"></i>${weatherChange}`
        } else if(weatherChange == 'Drizzle') {
            weather.innerHTML=`<i class="fa-solid fa-cloud-rain fa-lg"></i>${weatherChange}`
        } else if(weatherChange == 'Rain' ) {
            weather.innerHTML=`<i class="fa-solid fa-cloud-showers-heavy fa-lg"></i>${weatherChange}`
        } else if (weatherChange == 'Snow') {
            weather.innerHTML=`<i class="fa-solid fa-snowflake fa-lg"></i>${weatherChange}`
        } else if (weatherChange == 'Atmoshere') {
            weather.innerHTML=`<i class="fa-brands fa-soundcloud fa-lg"></i>${weatherChange}`
        }
        temp.innerText = `${tempNum.toFixed(1)} °C`
        city.innerText = data.name
        
    });
}
function onGeoError() {
    alert("I can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);