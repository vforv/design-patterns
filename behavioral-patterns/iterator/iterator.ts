/**
 * Object Behavioral: Iterator
 *
 * Intent: Provide a way to access the elements of an aggregate object
 * sequetially without exposing its underlying representation.
 */

export class Item {
    constructor(public name: string) { }
}

export class Iterator {
    private index: number;
    constructor(private items: Item[] = []) {
        this.index = 0;
    }

    public hasNext() {
        return this.items.length < this.index;
    }

    public next() {
        if (this.hasNext) {
            this.index = this.index + 1;
            return this.items[this.index];
        }
    }

    public prev() {
        if (this.index > 0) {
            this.index = this.index - 1;
            return this.items[this.index];
        }
    }
}

export const itemList = new Iterator([
    new Item('item1'),
    new Item('item2'),
    new Item('item3'),
    new Item('item4')
]);

console.log(itemList.next());
console.log(itemList.next());
console.log(itemList.prev());
