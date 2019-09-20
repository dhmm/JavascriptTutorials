function largestNums(arr) {
    let largests = [];
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        largests.push(max);
    }
    return largests;
}
