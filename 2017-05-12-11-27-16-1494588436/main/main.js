let line1 = ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.']
let line2 = ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|']
let line3 = ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|']

function getLine(numbers, line) {
    let result = [];
    numbers.forEach((num) => {
        result.push(line[parseInt(num)]);
    });
    return result.join(' ').concat('\n');
}

function getLines(numbers) {
    return getLine(numbers, line1) + getLine(numbers, line2) + getLine(numbers, line3);
}

module.exports = function main(num) {
    let numbers = num.split('');
    let result = getLines(numbers);
    return result;

};