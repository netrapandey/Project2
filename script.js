// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();
const formMsg = document.getElementById("formMsg");

if (!name || !email || !message) {
    formMsg.style.color = "red";
    formMsg.textContent = "All fields are required.";
    return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    formMsg.style.color = "red";
    formMsg.textContent = "Please enter a valid email.";
    return;
}

formMsg.style.color = "green";
formMsg.textContent = "Form submitted successfully!";
this.reset();
});

// To-Do List Functionality
function addTask() {
const taskInput = document.getElementById("taskInput");
const taskText = taskInput.value.trim();
if (taskText === "") return;

const li = document.createElement("li");
li.textContent = taskText;

const span = document.createElement("span");
span.textContent = "❌";
span.onclick = function () {
this.parentElement.remove();
};

li.appendChild(span);
document.getElementById("taskList").appendChild(li);

taskInput.value = "";
}
