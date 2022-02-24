function unrepeated_char(str) {
    var spliting = str.split('');
    for (let i = 0; i < str.length; i++) {
        var count = 0;
        for (let j = 0; j < str.length; j++) {
            if (spliting[j] == spliting[i]) {
                count++;
            }
        }
        if (count < 2) {
            var unrepeated = spliting[i];
        }
    }
    return unrepeated;
}
console.log(unrepeated_char("abacddbec"));