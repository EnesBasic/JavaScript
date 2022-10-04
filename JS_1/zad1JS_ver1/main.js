let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

function dodaj(){
    let novi_el = document.createElement('p');
    novi_el.classList.add('paragraph-styling');
    toDoContainer.appendChild(novi_el);
    novi_el.innerText = inputField.value;
    inputField.value = '';
    novi_el.style.textDecoration = 'line-through';

    novi_el.addEventListener('dblclick', function(){
        toDoContainer.removeChild(novi_el);
    });


    console.log(novi_el);
}
    





















