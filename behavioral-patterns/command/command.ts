/**
 * Object Behavioral: Command
 *
 * Intent: Encapsulate a request as an object, thereby letting you
 * parameterize with diffirent requests, queue or log requests, and support
 * undoable operations.
 */

export class CreateCommand {
    constructor(public firstName: string, public lastName: string) { }

    get name() {
        return `Adding ${this.firstName}`;
    }

    public execute() {
        console.log(`Created ${this.firstName} ${this.lastName} account.`)
    }
}


export class Conductor {
    public history: any[];

    constructor() {
        this.history = [];
    }

    public run(command: any) {
        this.history.push(command);
        return command.execute();
    }

    public logHistory() {
        this.history.forEach(command => console.log(command.name));
    }
}

const conductor = new Conductor();

conductor.run(new CreateCommand('Vladimir', 'Djukic'));
conductor.logHistory();
