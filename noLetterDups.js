const string_extractor = (str) => {
    var splitter = str.split('');
    var seenLetters = [];
    var finalString = '';
    for (let i = 0; i < str.length; i++) {
        if (!seenLetters.includes(splitter[i])) {
            finalString += splitter[i];
        }
        seenLetters.push(splitter[i]);
    }
    console.log(finalString);
}
string_extractor("thequickfoxjumpsoverthelazydog");