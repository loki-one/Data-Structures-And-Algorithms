function calculateExponent (base, expo) {
    var result = 1;
    var num = 1;
    while (num <= expo) {
       if (expo === 0) {
         return result;
       } else if (expo === 1) {
         return base;
       } else {
         result = result * base;
         num = num + 1;
       }
    }
    return result;
}


function calculateExponentRecursively (base, expo) {
    if (expo === 0) {
      return 1;
    }

    if (expo === 1) {
      return base;
    }

    expo = expo - 1;
    return base * calculateExponentRecursively(base, expo);
}
