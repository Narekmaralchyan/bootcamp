// DO NOT TOUCH THIS PART


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const generateCardNumber = () => {
    return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, _ => String(getRandomInt(9)));
};




// EXERCISE starts from here


/*
​
Card class creates a card, In the Card class you will
need to create a way so that we can get the card number
​
*/
class Card {
    #cardNumber = generateCardNumber();
    #amount = 0;

    constructor({ name, surname, pinCode }) {
        /*
         you will also need to do some logical checks so the name is not empty
         or the pin only consists of numbers
         and throw an error if the the condition is not met,
         you will also need to handle the error in the place where we use the Card constructor
          */

        if (this.nameIsValid(name)) {
            this.name = name;
        }
        else { throw new Error("invalid name/name field cannot be an empty") }
        if (this.surnameIsValid(surname)) {
            this.surname = surname;
        }
        else { throw new Error("invalid surname/surname field cannot be an empty") }
        if (this.pinIsValid(pinCode)) {
            this.pinCode = pinCode;
        }
        else { throw new Error("pin code can consists only numbers") }

    }
    nameIsValid(name) {
        return name;
    }
    surnameIsValid(surname) {
        return surname;
    }
    pinIsValid(pinCode) {
        return pinCode.toString().split("").every(digit => 0 <= +digit && +digit <= 9)
    }
    get number() {
        return this.#cardNumber;
    }
    get amount() {
        return this.#amount;
    }
    addMoney(money) {
        this.#amount += money;
    }
    withdrawMoney(money) {
        if (money <= this.#amount) {
            this.#amount -= money;
            return true;
        }
        else return false;
    }

}

/*
​
In Card Service you will need to create an easy and logical way of adding cards
​
All the methods and properties need to be static
​
When doing some operations ->
​
You will need to somehow keep the card records and check if the card is valid or not
*/

class CardService {
    static cardsList = [];

    static addCard(card) {
        this.cardsList.push(card)
    }


    static removeCard(cardNumber) {
        this.cardsList = this.cardsList.filter(item => !(item.number == cardNumber))
    }

    static async checkCardExistence(numbers) {
        // return true if the card exists
        // this will help you avoid duplicate card codes numbers
        let exists = false;
        return new Promise((resolve, reject) => {
            let card = {}
            for (let i = 0; i < this.cardsList.length; i++) {
                if (this.cardsList[i].number == numbers) {
                    card = this.cardsList[i]
                    exists = true;
                    break;
                }
            }
            if (exists) resolve(card);
            else reject("card doesn't exists")
        })
    }

    static async addMoney(cardNumber, moneyAmount) {
        await this.checkCardExistence(cardNumber)
            .then(card => {
                card.addMoney(moneyAmount);
                return "money added successfully"
            })
            .catch(error => {
                console.log(error);
            })
    }


    static async removeMoney(cardNumber, amount) {
        await this.checkCardExistence(cardNumber)
            .then(card => {
                card.withdrawMoney(amount);
                return "money removed successfully"
            })
            .catch(error => {
                console.log(error);
            })


    }

    static async transferFromTo(cardNumber, toCardNumber, amount) {

        // the transactions need to be safe

        // calls removeMoney and addMoney methods accordingly
        await Promise.all([this.checkCardExistence(cardNumber), this.checkCardExistence(toCardNumber)])
            .then(cards => {
                let [card, toCard] = cards;
                if (card.withdrawMoney(amount)) {
                    toCard.addMoney(amount)
                    return `${amount} AMD trasferd from ${cardNumber} to ${toCardNumber} successfully`
                }
                else throw new Error("not enough money")
            })
            .catch(error => {
                console.log(error);
            })

    }


}






//  ATM class is simple
// All methods are static

class ATM {

    static totalMoney = 0;

    static refill() {
        // this method refills the amount of the money in the ATM
        this.totalMoney = 500000;
    }


    static async getMoney(cardNumber, amount) {

        // you will need to call Card service appropriate method in order to get the money
        // if there is not enough money in the ATM you will need to throw error
        await CardService.checkCardExistence(cardNumber)
            .then(card => {
                if (money <= this.totalMoney) {
                    CardService.removeMoney(cardNumber, amount)
                    this.totalMoney -= amount;
                }
                else throw new Error("not enough money in ATM")

            })
            .catch(error => {
                console.log(error);
            })

    }




}

// All methods are static


class Terminal {
    static totalAmountOfMoney = 0;

    static async transferToCard(cardNumber, amount) {
        // need to also be validated
        await CardService.checkCardExistence(cardNumber)
            .then(card => {
                card.addMoney(amount);
                this.totalAmountOfMoney += amount;
                return "money added to card"
            })
    }
    static empty() {
        this.totalAmountOfMoney = 0;
    }


}
