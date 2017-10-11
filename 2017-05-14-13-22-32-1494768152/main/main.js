module.exports = function main(str) {
    var numbers = str.split('');
    return numbers.reduce((a,b) => {
        return parseInt(a)+ parseInt(b);
    },0)
};
