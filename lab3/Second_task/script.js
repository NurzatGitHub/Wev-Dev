function AddTask() {
    const inputBox = document.getElementById("input-box");
    const listTask = document.getElementById("list-task");

    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "btn-link";
        let trashIcon = document.createElement("span");
        trashIcon.className = "bi bi-trash-fill red-color";
        deleteButton.appendChild(trashIcon);
        
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(inputBox.value));
        li.appendChild(deleteButton);
        listTask.appendChild(li);

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                li.classList.add('checked');
            } else {
                li.classList.remove('checked');
            }
        });

        deleteButton.addEventListener('click', function() {
            listTask.removeChild(li);
        });
    }
    inputBox.value = '';
}