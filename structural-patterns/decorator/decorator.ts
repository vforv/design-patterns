/**
 * Object Structural: Decorator
 * 
 * Intent: Attach additional responsibilities to an object
 * dinamically. Decorators provide a flexible alternative
 * to subclassing for extending functionality.
 * Decorators dosn't need to have same interfaces.
 * Ex. FoodItemIngredients can have diffirent interfaces then FoodItemTopics
 */

export class FoodItem {
    constructor(public name: string, public price: number) { }
}

export class FoodItemTopics {
    public topics: string[];

    constructor(private name: string, public price: number, public item: any) {
        if(!this.item.topics) {
            this.topics = [name];
        } else {
            this.topics = [...this.item.topics, name];
        }
        this.price = this.price + this.item.price;
    }
}

const cake = new FoodItem('Cake', 3);
const cakeWithCream = new FoodItemTopics('Cream', 0.5, cake);
const cakeWithCreamAndVanila = new FoodItemTopics('Vanila', 1, cakeWithCream);

console.log(cakeWithCreamAndVanila.price);
console.log(cakeWithCreamAndVanila);
