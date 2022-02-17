let newTask = document.querySelector('.new-task')
let allTasks = document.querySelector('.all-tasks');
let addButton = document.querySelector('.add-button');
let oneTask = document.querySelectorAll('.one-task');
let deleteImage = document.querySelectorAll('.delete-img');

function addTask(){
    if(newTask.value != null){
        let div = document.createElement("div");
        div.className="one-task";
        let label = document.createElement("label");
	    label.className = "one-new-task";
        let check = document.createElement("input");
        check.type = "checkbox";
        check.className = "checkbox";
        let span = document.createElement("span");
	    span.innerHTML = newTask.value;
        let image = document.createElement("img");
        image.className = "delete-img";
        image.src = "https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png";
        image.addEventListener('click', remove);
        allTasks.appendChild(div);
        div.appendChild(label);
        label.appendChild(check);
        label.appendChild(span);
        div.appendChild(image);
        newTask.value = null;
    }
}
function remove(){
    this.parentNode.remove();
}
