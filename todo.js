let toDoBar = document.querySelector('.to-do-bar');
let itemsList = document.querySelector('.to-do-items');
let addBtn = document.querySelector('.addBtn');
let toDoContainer = document.querySelector('.to-do-container');
let title = toDoContainer.querySelector('.title');
let array = JSON.parse(localStorage.getItem("myList")) || [];

// For onload animation
let phrase = "Abrar's Notes";
window.addEventListener('load', () => {
    // For title
    for(let i = 0; i < phrase.length; i++) {
    setTimeout(() => {
        title.textContent += phrase[i];
    }, 100 * i);
    // For to-do-bar
    toDoBar.style.opacity = '1';
    // For addBtn
    addBtn.style.opacity = '1';
}})

// For add button
let loader = document.querySelector('.loader');
function addItem() {
    addBtn.addEventListener('click', () => {
        if(toDoBar.value !== '') {
            loader.style.display = 'flex';
            setTimeout(() => {
                let inputVal = toDoBar.value.trim();
                array.push(inputVal);
                toDoBar.value = '';
                localStorage.setItem("myList", JSON.stringify(array));
                printItems();
                loader.style.display = 'none';
            }, 100);
        }
    })
}
addItem();

// to print items
function printItems() {
    itemsList.innerHTML = ``;
    array.forEach((item, index) => {
        let li = document.createElement('li');
        li.innerHTML = `${item} <i class="fa-solid fa-trash">`;
        itemsList.appendChild(li);

        // creating the event listeners for each li for deletion
        let trash = li.querySelector('i');
        trash.addEventListener('click', () => {
            array.splice(index, 1);
            localStorage.setItem("myList", JSON.stringify(array));
            printItems();
        })
    })
}
printItems();

// For creating circles
let body = document.querySelector('body');
body.addEventListener('click', (event) => {
    let circle = document.createElement('div');
    circle.classList.add('circles');
    body.appendChild(circle);
    circle.style.top = event.pageY + 'px';
    circle.style.left = event.pageX + 'px';
    setTimeout(() => {
        circle.remove();
    }, 600)
})