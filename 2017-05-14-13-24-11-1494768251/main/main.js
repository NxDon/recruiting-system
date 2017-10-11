module.exports = function main(email, suffixes) {
    let tail = email.split('@')[1];
    return tail === suffixes[0];
};
