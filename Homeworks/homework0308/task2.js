class CoffeeShop {
    constructor(name,menu,orders=[]){
        this.name= name;
        this.menu = menu;
        this.orders = orders;
    }

    addOrder(order){
        let orderAdded = false
        this.menu.forEach(item => {
            if(item.name == order.name){
                this.orders.push(order);
                orderAdded = true;}
        });
        if(orderAdded) return  "Order added"
        else return "This item is currently unavailable!"
    }

    fulfillOrder(){
        if(this.orders.length) {let item = this.orders.shift();
                     return  `The ${item.name} is ready!`}
        else return "All orders have been fulfilled"
    }
    listOrders(){
        return this.orders;
    }
    dueAmount(){
        return this.orders.reduce((aggr, curent)=>{
            return aggr+curent.price;
        },0)   
    }
    cheapestItem(){
        let lowest = {price:Infinity}
        
        for(let i=0 ; i < this.menu.length ; i++){
            let current = this.menu[i]
            if(current.price < lowest.price) lowest = current;
        }
        return lowest.name;
    }
    drinksOnly(){
        return this.menu.filter(item => item.type == "drink")
    }
    foodOnly(){
        return this.menu.filter(item => item.type == "food")
    }
}


let menu = [
    {
        name:"coca",
        price:"200",
        type:"drink"
    },
    {
        name:"fanta",
        price:"300",
        type:"drink"
    },
    {
        name:"sprite",
        price:"100",
        type:"drink"
    }
]
let c1= new CoffeeShop("shop",menu)

c1.addOrder( {
    name:"sprite",
    price:"100",
    type:"drink"
})
console.log(c1.orders);