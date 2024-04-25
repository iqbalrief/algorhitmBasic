function pattern_count(text, pattern) {
    if (pattern.length === 0) {
        return 0;
    }

    let count = 0;
    let currentIndex = 0;

    while (currentIndex !== -1) {
        currentIndex = findPatternIndex(text, pattern, currentIndex);
        if (currentIndex !== -1) {
            count++;
            currentIndex++;
        }
    }

    return count;
}

function findPatternIndex(text, pattern, startIndex) {
    for (let i = startIndex; i < text.length - pattern.length + 1; i++) {
        let match = true;
        for (let j = 0; j < pattern.length; j++) {
            if (text[i + j] !== pattern[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }
    return -1;
}

console.log(pattern_count("palindrom", "ind")); 
console.log(pattern_count("abakadabra", "ab")); 
console.log(pattern_count("hello", ""));
console.log(pattern_count("aaaaaa", "aa"));
console.log(pattern_count("hell", "hello"));
