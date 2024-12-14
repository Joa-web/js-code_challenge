const userForm = document.getElementById('userForm');
const welcomeText = document.querySelector('#userForm label');
const input = document.getElementById('userText');
function getUserName(e) {
    
    e.preventDefault();
    const userName = input.value;
    input.classList.add('disappear')
    localStorage.setItem('username', userName);
    welcomeUser(userName, welcomeText);
}
function welcomeUser(name, text) {
    const userTime = new Date();
    const userHours = String(userTime.getHours()).padStart(2, '0');
    if(userHours < 12 && userHours >= 6) {
        text.innerText = `Good moring, ${name}`;
    } else if(userHours >= 12 && userHours < 18) {
        text.innerText = `Good afternoon, ${name}`;
    } else if (userHours >= 18 && userHours < 23) {
        text.innerText = `Good evening, ${name}`;
    } else if (userHours >= 23 && userHours <6) {
        text.innerText `Good night, ${name}`;
    }
    const quotesBox = document.getElementById('quotesBox')
    quotesBox.style.width = '450px'
}
const savedUserName = localStorage.getItem('username')
if(!(savedUserName)) {
    userForm.addEventListener('submit', getUserName);
} else {
    welcomeUser(savedUserName, welcomeText)
    input.classList.add('disappear')
}