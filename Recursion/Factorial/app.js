function computeFactorial (num) {
    var result = 1;
    if (num === 1) {
      return result;
    }

    for (var i = 2; i <= num; i++) {
      result *= i;
    }

    return result;
}


function computeFactorialRecursively (num) {

    if (num === 1) {
      return 1;
    } else {
      return num * computeFactorialRecursively(num-1);
    }
    
}
