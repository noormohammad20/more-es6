/* ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো। */

/* const myName = 'Noor Mohammad'
let name = 'jafor'
name = 'korim'
console.log(name) */

/* ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।  */

/* const myFullName = `my name is ${myName}`
console.log(myFullName)

const mobile = {
    name: 'sony',
    price: 1800,
    color: 'black',
}

const myMobile = `My mobile name is ${mobile.name}, and price is ${mobile.price},and mobile color is ${mobile.color}`
console.log(myMobile) */

/* ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।  */

/* const diffByFive = x => x / 5
console.log(diffByFive(30)) */

/* ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  */

/* const sum = (y, z) => {
    let first = y + 2
    let second = z + 2
    let multiply = first * second
    return multiply
}
console.log(sum(5, 4)) */

/* ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  */

/* const multiplyThreeNumber = (x, y, z) => x * y * z
const result = multiplyThreeNumber(2, 3, 4)
console.log(result) */

/* ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 
 */

// done

/* ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */

// const arr1 = [2, 4, 6, 7, 4, 33, 7, 33, 77, 56, 75, 37, 84, 84, 85, 85, 35, 35, 64, 1]

// const arr2 = arr1.map(arr => arr * 5)
// console.log(arr2)

/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */

// const arr2 = arr1.filter(arr => arr % 2 != 0)
// console.log(arr2)

/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */

// const mobiles = [
//     { name: 'sony', color: 'blue', price: 10000 },
//     { name: 'vivo', color: 'purple', price: 30000 },
//     { name: 'maximas', color: 'blue', price: 5000 },
//     { name: 'xiomi', color: 'red', price: 20000 }
// ]
// const price = mobiles.find(mobile => mobile.price == 5000)
// console.log(price)

/* ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।  */

/* map method tar vitore ekta function likhte hoy abong eta array er jonno likhte hoy.eta tin ta kaj kore.array er prottek ta element er upore loop kore.ebong sei element gulor upor se kono ekta kaj kore seta ke notun ekta array er modde return kore 

foreach onek ta map er moto tobe partokko holo foreach kono kichu return kore na. 

filter o  ekta method.filter er maddome array othoba Object er modde ekta sorto deoa hoy.sei sorto joto gulo element puron korbe.sob gulo element ke ekte array er maddome return korbe.

r find mathod o filter er moto.tobe find sudu marto sorto ta first jei element er majhe pabe setake return korbe */

/* ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */

/* const myMobile = {
    name: 'poco',
    price: 22000,
    color: 'blue'
}
const { color } = myMobile
console.log(color)
 */

/* ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।  */
/* 
const arr1 = [2, 4, 6, 7, 4, 33, 7, 33, 77]

const [, , three] = arr1
console.log(three) */

/* ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
 */

/* function sum(first, second, third = 7) {
    return first + second + third
}
console.log(sum(2, 5)) */

/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */

const myMobile = {
    name: 'poco', color: 'blue', price: 22000,
    sim: {
        sim1: 'telitalk', sim2: 'skitto',
        mobileNumber: [0, 1, 7, 1, 9, 5, 5, 5, 1],
        simvalue: { firstSimValue: 120, secSimValue: 220 }
    }
}
// console.log(myMobile)

/* ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।  */

// console.log(myMobile?.hardDisk?.simvalue)