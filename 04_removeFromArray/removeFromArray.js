const removeFromArray = function(array, ...index) {

    const newArray = []

    array.forEach((elements) => {
        if(!index.includes(elements)) {
            newArray.push(elements)
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
