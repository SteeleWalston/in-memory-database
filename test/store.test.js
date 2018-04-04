const assert = require('assert');
const Store = require('../lib/store');

describe('Store', () => {
    let person; 
    beforeEach(() => {
        person = new Store();
    });
    const newPerson = { name: 'Me', age: 27 };
    const newPerson2 = { name: 'You', age: 28 };

    it('saves new person and adds id', () => {
        const results = person.save(newPerson);
        assert.deepEqual(results, { name: 'Me', age: 27, _id: results._id });
    });
    
    it('saves another new person and adds id', () => {
        const results = person.save(newPerson2);
        assert.deepEqual(results, { name: 'You', age: 28, _id: results._id });
    });

    it('gets new person based on id if exists', () => {
        const person1 = person.save(newPerson);

        assert.deepEqual(person.get(person1._id), { name: 'Me', age: 27, _id: person1._id });
    }),

    it('returns null if no id exists', () => {
        assert.deepEqual(person.get(12354), null);
    }),

    it('gets all persons if exists', () => {
        const person1 = person.save(newPerson);
        const person2 = person.save(newPerson2);

        assert.deepEqual(person.getAll(), [{ name: 'Me', age: 27, _id: person1._id }, { name: 'You', age: 28, _id: person2._id }]);
    }),

    it('returns empty array if no persons exist', () => {
        assert.deepEqual(person.getAll(), []);
    }),

    it('removes id if id exists', () => {
        const person1 = person.save(newPerson);
        assert.deepEqual(person.remove(person1._id), { removed: true });
    }),
    it('returns false if id does not exist', () => {
        assert.deepEqual(person.remove(1234), { removed: false });
    });
});