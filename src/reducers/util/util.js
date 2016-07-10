function increment(num) {
    return num + 1;
}

function decrement(num) {
    return num - 1;
}
const incrementByIndex = (list, index) => {
    return [
        ...list.slice(0, index),
        increment(list[index]),
        ...list.slice(index + 1)
    ]
};

const decrementByIndex = (list, index) => {
    return [
        ...list.slice(0, index),
        decrement(list[index]),
        ...list.slice(index + 1)
    ]
};

const removeByIndex = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
};


export {
    increment,
    decrement,
    incrementByIndex,
    decrementByIndex,
    removeByIndex
}
