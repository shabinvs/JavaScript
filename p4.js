
let products = [
    {pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led'},
    {pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led'},
    {pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led'},
    {pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd'},
    {pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd'}
];

products.forEach((items)=>{
    console.log(items.pName);
})
console.log("\n");

let lcd = products.filter((items)=>{
    return (items.display=='lcd');
})

console.log(lcd);
console.log("\n");

let band = products.filter((items)=>{
    return (items.band=='5g');
})

console.log(band);
console.log("\n");

let price = products.filter((items)=>{
    return (items.price<50000);
})

console.log(price);
console.log("\n");

// Find and display the product with the highest price.
let maxPrice = products.reduce((max, items)=>{
    return (max.price > items.price) ? max : items;
})

console.log(maxPrice);
console.log("\n");


let lowest = products.reduce((max, items)=>{
    return (max.price < items.price) ? max : items;
})

console.log(lowest);
console.log("\n");