// Exercise 2. Let's imagine a scenario 

import { settings, users } from "./sources.js";

// There is an application that shows a list of  employees 
// There are different settings stored at the backend, related to how to show the list 
// At first, the application should get the settings from the backend, to be able to render the list 

// Note:  Create JSON files inside the src folder and fetch all related information using fetch 

// Here are the settings available: Settings JSON

// Show_only_active - If true, only employees with status = true should be displayed 

// Max_items_to_show - how many employees should be visible (No more than the specified value)

// Show_description - If true, the description column should be visible, else
// Inside the description cell should be the following: `N/A` which means not available

// Then the application should get the list of employees and render the table on the web page. 
// It should be one employee per line considering the settings described above. 


function fetchData (){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(users)
        },2000)
    })
}
function fetchSettings (){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(settings)
        },100)
    })
}

function render (){
    Promise.all([fetchData(),fetchSettings()])
        .then(res=>{
            let Container = document.createElement("div")
            let settings = res[1];
            let data = res[0];
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
                        
                        info.append(name,description)
                        Container.append(info);
                        count++;
                    }
                    if(count==settings.Max_items_to_show) break;
                }
            }
            else{
                for(let i = 0 ; i < settings.Max_items_to_show && i<data.length ; i++){
                    
                        let info = document.createElement("div")
                        info.classList.add("info")
                        
                        let name =document.createElement("span")
                        name.classList.add("name")
                        name.innerText = data[i].name

                        let description = document.createElement("span")
                        description.classList.add("description")
                        if(settings.Show_description){ description.innerText = "->>"+ data[i].description;}
                        else {description.innerText = " not available"}
                       
                        info.append(name,description)
                        Container.append(info);
                        
                    
                    
                }
            }
            document.body.append(Container)
        })
}
render()