function removeWithoutSame(array, item) {
    return array.filter((elem) => {
        return elem !== item;
    })
}

module.exports = removeWithoutSame;