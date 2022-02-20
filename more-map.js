const friends = ['tom hanks', 'tom cruise', 'tom brady', 'tom solaiman']

const fLengths = friends.map(friend => friend.length)
// console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 1500, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'water glass', price: 3, color: 'white' }
]
const productNames = products.map(product => product.name)
const prices = products.map(product => product.price)
// products.map(product => console.log(product))
products.forEach(product => console.log(product))
// console.log(prices)

