const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.parentElement.remove();
    } else if (event.target.classList.contains('complete-btn')) {
        event.target.parentElement.previousElementSibling.classList.togg
le('completed');
    }
});