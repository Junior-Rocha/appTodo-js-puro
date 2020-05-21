var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

const todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for(let todo of todos){//Laço proprio para manipular dados em arrays (for of)

        let todoElement = document.createElement('li');
            todoElement.textContent = todo; // atribuindo valor ao elemento criado (href)

        let linkElement = document.createElement('a')
            linkElement.setAttribute('href', '#')

        let pos = todos.indexOf(todo);
            linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

            linkElement.textContent =  "Excluir" // atribuindo valor ao elemento criado

            todoElement.appendChild(linkElement)

            listElement.appendChild(todoElement);
    }
}
renderTodos()

function createTodo(){
    var todoText = inputElement.value;
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
        saveToStorage()
}

buttonElement.onclick = createTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}


