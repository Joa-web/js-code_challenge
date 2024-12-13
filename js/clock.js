function clock() {
    const h1 = document.getElementById('clock');
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, '0');
    const min = String(time.getMinutes()).padStart(2, '0');
    h1.innerText = `${hours}:${min}`;
}

clock()
setInterval(clock, 1000);