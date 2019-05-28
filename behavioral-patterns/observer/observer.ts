/**
 * Object Behavioral: Observer
 *
 * Intent: Define one-to-many dependency between objects
 * so that when one object changes state, all its dependents are
 * notified and updated automatically.
 */

export class Shopper {
    constructor(public name: string) { }

    public notify(storeName: string, discount: number) {
        console.log(`Discount of ${discount}% in store\
 ${storeName}, ${this.name} notified`);
    }
}

export class Shop {
    public subscribers: Shopper[];
    constructor(public name: string) {
        this.subscribers = [];
    }

    public subscribe(observer: Shopper) {
        this.subscribers.push(observer);
    }

    public sale(discount: number) {
        this.subscribers.forEach(observer =>
            observer.notify(this.name, discount));
    }
}

const alex = new Shopper('Alex');
const ben = new Shopper('Ben');

const coffeeShop = new Shop('coffee shop');
coffeeShop.subscribe(alex);
coffeeShop.subscribe(ben);

coffeeShop.sale(20);
