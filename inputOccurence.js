function letterOccurrence(str, letter) {
    var counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]==letter) {
            counter++;
        }
    }
    return `The letter ${letter} occurs in ${counter} times`;
}
console.log(letterOccurrence("rwanda coding academy",'a'));