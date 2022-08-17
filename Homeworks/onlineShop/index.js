import { data } from "./sources.js";
const showButton = document.querySelector(".showItems")
const container = document.querySelector(".items")
const showCart = document.querySelector(".showCart")
const cartData = [];


function fetchData (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data)
        },3000)
    })
}

function createItemCard({name,price,src}){
    let card = document.createElement("div")
    card.classList.add("itemCard")

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
    addButton.addEventListener("click",addToCart)
    itemPrice.append(addButton)
    
    card.append(image,itemName , itemPrice ,);
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
            data.forEach(item=>{
                container.append(createItemCard(item))
            })
        })
}

function addToCart(event){
    cartData.push(event.target.parentElement.parentElement)
    console.log(cartData);
}

showButton.addEventListener("click",render)

showCart.addEventListener("click",function (){
    let cart = document.createElement("div");
    cart.append(...cartData)
    document.body.append(cart)
})
