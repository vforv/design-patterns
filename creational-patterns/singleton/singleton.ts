/**
 * Object Creational: Singleton
 * 
 * Intent: Ensure a class only has one instance, and provide a global point of access to it.
 */

export class Logger {
    public randomNum: number;

    constructor() {
        this.randomNum = Math.random();
    }

    public getRandomNumber() {
        return this.randomNum;
    }
}

export class Singleton {

    constructor() {
        if (!(Singleton as any).instance) {
            (Singleton as any).instance = new Logger();
        }
    }

    public getInstance() {
        return (Singleton as any).instance;
    }
}

console.log(new Singleton().getInstance().getRandomNumber());
console.log(new Singleton().getInstance().getRandomNumber());
