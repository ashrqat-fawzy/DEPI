var addBtn = document.querySelector("#add-btn");
var inputField = document.querySelector("#input");
var addContainer = document.querySelector(".todo-add");

// Load items from local storage when the page loads
if (localStorage.getItem('todoItems')) {
    addContainer.innerHTML = localStorage.getItem('todoItems');
}

addBtn.addEventListener("click", function() {
    addItem();
});

inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addItem();
    }
});

function addItem() {
    var itemValue = inputField.value;

    // Create new item div
    const item = document.createElement("div");
    item.classList.add('item');

    // Create a span to hold the Font Awesome checkbox
    const checkboxIcon = document.createElement("span");
    checkboxIcon.classList.add('fa-regular', 'fa-square');
    checkboxIcon.style.cursor = "pointer";

    // Create content div
    const content = document.createElement("div");
    content.classList.add('content');

    // Create input field for item
    const inputItem = document.createElement("input");
    inputItem.classList.add('text');
    inputItem.type = "text";
    inputItem.value = itemValue; // Set the input value to the item value
    inputItem.setAttribute('readonly', true);

    content.appendChild(inputItem);
    item.appendChild(checkboxIcon);
    item.appendChild(content);

    // Create action div
    const toTakeAction = document.createElement("div");
    toTakeAction.classList.add('action');

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteBtn.type = "button";
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.style.border = "none";

    toTakeAction.appendChild(deleteBtn);
    item.appendChild(toTakeAction);

    addContainer.appendChild(item);
    inputField.value = "";

    // Save items to local storage
    localStorage.setItem('todoItems', JSON.stringify(addContainer.innerHTML));

    inputItem.addEventListener("click", function() {
        checkboxIcon.classList.toggle('fa-square');
        checkboxIcon.classList.toggle('fa-square-check');
        inputItem.classList.toggle('completed');
    });

    deleteBtn.addEventListener("click", () => {
        addContainer.removeChild(item);
        localStorage.setItem('todoItems', addContainer.innerHTML);
    });
}