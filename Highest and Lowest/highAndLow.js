function highAndLow(numbers){
    // ...
    let numbersArray = numbers.split(" ")

    numbersArray = numbersArray.map((num) => parseInt(num))

    return `${Math.max(...numbersArray)} ${Math.min(...numbersArray)}`
  }

module.exports = highAndLow;