const assert = require('assert');
const Person = require('../lib/store');

describe('Store', () => {
    let person; 
    beforeEach(() => {
        person = new Person();
    });

    it('saves new person', () => {
        const newPerson = { name: 'Me', age: 27 };
        assert.deepEqual(person.save(newPerson), { name: 'Me', age: 27, id: newPerson.id });
    });
});