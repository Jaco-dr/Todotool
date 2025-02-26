document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Script is geladen!"); // Debugging

    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
        if (taskInput.value.trim() === "") return;

        const li = document.createElement("li");
        li.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", () => li.remove());

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    });
});
