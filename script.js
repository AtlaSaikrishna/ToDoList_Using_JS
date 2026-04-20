let form = document.getElementById("form");
let display = document.getElementById("display");

const allTasks = [];

// Form submit function
const validateForm = (event) => {
    event.preventDefault(); // Stop page refresh

    let userInput = document.getElementById("userinput");
    let task = userInput.value.trim();

    // Ignore empty input
    if (task === "") return;

    // Add task to array
    allTasks.push(task);

    // Clear input field
    userInput.value = "";

    // Render tasks
    renderTasks();
};

// Function to display tasks
const renderTasks = () => {
    display.innerHTML = "";

    allTasks.forEach((task, index) => {
        display.innerHTML += `
            <li>
                ${task}
                <button onclick="deleteTask(${index})">Delete</button>
            </li>
        `;
    });
};

// Delete function
const deleteTask = (index) => {
    allTasks.splice(index, 1); // remove task
    renderTasks(); // re-render list
};

// Event listener
form.addEventListener("submit", validateForm);



// let form = document.getElementById("form")
// const allTasks = []

// const validateForm = (event) => {
//     event.preventDefault(); // prevent page refresh
//     let display = document.getElementById("display")
//     let userInput = event.target.userinput

//     allTasks.push(userInput.value);
//     display.innerHTML = ""
//     display.innerHTML += 
//         allTasks.map((task) =>
//             `<li>${task} <button>delete</button></li>`);

//     userInput.value = "";
// };

// form.addEventListener('submit', validateForm)













//tasks.push(document.getElementById("userinput").value);
// const input = document.getElementById("userinput").value.trim();

// if (input === "") {
//     alert("Input cannot be empty");
// } else {
//     alert("Form submitted successfully");
// }