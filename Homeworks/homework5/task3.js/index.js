// Exercise 3. Let's make our table interactive!

// Apply the following functionality to our table 

// - Create a form above the table. It should contain an input,
//  with the label  `Max Items To Show` and a submit button.
//   The initial value of the input should be the value of Max_items_to_show  from the settings

// - It should be possible to change the Max_items_to_show value and after pressing the submit button,
//  the table should show the submitted count of items.
// It should be possible to remove an employee from the list.
//  There should be a button with the text `Remove`. 
//  After pressing it, the entire row should be deleted from the list 

import {  users } from "./sources.js";
const root = document.getElementById("root")
let input = document.getElementById("inputText")
let submit =document.getElementById("submit")


function fetchData (){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(users)
        },100)
    })
}
function fetchSettings (){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(settings)
        },100)
    })
}
let settings = {
    Show_only_active : false,
    Max_items_to_show:3,
    Show_description:false,
}

function render (){
    fetchData()
        .then(res=>{
            
            let Container = document.createElement("div")
            Container.classList.add("container")
            let data = res;
            let count = 0;
            if(settings.Show_only_active){
                for(let i = 0 ; i < data.length ; i++){
                    if(data[i].status){
                        let info = document.createElement("div")
                        info.classList.add("info")

                        let name =document.createElement("span")
                        name.classList.add("name")
                        name.innerText = data[i].name

                        let description = document.createElement("span")
                        description.classList.add("description")
                        if(settings.Show_description){ description.innerText = "->>"+ data[i].description;}
                        else {description.innerText = " not available"}
                        
                        let remove = document.createElement("button")
                        remove.classList.add("remove")
                        remove.innerText = "REMOVE"

                        info.append(name,description,remove)
                        Container.append(info);
                        count++;
                    }
                    if(count==settings.Max_items_to_show) break;
                }
            }
            else{
                for(let i = 0 ; i < settings.Max_items_to_show ; i++){
                    
                        let info = document.createElement("div")
                        info.classList.add("info")
                        
                        let name =document.createElement("span")
                        name.classList.add("name")
                        name.innerText = data[i].name

                        let description = document.createElement("span")
                        description.classList.add("description")
                        if(settings.Show_description){ description.innerText = "->>"+ data[i].description;}
                        else {description.innerText = " not available"}
                       
                        let remove = document.createElement("button")
                        remove.classList.add("remove")
                        remove.innerText = "REMOVE"

                        info.append(name,description,remove)
                        Container.append(info);
                       
                    }
                
            }
            root.append(Container)
        })
}
render()

document.addEventListener("click",function(ev){
    if(ev.target.classList.contains("remove")){
        ev.target.parentElement.remove()
    }
})

submit.addEventListener("click",function(ev){
    document.querySelector(".container").remove();
    settings.Max_items_to_show = +input.value;
    console.log(+input.value);
    render();
})