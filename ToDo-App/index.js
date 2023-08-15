// Selecting elements from DOM
var taskInput = document.getElementById("taskInput");
var addTaskButton = document.getElementById("addTaskButton");
var taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    var taskText = taskInput.value; //Get the value of the input
    var listItem = document.createElement("li"); //Create a new list item
    listItem.textContent = taskText; //Set the text content of the list item

    //Add a delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(listItem); //Remove the task
    };

    listItem.appendChild(deleteButton); //Add the delete button to the list item

    //Mark task as done
    listItem.onclick = function() {
        listItem.classList.toggle("done"); //Toggle completion status
    };

    taskList.appendChild(listItem); //Add the list item to the task list
    taskInput.value = ""; //Clear the input
}

//EventListener for the Add Task button
addTaskButton.onclick = addTask;