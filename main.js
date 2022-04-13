const input = document.getElementById('input')
const submit = document.getElementById('submit')
const child = document.getElementsByClassName('child')[0]



submit.addEventListener('click', () => {
    let element = document.createElement('div')
    element.classList.add('todo')
    element.innerHTML = `<p>${input.value}</p>`
    child.appendChild(element)
    
    console.log(input.value);
})