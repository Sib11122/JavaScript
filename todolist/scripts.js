function addTask() {
    let inputTxt = document.getElementById('input').value;
    let result = document.getElementById('result');

    let span = document.createElement('span');
    let editBtn = document.createElement('button');
    let delBtn = document.createElement('button');

    editBtn.innerText = "Edit";
    delBtn.innerText = "Delete";

    span.appendChild(document.createTextNode(inputTxt + " "));
    span.appendChild(editBtn);
    span.appendChild(delBtn);

    // EDIT FUNCTION
    editBtn.onclick = function () {
        let newTxt = prompt("Enter the new value:", inputTxt);
        if (newTxt !== null) {
            span.firstChild.textContent = newTxt + " ";
        }
    };

    // DELETE FUNCTION
    delBtn.onclick = function () {
        result.removeChild(span);
    };

    result.appendChild(span);

    document.getElementById('input').value = "";
}
