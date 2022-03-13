const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
let todos = [];
const TODO_KEY = "todos";
const savedTodos = localStorage.getItem(TODO_KEY);
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((item)=>item.id!==parseInt(li.id));
  saveTodos();
}
function saveTodos(){
  localStorage.setItem(TODO_KEY,JSON.stringify(todos));
}
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText="❌";
  button.addEventListener("click",deleteTodo);
  todos.push(newTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = {
    id : Date.now(),
    text : todoInput.value,
  }
  todoInput.value = "";
  paintTodo(newTodo);
  saveTodos();
}
todoForm.addEventListener("submit", handleTodoSubmit);

if(savedTodos !== null){
  JSON.parse(savedTodos).forEach(paintTodo);
}