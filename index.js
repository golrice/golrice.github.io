function addTodo() {
    var input = document.getElementById('todoInput');
    var newTodo = input.value.trim();
    if (newTodo !== '') {
        var todoList = document.getElementById('todoList');
        var li = document.createElement('li');
        li.className = 'todo-item';
        li.textContent = newTodo;
        li.onclick = function () {
            this.parentNode.removeChild(this);
        };
        todoList.appendChild(li);
        input.value = ''; // Clear input field
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var items = JSON.parse(localStorage.getItem('todos')) || [];
    items.forEach(function (item) {
        addTodo(item);
    });
});
