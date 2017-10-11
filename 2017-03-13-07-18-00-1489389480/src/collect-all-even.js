function collectAllEven(collection) {
    return collection.filter((elem) => {
        return elem % 2 == 0;
    })
}

module.exports = collectAllEven;