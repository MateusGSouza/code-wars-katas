function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let num = Math.sqrt(sq);
    let isFloat = Math.floor(num) == num;

    if (!isFloat) {
        return -1
    } else {
        let nextSquare = num++
        nextSquare = num * num
        return nextSquare
    }
  }

module.exports = findNextSquare;