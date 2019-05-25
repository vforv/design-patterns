/**
 * Object Creational: Factory Method
 * 
 * Intent: Define an interface for creating an object, but let subclasses
 * decide which class to instantiate.
 * Factory Method lets a class defer instantiation to subclasses.
 */

export class MySQL {
    public getInstance() {
        return 'mysql instance';
    }
}

export class MongoDb {
    public getInstance() {
        return 'mongodb instance';
    }
}

export const DBFactory = (db: string) => {
    if (db === 'mysql') {
        return new MySQL();
    } else if (db === 'mongodb') {
        return new MongoDb();
    } else {
        return new MongoDb();
    }
};

const dbInstance = DBFactory('mysql');
console.log(dbInstance.getInstance());
const dbInstance1 = DBFactory('mongodb');
console.log(dbInstance1.getInstance());