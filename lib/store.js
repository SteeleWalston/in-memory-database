const uniqid = require('uniqid');

module.exports = class Store {
    constructor() {
        this.list = [];
    }

    save(newPerson) {
        newPerson._id = uniqid();
        this.list.push(newPerson);
        return newPerson;
    }

    get(newPerson) {
        function ifExists(person) {
            return person._id === newPerson;
        }
        const person = this.list.find(ifExists);

        if(person) {
            return person;
        } else {
            return null;
        }
    }

    getAll() {
        return this.list.slice();
    }

    remove(id) {
        function ifExists(person) {
            return person._id === id;
        }
        const index = this.list.indexOf(this.list.find(ifExists));
        if(index !== -1) {
            this.list.splice(index, 1);
            return { removed: true };
        } else {
            return { removed: false };
        }
    }
};