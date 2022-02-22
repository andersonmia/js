function alphabeticalSort(word) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let arrangedWord = ''
    for (i = 0; i < letters.length; i++) {
        for (j = 0; j < word.length; j++) {
            if (letters[i] == word[j]) {
                arrangedWord += word[j]
            }
        }
    }
    console.log(arrangedWord)
}
alphabeticalSort('woman');
alphabeticalSort('Relatively');