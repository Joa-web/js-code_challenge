function clock() {
    const h1 = document.getElementById('clock');
    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();
    h1.innerText = `${hours}:${min}`;
}

clock()
setInterval(clock, 1000);