function average(arr) {
    const summa = [...arr].reduce((a,b) => a + b)
    // const average = sum5 / arr.length
    return summa / arr.length
}

module.exports = average;