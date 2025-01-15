const API_URL = 'http://localhost:5000/api/todos';

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const todoList = document.getElementById('todo-list');
    data.forEach(todo => {
      const div = document.createElement('div');
      div.textContent = `${todo.title} - ${todo.completed ? 'Completed' : 'Pending'}`;
      todoList.appendChild(div);
    });
  });
