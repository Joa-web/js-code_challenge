const img = ['00.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg']
const randomImg = img[parseInt(Math.random() * img.length)]
document.body.style.background = `url(img/${randomImg}) no-repeat`
document.body.style.backgroundSize = 'cover'

