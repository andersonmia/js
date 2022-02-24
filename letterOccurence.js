function wordSplinter(string) {
    string = string.toLowerCase()
   
    let foundLetters = []
    for (const i in string) {
        if (string[i] === " ")
            continue
        const letter_found = foundLetters.filter(el => el.letter === string[i])
        if (letter_found.length) {
           
            foundLetters.forEach(el => {
                if (el.letter === string[i])
                    el.recurenceTimes += 1
            });
        } else {
            foundLetters.push({
                letter: string[i],
                recurenceTimes: 1
            })
        }
    }
    console.log(foundLetters)
}

wordSplinter('The meeting is done');