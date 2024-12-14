const todoForm = document.getElementById('todoForm');
const todoTitle = todoForm.querySelector('label');
const todoText = todoForm.querySelector('input');
todoText.maxLength = '5';
const ul = document.getElementById('todoList');
let todos = [];

function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(todos))
}
function delLi(e) {
    const delTodo = e.target.parentElement.parentElement;
    delTodo.remove();
    todos = todos.filter((toDO) => toDO.id !== parseInt(delTodo.id));
    saveTodo()
}
function saveLi(addTodo) {
    const li = document.createElement('li');
    li.id = addTodo.id
    const check = document.createElement('input');
    const span = document.createElement('span');
    const button = document.createElement('button');
    check.type = 'checkbox'
    ul.appendChild(li);
    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = addTodo.text;
    button.innerHTML = `<i class="fa-solid fa-trash-can fa-lg"></i>`
    button.addEventListener('click', delLi)
    check.addEventListener('click', () => {span.classList.toggle('check')})
}

function addLi(e) {
    e.preventDefault();
    const todo = todoText.value;
    todoText.value = '';
    const todoObj = {
        text: todo,
        id: Date.now()
    }
    todos.push(todoObj);
    saveLi(todoObj);
    saveTodo();
}





todoForm.addEventListener('submit', addLi);

const saveTodos = localStorage.getItem('todos');
if(saveTodos !== null) {
    const parsedToDos = JSON.parse(saveTodos);
    todos = parsedToDos;
    parsedToDos.forEach(saveLi);
}