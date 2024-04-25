const arr = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

function sortByTypeThenValue(arr) {
    const str = arr.filter(item => typeof item === 'string').sort();
    const numbers = arr.filter(item => typeof item === 'number').sort((a, b) => a - b);
    return [...str, ...numbers];
}

const sortedArr = sortByTypeThenValue(arr);
console.log(sortedArr); 