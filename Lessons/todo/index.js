const add = document.querySelector(".add")
const input = document.querySelector(".input")
const container = document.querySelector(".container")

function Add(value){
    if(value){
        let todo = document.createElement("div");
    todo.classList.add("todo")
    todo.id = `${Math.random()}`
    
    let removeTodo = document.createElement("button");
    removeTodo.classList.add("remove")
    removeTodo.innerText = "delete"
    
    let edit = document.createElement("button");
    edit.classList.add("edit")
    edit.innerHTML = "edit"
    
    todo.innerText = value ;
    todo.append(edit,removeTodo)
    container.append(todo)
    input.value = ""
    }
}
function Delete(event){
    event.target.parentElement.remove();
}

function Edit(event){
    Delete(event);
    let todo = document.createElement("div");
    todo.id = event.target.parentElement.id;

    let newInput = document.createElement("input");
    newInput.classList.add("newInput")
    
    let removeTodo = document.createElement("button");
    removeTodo.classList.add("remove")
    removeTodo.innerText = "delete"
    
    let submit = document.createElement("button");
    submit.classList.add("submit")
    submit.innerHTML = "submit"
    submit.addEventListener("click",function(event){
        
        event.target.parentElement.remove()

        Add(newInput.value)
    })
    
    
    todo.append(newInput,submit,removeTodo)
    container.append(todo)

    

    
}

document.addEventListener("click" , (event)=>{
    if(event.target.classList.contains("todo")) event.target.classList.toggle("done");//ete chka dnum e ete ka jnjum e
    if(event.target == add) Add(input.value);
    if(event.target.classList.contains("remove")) Delete(event);
    if(event.target.classList.contains("edit")) Edit(event);

})