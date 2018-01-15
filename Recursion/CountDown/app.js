function countDownTill (num) {

    while (num >= 0) {

      if (num === 0) {
        console.log(num);
        return 'Bye';
      }
      console.log(num);
      num = num - 1;
    }

}


function countDownRecursivelyTill (num) {

    if (num === 0) {
      console.log(num);
      return 'Bye';
    }

    console.log(num);
    num = num - 1;
    return countDownRecursivelyTill(num);

}
