const faker = window.faker = require('faker');
const gen = (function () {

    const cache = {}
    return function (len) {
        if (cache[len]) {
            // return cache[len]
        }

        var arr = [];
        for (var i = 0; i < len; i++) {
            arr.push({
                index: i + 1,
                grade: Math.round(Math.random() * 10),
                email: faker.internet.email(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                birthDate: faker.date.past(),
                country: faker.address.country(),
                city: faker.address.city()
            })
        }

        cache[len] = arr;
        return arr
    }
})();

const LEN = 2000;
const data = gen(LEN);

const columns = [
    { name: 'index', title: '#', width: 150 },
    { name: 'firstName' },
    { name: 'country' },
    { name: 'grade' }
];

export {
    data,
    columns
};
