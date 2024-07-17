function addTodo() {
    const input = document.getElementById('todoInput');
    const newTodo = input.value.trim();

    if (newTodo === '') {
        return;
    }

    const alreadyExists = JSON.parse(localStorage.getItem('todos')) || [];
    if (alreadyExists && alreadyExists.includes(newTodo)) {
        alert('Todo already exists!');
        return;
    }

    createTodo(newTodo);

    saveTodo(newTodo);

    input.value = ''; // Clear input field
}

function addTodoOnEnter(event) {
    if (event.keyCode !== 13) {
        return;
    }

    addTodo();
}

function createTodo(content) {
    console.log("Creating new todo: " + content);

    const newTodo = document.createElement('li');
    newTodo.className = 'todo-item';
    newTodo.textContent = content;
    newTodo.onclick = function () {
        this.remove();
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos = todos.filter((todo) => todo !== this.textContent);
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const todoList = document.getElementById('todoList');
    todoList.appendChild(newTodo);
}

function saveTodo(newContent) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(newContent);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function clearTodos() {
    localStorage.clear();
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
    var items = JSON.parse(localStorage.getItem('todos')) || [];

    console.log(items);

    items.forEach((item) => {
        createTodo(item);
    });
});
