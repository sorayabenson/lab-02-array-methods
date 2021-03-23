const map = (array, callback) => {
    let newArray = [];
    for(let ar of array) newArray = [...newArray, callback(ar)];
    
    return newArray;
};

const filter = (array, callback) => {
    let newArray = [];
    for(let ar of array) {
        if(callback(ar)) newArray = [...newArray, ar];
    }
    return newArray;
};

const findIndex = (array, callback) => {
    for(let i = 0; i < array.length; i++) {
        if (callback(array[i])) return i;
    }
};

const reduce = () => {

}

module.exports = {
    map,
    filter,
    findIndex,
    reduce
};
