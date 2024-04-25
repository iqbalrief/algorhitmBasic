function countAndSortLetters(input) {
    
    const cleanedInput = input.replace(/\s/g, '').toLowerCase();
    const letterCount = cleanedInput.split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    
    const letterArray = Object.entries(letterCount);
    letterArray.sort((a, b) => {
       
        const aIsUpper = a[0] === a[0].toUpperCase();
        const bIsUpper = b[0] === b[0].toUpperCase();

     
        if (aIsUpper === bIsUpper) {
            return a[0].localeCompare(b[0]);
        } else {
         
            return aIsUpper ? -1 : 1;
        }
    });

    const result = letterArray.reduce((acc, [letter, count]) => {
        acc[letter] = count;
        return acc;
    }, {});

    return result;
}


console.log(countAndSortLetters("Hello World")); 
console.log(countAndSortLetters("Bismillah"));
console.log(countAndSortLetters("MasyaAllah"));