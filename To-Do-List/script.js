let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskCount() {
    document.getElementById("taskCount").textContent = "Tasks: " + tasks.length;
}

function createTaskElement(taskText) {
    const list = document.getElementById("taskList");

    const newTask = document.createElement("li");
    newTask.textContent = taskText + " ";

    newTask.onclick = function () {
        if (newTask.style.textDecoration === "line-through") {
            newTask.style.textDecoration = "none";
            newTask.style.color = "black";
        } else {
            newTask.style.textDecoration = "line-through";
            newTask.style.color = "gray";
        }
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    deleteButton.onclick = function (event) {
        event.stopPropagation();

        const index = tasks.indexOf(taskText);

        if (index > -1) {
            tasks.splice(index, 1);
        }

        saveTasks();
        updateTaskCount();

        newTask.remove();
    };

    newTask.appendChild(deleteButton);
    list.appendChild(newTask);
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(task);

    saveTasks();

    createTaskElement(task);

    updateTaskCount();

    taskInput.value = "";
}

tasks.forEach(function(task) {
    createTaskElement(task);
});

updateTaskCount();

document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});