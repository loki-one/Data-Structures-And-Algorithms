function recursiveMultiplier (defaultArray, num) {
  var resultArray = [];

  function multiplyEachElement (defaultArray, num) {
    if (defaultArray.length > 0) {
      var last = defaultArray.pop();
      multiplyEachElement(defaultArray, num);
      resultArray.push(last * num);
    }
    return;
  }

  multiplyEachElement(defaultArray, num)

  return resultArray;

}
