function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
        let x = [...arr[i]];
        x[0] = x[0].toUpperCase();
        arr[i] = x.join("");
    }
    return arr.join(" ");
}