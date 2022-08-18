import { data } from "./sources/sources.js"   //Data loaded from www.ebay.com
let loaded = false;
const root = document.querySelector(".root")
const showButton = document.querySelector(".showItems")
const container = document.querySelector(".items")
const showCart = document.querySelector(".showCart")
const searchButton = document.querySelector(".search")

let cartElement = document.querySelector(".cartElement")
let cartPrice = document.createElement("div")    //cartPrice is planned for general price in Cart
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
function createItemCard({name,price,src}){   // createItemCard() is createing <div> element for one object,
    let card = document.createElement("div")       // card element includes picture,name,price,and button for adding to Cart
    card.classList.add("itemCard") 

    let image = document.createElement("img")
    image.classList.add("itemImage")
    image.setAttribute("alt","itemPhoto")
    image.setAttribute("src",src)
   
    let cont = document.createElement("div") //cont includes price element and add button,
    cont.classList.add("cont")               //and then card element includes 3 elements for set styles correctly

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

        let removeButton = document.createElement("button")
        removeButton.innerText = "REMOVE"
        removeButton.classList.add("removeElem")
        removeButton.addEventListener("click",function(event){
            event.target.parentElement.parentElement.remove()
            let currentPriceArray = [...document.querySelectorAll(".itemInCart>.cont>.itemPrice")].map(elem=>+elem.innerText)
            document.querySelector(".currentPrice").innerText = currentPriceArray.reduce((arg,cur)=>arg+cur,0)
            
        })
        let cont = document.createElement("div")
        cont.classList.add("cont")
        cont.append(itemPrice.cloneNode(true),removeButton)

        container.append(image.cloneNode(true),itemName.cloneNode(true),cont)
        cartElement.append(container)

    })
    cont.append(itemPrice,addButton)
    
    card.append(image,itemName , cont);
    return card;
}
function render(){           // render() render all item cards in document
    if(!loaded)
    {
        let loading = document.createElement("h2")
    loading.classList.add("loading")
    loading.innerText = "LOADING..."
    container.append(loading)  
    fetchData()
        .then(data=>JSON.parse(data))
        .then(data=>{
            loading.remove();
            data.forEach((item,)=>{
                container.append(createItemCard(item,))
            })
        })
    }
    loaded =true;
}
function search (event){
    let names = document.querySelectorAll(".itemName");
    names.forEach(item=>{
        if(!item.innerText.toLowerCase().includes(searchButton.value.toLowerCase())){
            item.parentElement.classList.add("hidden");
        }
        else {
            item.parentElement.classList.remove("hidden")
        }
    })
}
function show(){
    cartElement.classList.remove("hidden")
   price.innerText = ""
    let priceText = document.createElement("h2")
    priceText.classList.add("itemPrice","currentPrice")
    let currentPriceArray = [...document.querySelectorAll(".itemInCart>.cont>.itemPrice")].map(elem=>+elem.innerText)
    priceText.innerText = currentPriceArray.reduce((arg,cur)=>arg+cur,0)
    price.append(priceText)
}

showButton.addEventListener("click",render)

searchButton.addEventListener("input",search)

showCart.addEventListener("click",show)

document.addEventListener("click",function(event){
    if(!event.composedPath().includes(cartElement) && event.target != showCart){
        cartElement.classList.add("hidden")
    }
})