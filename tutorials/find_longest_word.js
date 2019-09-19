function findLongestWordLength(str) {
    let words = str.match(/(\w+)/g);
    let max = 0;
    for (let word in words) {
        if (words[word].length > max) {
            max = words[word].length;
        }
    }
    return max;
}