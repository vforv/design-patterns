/**
 * Object Creational: Builder
 * 
 * Intent: Separate the construction of complex object from its representation
 * so that the same construction process can create different representations.
 * 
 * Use to solve problem of telescopic constructor anti-pattern.
 */

export class Person {
    private isEmployee: boolean;
    private sectorsAccess: string[];
    private name: string;

    constructor(builder: any) {
        this.name = builder.name
        this.isEmployee = builder.isEmployee;
        this.sectorsAccess = builder.sectorsAccess;
    }
}

export class PersonBuilder {
    private isEmployee: boolean;
    private sectorsAccess: string[];
    private name: string;

    constructor(name: string) {
        this.name = name;
        this.isEmployee = false;
        this.sectorsAccess = [];
    }

    public makeEmployee() {
        this.isEmployee = true;
        return this;
    }

    public addSectors(sectors: string[]) {
        this.sectorsAccess = sectors;
        return this;
    }

    public build() {
        return new Person(this);
    }
}

console.log(new PersonBuilder('Joe').addSectors(['sector1, sector2']).makeEmployee());
console.log(new PersonBuilder('Sue').addSectors(['sector3']));