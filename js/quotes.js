const quotes = [
    {
        quote: '"삶이 있는 한 희망은 있다."',
        author : '키케로로'
    },
    {
        quote: '"직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다."',
        author : '엘버트 허버드'
    }, 
    {
        quote : '"절대 어제를 후회하지마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다."',
        author : 'L.론허바드'
    }, 
    {
        quote : '"어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다."',
        author : '제임스 오펜하임'
    },
    {
        quote : '"피할 수 없으면 즐겨라."',
        author : '로버트 엘리엇'
    },
    {
        quote : '"한 번의 실패와 영원한 실패를 혼동하지 마라."',
        author : 'F.스콧 핏제랄드'
    },
    {
        quote : '"오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다."',
        author : '앙드레 말로'
    },
    {
        quote : '"좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다."',
        author : '단테'
    },
    {
        quote : '"행복은 습관이다, 그것을 몸에 지니라."',
        author : '허버드'
    },
    {
        quote : '"평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라."',
        author : '제임스 딘딘'
    },
    {
        quote : `"네 믿음은 네 생각이 된다. 네 생각은 네 말이 된다. 네 말은 네 행동이 된다. 네 행동은 네 습관이 된다. 네 습관은 네 가치가 된다. 네 가치는 네 운명이 된다."`,
        author : '간디'
    }
]

const randomQuotes = quotes[parseInt(Math.random() * quotes.length)];
const quote = document.querySelector('#quotesBox span:first-child');
const author = document.querySelector('#quotesBox span:last-child');
const quoteBox = document.getElementById('quotesBox');
quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;
quoteBox.addEventListener('mouseover', () => {
    author.classList.remove('disappear');
    author.classList.add('center')
})
quoteBox.addEventListener('mouseleave', () => {
    author.classList.add('disappear');
})