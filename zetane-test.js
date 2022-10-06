const translate = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let word = str.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        let currLetter = word[i];

        if (vowels.indexOf(currLetter) !== -1) {
            if (i === 0) {
                return word + "ay";
            } else {
                return word.slice(i) + word.slice(0, i) + "ay";
            }
        }
    }

    return "This word contains no vowels, so I'm not sure how to properly translate it to pig latin, orrysay";
};
