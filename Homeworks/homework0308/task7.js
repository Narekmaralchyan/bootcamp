class Product {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }

}

class ShoppingCart {
    products = []
    
    addProdcut(product) {
        this.products.push(product)
        
    }
    removeProduct(product) {
        this.products = this.products.filter(item => item.name != product.name)
        
    }

    totalPrice(){
       let total = this.products.reduce((aggr,curr)=>{
            return aggr+ curr.price;
        },0)
        let countObj = {};

        for (let i = 0; i < this.products.length; i++) {
            let current = this.produccts[i]
            if (countObj[current.name]) countObj[current.name]++;
            else countObj[current.name] = 1;
        }

        for (let key in countObj) {
            let temp = {}
            this.products.forEach(item => {
                if (item.name == key) temp = item;
            })

            if (countObj[key] > 3) {
                total -= Math.floor(countObj[key] / 4) * temp.price
            }
        }

        if (this.products.length >= 5) return (total - total * 0.1);
        return total;
    }

    replace(productName, replacementProduct) {
        this.products = this.products.map(item => {
            if (item.name == productName) return replacementProduct;
            return item;
        })
    }
}

let apple = new Product("apple", "fruit", 100)
let apple1 = new Product("apple", "fruit", 100)
let apple2 = new Product("apple", "fruit", 100)
let orange = new Product("orange", "fruit", 300)
let cola = new Product("coca", "drink", 300)

let cart = new ShoppingCart()

cart.addProdcut(apple)
console.log(cart.totalPrice() );