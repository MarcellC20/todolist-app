// Select elements
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

// Add new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const deadline = taskDate.value; // Get the deadline
  if (taskText !== "") {
    addTask(taskText, deadline);
    taskInput.value = ""; // Clear input field
    taskDate.value = ""; // Clear date field
  }
});

// Function to add a task to the list
function addTask(taskText, deadline) {
  const li = document.createElement("li");
  li.className = "flex justify-between items-start p-4 bg-gray-200 rounded-lg";

  // Task and Deadline Container
  const taskContainer = document.createElement("div");

  const task = document.createElement("span");
  task.textContent = taskText;
  task.className = "cursor-pointer block"; // Make task clickable

  // Add deadline if available
  const deadlineText = document.createElement("small");
  if (deadline) {
    const deadlineDate = new Date(deadline).toLocaleString(); // Format the deadline
    deadlineText.textContent = `Deadline: ${deadlineDate}`;
    deadlineText.className = "text-sm text-gray-600 block mt-1";
  }

  // Append task and deadline to container
  taskContainer.appendChild(task);
  taskContainer.appendChild(deadlineText);

  // Toggle completed (strike-through) on task click
  task.addEventListener("click", () => {
    task.classList.toggle("line-through");
    task.classList.toggle("text-gray-500");
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className =
    "bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(taskContainer);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}
