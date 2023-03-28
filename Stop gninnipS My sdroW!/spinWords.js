const spinWords = function spinWords(string) {
    //TODO Have fun :)
    const words = string.split(" ")

    let result = words.map((word) => {
        const stringLength = word.length

        // Will only reverse words with 5 or more letters
        if (stringLength < 5) {
            return word
        }

        let stringReversed = [];
        let count = 0;

        // This iterates over the word starting from the last character and creates an array in the reverse order of the word
        for (let index = stringLength; index > -1; index--) {
            stringReversed[count] = word.split("")[index]
            count++
        }

        // Join the stringReversed from an array into a proper string, removing commas
        stringReversed = stringReversed.join().replaceAll(",", "")
        return stringReversed
    })

    return result.join(" ")
}

module.exports = spinWords;