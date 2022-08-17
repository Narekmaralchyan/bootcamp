import { data } from "./sources.js";
let cartData = [];
cartData.price = 0;
const root = document.querySelector(".root")
const showButton = document.querySelector(".showItems")
const container = document.querySelector(".items")
const showCart = document.querySelector(".showCart")
const searchButton = document.querySelector(".search")
let cartElement = document.querySelector(".cartElement")

let cartPrice = document.createElement("div")
cartPrice.classList.add("cartPriceText")
    
let payText = document.createElement("h2")
payText.innerText = "You must pay---"

let price =document.createElement("div")


cartPrice.append(payText , price )
cartElement.append(cartPrice) 




function fetchData (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data)
        },3000)
    })
}

function createItemCard({name,price,src},index){
    let card = document.createElement("div")
    card.classList.add("itemCard")
    card.id = index

    let image = document.createElement("img")
    image.classList.add("itemImage")
    image.setAttribute("src",src)

    let itemName = document.createElement("div")
    itemName.classList.add("itemName")
    itemName.innerText = name;

    let itemPrice = document.createElement("div")
    itemPrice.classList.add("itemPrice")
    itemPrice.innerText = price;
    
    let addButton = document.createElement("button")
    addButton.classList.add("addButton")
    addButton.innerText = "ADD TO CART"
    addButton.addEventListener("click",function (event){
        let container = document.createElement("div");
        container.classList.add("itemInCart")
        container.id = Math.random()

        let removeButton = document.createElement("button")
        removeButton.innerText = "REMOVE"
        removeButton.classList.add("removeElem")
        removeButton.addEventListener("click",function(event){
            cartData = cartData.filter(elem=>elem.id != event.target.parentElement.id)
            event.target.parentElement.remove()
            let currentPriceArray = [...document.querySelectorAll(".itemInCart>.itemPrice")].map(elem=>+elem.innerText)
            document.querySelector(".currentPrice").innerText = currentPriceArray.reduce((arg,cur)=>arg+cur,0)
            
        })

        container.append(image.cloneNode(true),itemName.cloneNode(true),itemPrice.cloneNode(true),removeButton)
        cartData.push(container);
        cartElement.append(container)

    })
    
    
    card.append(image,itemName , itemPrice ,addButton);
    return card;

}

function render(){
    let loading = document.createElement("h2")
    loading.innerText = "LOADING..."
    container.append(loading)
    fetchData()
        .then(data=>JSON.parse(data))
        .then(data=>{
            loading.remove();
            data.forEach((item,index)=>{
                container.append(createItemCard(item,index))
            })
        })
}

showButton.addEventListener("click",render)

searchButton.addEventListener("input",function(event){
    let names = document.querySelectorAll(".itemName");
    names.forEach(item=>{
        if(!item.innerText.toLowerCase().includes(searchButton.value.toLowerCase())){
            item.parentElement.classList.add("hidden");
        }
        else {
            item.parentElement.classList.remove("hidden")
        }
    })
})

showCart.addEventListener("click",function(){
     cartElement.classList.remove("hidden")
    price.innerText = ""
     let priceText = document.createElement("h2")
     priceText.classList.add("itemPrice","currentPrice")
     let currentPriceArray = [...document.querySelectorAll(".itemInCart>.itemPrice")].map(elem=>+elem.innerText)
     priceText.innerText = currentPriceArray.reduce((arg,cur)=>arg+cur,0)
     price.append(priceText)
 })


document.addEventListener("click",function(event){
    if(!event.composedPath().includes(cartElement) && event.target != showCart){
        cartElement.classList.add("hidden")
    }
})



