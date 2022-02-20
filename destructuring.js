const fish = { id: 58, name: 'king hilsha', price: 9000, phone: '87845807894', address: 'chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;
console.log(phone, price, dress, id)

const company = {
    name: 'grameenphone',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',

        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
}
// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { first, third } = company.web.tech;

console.log(work, framework, food, first, third)
