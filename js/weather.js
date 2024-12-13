const API_KEY = '2cd1d21be26c55ca742e40606515d1ea'

function onGeoOk (position) {
    let lat =position.coords.latitude;
    let lon =position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weatherBox span:first-child')
        const temp = document.querySelector('#weatherBox span:nth-child(2)')
        const city = document.querySelector('#weatherBox span:last-child')
        const icon = data.weather[0].icon
        const tempNum = data.main.temp
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
        weather.innerHTML = `<image src='${iconUrl}' width=50px>${data.weather[0].main}`
        temp.innerText = `${tempNum.toFixed(1)} °C`
        city.innerText = data.name
    });
}
function onGeoError() {
    alert("I can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);