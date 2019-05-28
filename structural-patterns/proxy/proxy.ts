/**
 * Object Structural: Proxy
 * 
 * Intent: Provide a surrogate or placeholder for another object to control access to it.
 * Ex. data validation, security, cash data and even log actions
 * Must provide same interface as adapter pattern
 */

import * as fs from 'fs';
import * as pathLib from 'path';

// Proxy for file system
export class FSProxy {
    constructor(public fs: any) { }

    public readFile(path: string, format: string, callback: any) {
        if (path !== 'readme') {
            return callback(new Error('Only can read readme file.'));
        }

        const fullPath = pathLib.join(__dirname, path);

        this.fs.readFile(fullPath, format, (error: any, contents: any) => {
            if (!error) {
                return callback(null, contents);
            }

            console.log(error);
            return callback(error);
        });
    }
}

const fsProxy = new FSProxy(fs);

// Proxy will read only files with name readme
const fileName = 'readme';
fsProxy.readFile(fileName, 'UTF-8', (error: any, contents: any) => {
    if (error) {
        console.log('error', error);
        process.exit(0);
    }
    console.log(contents);
});
