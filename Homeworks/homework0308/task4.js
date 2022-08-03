class Character{
    #types = ["Bowerman", "Swordsman", "Magician", "Daemon",
        "Undead", "Zombie"]
    constructor(name,type){
        if(name.length >= 2 && name.length<= 10){
            this.name = name
        }
        else throw new Error("Name length must be greater than 2 and lower than 10 ")

        if(this.#types.includes(type)){
            this.type = type
        }
        else throw new Error(" the type of character must be a one of this [Bowman, Swordsman, Magician, Daemon,Undead, Zombie]")
        this.health = 100;
        this.level = 1;
        this.attack = null ;
        this.defense = null;
    }

    levelUp(){
        if(this.health){
            this.level++ ;
            this.attack += this.attack * 0.2;
            this.defense += this.defense * 0.2 ;
            this.health = 100;
        }
    }
    damage(points){
        this.health -= points*(1-this.defense/100)
        if(this.health<0) this.health=0;
    }
}
class Bowerman extends Character{
    constructor(name){
        let type = "Bowerman"
        super(name,type)
        this.attack = 25;
        this.defense = 25
    }
}

class Swordsman extends Character{
    constructor(name){
        let type = "Swordsman"
        super(name,type)
        this.attack = 40
        this.defense = 10
    }
}

class Magician extends Character{
    constructor(name){
        let type = "Magician"
        super(name,type)
        this.attack = 10;
        this.defense = 40
    }
}

class Daemon extends Magician{
    constructor(name){
        let type = "Daemon"
        super(name,type)
        this.attack = 10;
        this.defense = 40
    }
}

class Undead extends Character {
    constructor(name){
        let type = "Undead"
        super(name,type)
        this.attack = 25;
        this.defense = 25
    }
}

class Zombie extends Character{
    constructor(name){
        let type = "Zombie"
        super(name,type)
        this.attack = 40;
        this.defense = 10
    }
}