(function() {
  var x = 999,
      y = 999,
      largest = 0,
      palindrome = [];

        while (x > 0) {
          while (y > 0) {
            var pali = isPalindrome(x * y + " ");
            if (pali)
              palindrome.push(x * y);
            y -= 1;
          }
          x -= 1;
          y = 99;
        }

        function isPalindrome(num) {
          for (var j = 0; j < num.length; j++){
            var first, last;
            first = num.charAt(num);
            last = num.charAt(num.length - 1 - num);
            if (first !== last)
              return false;
          }
          return true;
        }

        palindrome.sort(function(palindrome,sorted) {
          return palindrome-sorted;
        });
        console.log(palindrome[palindrome.length - 1]);
})();
