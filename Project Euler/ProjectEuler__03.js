

  function projectEuler03 (num) {
    var factors = [];
    var divider = 2;

    while(num > 1) {
      while((num % divider) === 0) {
        factors.push(divider);
        num /= divider;
      }
      divider += 1;
    }
  }
  projectEuler03(17);
