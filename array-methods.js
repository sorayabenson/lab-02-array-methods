const map = (array, callback) => {
    // return array.map(ar => callback(ar));
    let newArray = [];
    for(let ar of array) {
       newArray = [...newArray, callback(ar)];
    }
    return newArray;
};

const filter = (array, callback) => {
    return array.filter(ar => callback(ar));
};

const findIndex = (array, callback) => {
    return array.findIndex(ar => callback(ar));
};

module.exports = {
    map,
    filter,
    findIndex
};
