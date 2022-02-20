//  let and const 
const hubby = 'omor sani';

let phone = 'iPhone 15';
phone = 'samsung galaxy s16';

// default parameter 
// spread of three dots
function maxNumber(array = []) {
    const max = Math.max(...array)
    return max
}
const biggest = maxNumber()
console.log(biggest)

// template string
const myNotes = `i am mojnu ${hubby}. i  have a ${phone}`
// console.log(myNotes);

// arrow function 
// function square(x) {
//     return x * x;
// }
const square = x => x * 2;
console.log(square(8))


