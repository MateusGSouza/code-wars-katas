function add(...args) {

    if (args.length == 0) {
        return 0
    }

    const divided = args.map((num, index) => {
        let divider = index + 1;
        return num / divider
    });

    const sum = divided.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
        );
    
    return Math.round(sum);
}

module.exports = add;