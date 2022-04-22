const input = document.getElementById('input')
const submit = document.getElementById('submit')
const child = document.getElementsByClassName('child')[0]
const todoForm = document.getElementById('todoForm')


function setTodo(todo) {
    perviousTodo = localStorage.getItem('todo')
    if (perviousTodo) {
        localStorage.setItem('todo', `${todo}, ${perviousTodo}`)
    } else {
        localStorage.setItem('todo', `${todo}`)
    }
}

function displayTodo(value){
    let element = document.createElement('div')
    element.classList.add('todo')
    element.innerHTML = `<p>${value}</p>`
    child.appendChild(element)
}

function initTodo(){
    data = localStorage.getItem('todo')
    if (data) {
        dataArr = data.split(', ')
        console.log(dataArr);
        dataArr.forEach(dataTodo => {
            displayTodo(dataTodo)
        })
    }
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value) {
        setTodo(input.value)
        child.innerHTML = ''
        initTodo()
        input.value = ''
    }
})

initTodo()