const sumAll = function(firstInteger, secondInteger) {

    if (!Number.isInteger(firstInteger) || !Number.isInteger(secondInteger)) {
        return 'ERROR'
    }

    let min = Math.min(firstInteger, secondInteger);
    let max = Math.max(firstInteger, secondInteger);

    let sum = 0;

    if (min < 0) {
        return 'ERROR'
    } 
    
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;

};


// const sumAll = function(min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0 || max < 0) return "ERROR";
//     if (min > max) {
//       const temp = min;
//       min = max;
//       max = temp;
//     }
//     let sum = 0;
//     for (let i = min; i < max + 1; i++) {
//       sum += i;
//     }
//     return sum;
//   };

// Do not edit below this line
module.exports = sumAll;
