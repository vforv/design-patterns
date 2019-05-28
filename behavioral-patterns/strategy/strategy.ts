/**
 * Object Behavioral: Strategy
 *
 * Intent: Define a family of algorithms, encapsulate each one,
 * and make them interchangeable. Strategy lets the algorithm vary
 * independently from clients that use it.
 */

import * as fs from 'fs';

export class LogStrategy {
    static toConsole(message: string) {
        console.log(message);
    }

    static toFile(message: string) {
        fs.appendFile('logs', message, (error) => {
            if (error) {
                console.log(error);
            }
        })
    }
}

export class Logger {
    public strategy: any;

    constructor() {
        this.strategy = LogStrategy.toConsole;
    }

    public changeStrategy(strategyName: string) {
        this.strategy = (LogStrategy as any)[strategyName];
    }

    public printLog(message: string) {
        this.strategy(message);
    }
}

const logger = new Logger();

logger.printLog('log1');
logger.changeStrategy('toFile');
logger.printLog('log2');
