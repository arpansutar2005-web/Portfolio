function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function addTodo() {
    let input = document.getElementById("todoInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    li.onclick = function () {
        this.style.textDecoration = "line-through";
    };

    document.getElementById("todoList").appendChild(li);
    input.value = "";
}
