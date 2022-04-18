export default class Pokemon {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Mi pokemón ${this.name} te saluda!!!`)
    }

    sayMessage(message) {
        console.log(`Mi pokemón ${this.name} dice: ${message}`)
    }
}