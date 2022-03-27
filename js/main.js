function taskManager() {
    const inputTask = document.getElementById("task");
    const containerTask = document.querySelector(".container");
    
    //Create elements
    const divTask = document.createElement("div");
    const divTaskContent = document.createElement("div");
    const inputTaskContent = document.createElement("input");
    const divDelete = document.createElement("div");
    const trashIcon = document.createElement("i");
    const checkbox = document.createElement("input");
    const dateLive = moment().format("DD/MM/YYYY");
    const divDate = document.createElement("div");
    const divEdit = document.createElement("div");
    const editIcon = document.createElement("i");
    const saveIcon = document.createElement("i");

    //Input task validation
    if (inputTask.value === "") {
        alert("Por favor preencha a tarefa antes de clicar em cadastrar");
    } else {
        divTask.className = "task";
        divTask.id = "1";
        divTaskContent.className = "task-content";

        inputTaskContent.id = "task-text";
        inputTaskContent.setAttribute("type", "text");
        inputTaskContent.setAttribute("name", "task-text");
        inputTaskContent.disabled = true;
        inputTaskContent.value = inputTask.value;

        divEdit.className = "edit";
        editIcon.className = "fa-solid fa-pen-to-square";
        saveIcon.className = "fa-solid fa-floppy-disk";

        divDelete.className = "delete";
        trashIcon.className = "fa-solid fa-trash-can";

        checkbox.setAttribute("type", "checkbox");
        checkbox.id = "checkbox";
        checkbox.setAttribute("name", "checkbox");

        //Setting dates
        divDate.className = "date";
        divDate.innerHTML = `Data de criação: ${dateLive}`;

        //Child assignments
        divTask.appendChild(divDate);
        divTask.appendChild(divTaskContent);
        divTaskContent.appendChild(checkbox);
        divTaskContent.appendChild(inputTaskContent);
        divTaskContent.appendChild(divEdit);
        divEdit.appendChild(editIcon);
        divTaskContent.appendChild(divDelete);
        divDelete.appendChild(trashIcon);
        containerTask.appendChild(divTask);
        
        //Checkbox and checked validation tasks
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                checkbox.checked = true;
                divTaskContent.style.background = "#9C9C9C";
                inputTaskContent.style.textDecoration = "line-through";
            } else {
                divTaskContent.style.background = "linear-gradient(90.39deg, #9D4EDD 0%, #5A189A 100%)";
                inputTaskContent.style.textDecoration = "none";
            }
        });

        //Edit task
        editIcon.addEventListener("click", () => {
            inputTaskContent.disabled = false;
            inputTaskContent.focus();
            divEdit.removeChild(editIcon);
            divEdit.appendChild(saveIcon);
            saveIcon.addEventListener("click", () => {
                inputTaskContent.disabled = true;
                divEdit.removeChild(saveIcon);
                divEdit.appendChild(editIcon);
            });
        });

        //Exclude task
        trashIcon.addEventListener("click", () => {
            containerTask.removeChild(divTask);
        });

        inputTask.value = "";
    }
}