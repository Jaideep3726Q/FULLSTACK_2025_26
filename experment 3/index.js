let input = document.querySelector("input")
let btn = document.querySelector("button")
let list = document.querySelector("ol")
let delBtn = document.createElement("button");

btn.addEventListener("click", taskHandler)

function taskHandler() {
    let data = input.value;

    if (data == "") {
        alert("Please enter before adding")
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = data;
    list.appendChild(li);

    input.value = ""; 
    
    delBtn.textContent = "Delete";
     delBtn.addEventListener("click", function () {
        list.removeChild(li);
    });
    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
}
