const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('removeBtn');
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();
});

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});
