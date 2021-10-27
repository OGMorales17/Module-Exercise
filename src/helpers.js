const choice = items => {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

const remove = (item, items) => {
    return items.filter(i => i !== item)
}




export { choice, remove }