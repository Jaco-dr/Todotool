document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    root.innerHTML = `<div class="container">
        <input type="text" id="taskInput" placeholder="Nieuwe taak">
        <button id="addTask">Toevoegen</button>
        <ul id="taskList"></ul>
    </div>`;

    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
        if (taskInput.value.trim() === "") return;
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Verwijderen";
        deleteBtn.addEventListener("click", () => li.remove());
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    });
});