console.log(__dirname,"  ",__filename)

class Person2{
    constructor(name,occupation){
        this.name=name
        this.occupation= occupation
    }

    greeting(){
        console.log(`My name is ${this.name} and occupation ${this.occupation}. `)
    }
}

module.exports=Person2