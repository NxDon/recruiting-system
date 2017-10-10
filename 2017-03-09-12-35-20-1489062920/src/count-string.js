function getCount(collection) {
    let result = {};
    collection.forEach((elem) => {
        if (result[elem]) {
            result[elem]++;
        } else {
            result[elem] = 1
        }
    })
    return result;
}

function getResultArray(counterObj) {
    let result = [];
    Object.keys(counterObj).forEach((key) => {
        result.push(key+'-'+counterObj[key])
    })
    return result;
}

function countString(collection) {
    let counterObj = getCount(collection);
    let result = getResultArray(counterObj);
    return result;
}

module.exports = countString;