function sort(arr) {
    return [...arr].sort((a,b) => a - b).join(',')
}

module.exports = sort;