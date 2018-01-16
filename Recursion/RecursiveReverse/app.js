function recursiveReverse (defaultArray) {
  var reversedArray = [];

  function reverseArray (defaultArray) {

      if (defaultArray.length === 0) {
        return;
      }

      reversedArray.push(defaultArray.pop());
      reverseArray (defaultArray);
  }

  reverseArray (defaultArray);

  return reversedArray;
}
