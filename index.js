function addTodo() {
    const input = document.getElementById('todoInput');
    const newTodo = input.value.trim();

    if (newTodo === '') {
        return;
    }

    const alreadyExists = localStorage.getItem('todos');
    if (alreadyExists && alreadyExists.includes(newTodo)) {
        alert('Todo already exists!');
        return;
    }

    createTodo(newTodo);

    saveTodo(newTodo);

    input.value = ''; // Clear input field
}

function createTodo(content) {
    const newTodo = document.createElement(content);
    newTodo.className = 'todo-item';
    newTodo.textContent = content;
    newTodo.onclick = () => {
        this.parentNode.removeChild(this);
    };

    const todoList = document.getElementById('todoList');
    todoList.appendChild(newTodo);

    return newTodo;
}

function saveTodo(newContent) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(newContent);
    localStorage.setItem('todos', JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', function () {
    var items = JSON.parse(localStorage.getItem('todos')) || [];
    items.forEach((item) => {
        createTodo(item);
    });
});
