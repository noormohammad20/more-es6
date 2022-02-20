const numbers = [2, 4, 54, 74, 7, 88, 54, 5, 5, 67, 4, 78, 3, 6,]

const bigNumbers = numbers.filter(number => number > 20)
const smallNumbers = numbers.filter(number => number < 10)
// console.log(smallNumbers)
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 1500, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'water glass', price: 3, color: 'white' }
]
const expensive = products.filter(product => product.price > 100)
const black = products.filter(product => product.color == 'black')
// console.log(black)

const whiteItem = products.find(product => product.color == 'white')
console.log(whiteItem)