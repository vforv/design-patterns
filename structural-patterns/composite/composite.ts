/**
 * Object Structural: Composite
 * 
 * Intent: Compose objects into tree structures to represent part-whole
 * hiararchies. Composite lets clients treat individual objects and compositions
 * of objects uniformly.
 */

export class Item {
    constructor(private name: string, private p: number) { }

    public print() {
        console.log(this.name);
    }

    public price() {
        return this.p;
    }
}

export class Category {
    constructor(private name: string, private composits: Item[]) { }

    public print() {
        console.log(this.name.toUpperCase());
        this.composits.forEach(item => item.print());
    }

    public price() {
        return this.composits.reduce((oldPrice, newItem) => oldPrice + newItem.price(), 0);
    }
}

const omelette = new Item('Omelette', 3);
const cake = new Item('Cake', 1.5);
const breakfast = new Category('Breakfast', [omelette, cake]);
console.log(breakfast.print());
console.log(breakfast.price());
