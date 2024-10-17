// Private function
function somethingPrivate() {
    console.log('TOP SECRET');
}

// Exported constant
export const PI = 3.14;

// Exported function
export function doSomething() {
    console.log('Hello from a module!');
}

// Exported function to add tasks
export function addTask(taskText, todoList, showNotification) {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", () => {
        const completed = taskSpan.classList.toggle("completed");
        showNotification(completed 
            ? "✔️ Task marked as complete!" 
            : "❌ Task marked as incomplete!");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(li); // Remove task
        showNotification("🗑️ Task deleted successfully!");
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

// Exported function to show notifications
export function showNotification(message, notification) {
    notification.textContent = message;
    notification.style.display = "block";

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
}

// Exported class for managing tasks
export class MyClass {
    test() {
        console.log("Testing MyClass");
    }
}
