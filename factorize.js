const factorisation = (number) => {
    var factors = [];
    for (let i = number; i > 0; i--) {
        if (number % i == 0) {
            factors.push(i);
        }
    }
    console.log(factors);
}
factorisation(256);