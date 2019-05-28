/**
 * Object Structural: Adapter
 * 
 * Intent: Covert the interface of a class into another client expect.
 * Adapter lets classes work together that couldn't otherwise because
 * of incompatible interface.
 */

import * as fs from 'fs';

export interface ILocalStore {
    setItem(key: string, value: string): void;
    getItem(key: string): string;
}

// Adapter for backend
export class LocalStorage implements ILocalStore {
    public item: any;

    constructor() {
        if (fs.existsSync('localStorage.json')) {
            this.item = fs.readFileSync('localStorage.json');
        }
    }

    setItem(key: string, value: string): void {
        this.item = JSON.stringify({ [key]: value });
        fs.writeFile('localStorage.json', this.item, error => {
            if (error) {
                console.log(error);
            }
        })
    }

    getItem(key: string): string {
        return JSON.parse(this.item)[key];
    }


}

export class LocalStorageAdapter {
    public getLs(): ILocalStore {
        if (typeof window !== typeof undefined) {
            return (localStorage as any);
        }

        return new LocalStorage();
    }
}

const ls = new LocalStorageAdapter().getLs();
ls.setItem('name', 'Vladimir');
console.log(ls.getItem('name'));
