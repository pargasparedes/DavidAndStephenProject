const button = document.getElementById('changeBgButton');

let currentImage = 1

button.addEventListener('click', () => {
    currentImage = currentImage === 1 ? 2 : 1; // Toggle between images
    document.body.style.backgroundImage = `url('public/images/${currentImage}.jpg')`;
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('addButton').addEventListener("click", function() {

        let newTask = prompt("Please enter the new task");

        if (newTask == null || newTask === "") {
            return;
        }

        //creating taskTable
        const newDiv = document.createElement("div");
        document.getElementById("mainTable").appendChild(newDiv);
        newDiv.className = "row p-3";
        newDiv.id = "taskTable_" + Date.now();

        //filling table with elements
        const checkDiv = document.createElement("div");
        document.getElementById("taskTable_" + Date.now()).appendChild(checkDiv);
        checkDiv.className = "col-1";
        checkDiv.innerHTML = "<input type='checkbox'>";

        const taskDiv = document.createElement("div");
        document.getElementById("taskTable_" + Date.now()).appendChild(taskDiv);
        taskDiv.className = "col-10";
        taskDiv.textContent = newTask;

        const editDiv = document.createElement("div");
        document.getElementById("taskTable_" + Date.now()).appendChild(editDiv);
        editDiv.className = "col-1";
        editDiv.textContent = "Edit";

    });
});