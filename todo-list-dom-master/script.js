import { addTask, showNotification } from './todo.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("new-task");
    const todoList = document.getElementById("todo-list");

    // Create notification div
    const notification = document.createElement("div");
    notification.style.position = "fixed";
    notification.style.top = "20px"; // Position at the top
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)"; // Center horizontally
    notification.style.padding = "10px 20px";
    notification.style.backgroundColor = "#4CAF50"; // Green background for success
    notification.style.color = "white";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    notification.style.display = "none"; // Initially hidden
    document.body.appendChild(notification);

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page refresh

        const taskText = input.value.trim();
        if (taskText) {
            addTask(taskText, todoList, showNotification.bind(null, "", notification));
            input.value = ""; // Clear the input
            showNotification("✔️ Task added successfully!", notification);
        }
    });
});
