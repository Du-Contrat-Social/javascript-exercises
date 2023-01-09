const removeFromArray = function(arr) {

    let args = Array.from(arguments).slice(1);

    for (let i = 0; i < args.length; i++) {
      while (arr.includes(args[i])) {
        arr.splice(arr.indexOf(args[i]), 1);
      }
    }

    return arr;

};

module.exports = removeFromArray;

