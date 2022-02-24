const exponential = (b, n) => {
    var exponent = 1;
    for (let i = 0; i < n; i++) {
        exponent *= b;
    }
    console.log(exponent);
}
exponential(4, 3);