//declare variable base on the name of an object property
const myObject = { x: 35, y: 68, z: 64, a: 111, b: 555, c: 550 };

const { x, b } = myObject

// console.log(x, b)

// destructuring array 
const [p, q] = [34, 67]
// console.log(p, q)

const [best, faltu] = ['momotaj', 'porshi']
console.log(best, faltu)

const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 }

// chaining 

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
console.log(company?.web?.tech?.third)
console.log(company?.backend?.tech.first)