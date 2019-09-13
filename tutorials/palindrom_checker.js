function palindrome(str) {    
    let replacedStr = str.toLowerCase().replace(/[^a-z0-9]/gi,'');     
    return replacedStr == ( [...replacedStr] .reverse().join("") );  
}