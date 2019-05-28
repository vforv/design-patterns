/**
 * Object Behavioral: Chain Of Responsibility 
 * 
 * Intent: Avoid coupling the sender of a request to its receiver
 * by giving more then one object a change to handle the request.
 * Chain the receiving objects and pass the request along the chain.
 */

export const ingredients = {
    bar: [
        { name: 'leamon', sku: 3 },
        { name: 'coffee', sku: 5 }
    ],
    kitchen: [
        { name: 'pork', sku: 1 },
        { name: 'fish', sku: 10 }
    ]
}

export class Store {
    public storage: any;

    constructor(private name: string, private ingredients: any) {
        const bar = new Storage('bar', this.ingredients.bar);
        const kitchen = new Storage('kitchen', this.ingredients.kitchen);
        bar.setNext(kitchen);
        this.storage = bar;
    }

    public find(searchFor: string) {
        return this.storage.find(searchFor);
    }
}

export class Storage {
    public next: any;

    constructor(
        private name: string,
        private ingredients: { name: string, sku: number }[]
    ) { }

    public setNext(storage: any) {
        this.next = storage;
    }

    public find(searchFor: string) {
        const found = this.searchLocal(searchFor);
        if (found) {
            return found;
        } else if (this.next) {
            return this.next.find(searchFor);
        } else {
            return `we cannot find ${searchFor}`;
        }
    }

    private searchLocal(searchFor: string) {
        const index = this.ingredients.map(ing => ing.name).indexOf(searchFor);
        return this.ingredients[index];
    }
}

const store = new Store('Food ingredients search', ingredients);
console.log(store.find('fish'));
