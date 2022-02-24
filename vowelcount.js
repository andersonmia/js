function vowel_counter(str) {
    var vowels = ["a","e","i","o","u","A","E","I","O","U"];
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] == vowels[j]) {
                count++;
            }
        }
    }
    console.log(`the ${str} has ${count} vowels`);
}
vowel_counter("Dushime Bill Benon, man from Kiruhura district");