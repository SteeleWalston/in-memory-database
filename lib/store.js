const uniqid = require('uniqid');

module.exports = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }

    save(newPerson) {
        newPerson.id = uniqid();
        return newPerson;
    }
};