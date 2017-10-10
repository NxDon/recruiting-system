function numberMapToWord(collection) {
    let alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = [];

    function mapWord(num)  {
        let aRepeatTimes = num / 26;
        let tail = num % 26;
        return '' + 'a'.repeat(aRepeatTimes) + alphabet[tail];
    }

    collection.forEach((num) => {
        result.push(mapWord(num));
    });
    return result;
}


module.exports = numberMapToWord;