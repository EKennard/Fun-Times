// add task function


//create a html element - <li>

// get the input field and store as variable

// get text value from input field and store as variable

// add the text value to the html element

// get the unorered list and store as variable

// add the li element to the unrdered list

// clear the inputField value


function addTask() {
    let taskItem = document.createElement("li");
    let inputField = document.querySelector("#taskInput");
    let inputText = inputField.value;
    console.log(inputText);

    taskItem.textContent = inputText;
    taskItem.onclick = function () {
        toggleCompleted(this);
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = function (){
        deleteTask(this);
    }
    taskItem.appendChild(deleteBtn);


    let taskList = document.querySelector("#taskList");
    taskList.appendChild(taskItem);

    inputField.value = "";
}

// add onclick event listener to our list item

// add/remove class completed from the list item

function toggleCompleted(element) {
    element.classList.toggle("completed");
}

function deleteTask(element) {
    let parentElement = element.parentElement;
    parentElement.remove();
}

// add delete button pseudo code =>  
    // create a button with list item
    // add event listener to button 
    // create function using (this) to reference parent element (this.parentElement)
    //  and input list to delete list item

//wens group solution
//create button element
// add Delete button text
// add button to each list item
//Create function delete task
//event listner on the button on click 
//remove list item from list
//remove the button after list item deleted