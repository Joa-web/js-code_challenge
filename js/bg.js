const img = ['00.jpeg', '01.jpeg', '02.jpeg', '03.jpg', '04.jpeg', '05.jpg', '06.jpeg',
    '07.jpg', '08.jpg', '09.jpg', '10.jpeg', '11.jpg', '12.jpeg', '13.webp', '14.jpg',
    '15.jpg'
]
const randomImg = img[parseInt(Math.random() * img.length)]
document.body.style.background = `url(img/${randomImg}) no-repeat`
document.body.style.backgroundSize = 'cover'
console.log(window.screen)
