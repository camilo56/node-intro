let number = 0;

module.exports ={
    sumOne: () => number++,
    sumOther: (num = 1) => num + number,
}
