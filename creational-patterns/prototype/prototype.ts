/**
 * Object Creational: Prototype
 *
 * Intent: Specify the kind of objects to create using prototypical instance,
 * and create new objects by copying this prototype.
 */

export class Shopper {
    private shopperList: any[];

    constructor(public name = 'unamed person') {
        this.shopperList = [];
    }

    public getShopperList() {
        return this.shopperList.join(', ');
    }

    public addItemList(item: string) {
        this.shopperList.push(item);
    }

    /**
     * Clone shopper class with all its methods
     */
    public clone() {
        const proto = Object.getPrototypeOf(this);
        const cloned = Object.create(proto);
        cloned.name = this.name;
        cloned.shopperList = this.shopperList;
        return cloned;
    }
}

export class StandardShopper {
    public shopper: Shopper;
    constructor() {
        this.shopper = new Shopper();
        this.shopper.addItemList('burger');
        this.shopper.addItemList('salad');
        this.shopper.addItemList('Coca Cola');
    }

    getShopper() {
        return this.shopper;
    }
}

const shopper1 = new StandardShopper().getShopper().clone();
shopper1.name = 'Alex';
shopper1.addItemList('cake');

const shopper2 = new StandardShopper().getShopper().clone();
shopper2.name = 'Bob';
shopper2.addItemList('ice cream');

console.log(shopper1.name, shopper1.getShopperList());
console.log(shopper2.name, shopper2.getShopperList());