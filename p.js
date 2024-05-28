let input = document.getElementsByClassName("enter-task")[0];
let text = document.querySelector(".text");

function ADD() {
    if (input.value == "") {
        alert("enter a task  first");
    } else {
        let newelemnt = document.createElement("li");
        newelemnt.innerHTML = `${input.value} `;
        text.appendChild(newelemnt);
        input.value = ""; 
        // newelemnt.querySelector("i").addEventListener("click", remove);

        // function remove() {
        //     newelemnt.remove()
        // }
    }
}
