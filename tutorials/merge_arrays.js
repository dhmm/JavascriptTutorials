function mergeArrays(arr1, arr2, n) {    
    let nArr = arr2.slice(0 , n);
    nArr.push(...arr1);
    nArr.push( ...(arr2.slice(n)));
    return nArr;    
}
  
console.log(mergeArrays([1, 2, 3], [4, 5, 6], 1));