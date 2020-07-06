module.exports.InternationalMorseCodeTable = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
}
Array.prototype.clean = function () {
    var args = [].slice.call(arguments);
    return this.filter(item => args.indexOf(item) === -1);
};


module.exports.textToMorse = function (text) {
    text = text.toLowerCase().split("").clean(" ") 
    let b = ""

    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].replace(text[i], this.InternationalMorseCodeTable[text[i]] + " ")
        b += text[i]
    }
    return b
}