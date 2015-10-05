'use strict';

var prompt = require('prompt');
prompt.start();

var findIndexOfFirstVowel = function (word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var leastVowelIndex = word.length;

  for (var i = 0; i < vowels.length; i++) {
    // assume word is "dictionary"
    var vowel = vowels[i]; // The vowel
    var vi = word.indexOf(vowel); // Index of the vowel

    // Is vowel in word?
    if (vi > -1) {
      // ... Yes
      // is vowel before the (currently known) earliest vowel in the word
      if (vi < leastVowelIndex) {
        // ... Yes, remember it
        leastVowelIndex = vi;
      }
    }

  }

  return leastVowelIndex;
}

prompt.get(['name'], function(error, result ) {
  console.log('Hello, '+ result['name'] + '!');

  var word = result['name']; // 'create';

  // Find the index of the first vowel
  var vowelIndex = findIndexOfFirstVowel(word);

  var firstPart = word.slice(0, vowelIndex);
  var restWord = word.slice(vowelIndex, word.length);
  var pigLatinizedWord = restWord + firstPart + 'ay';

  console.log(pigLatinizedWord);
});

  // lamp
  //var word = "lamp";
  // var vowelIndex = word.indexOf('a');
  // 1
  //
  // if ((word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex) || (word.indexOf('e') === -1) ) {
  //   // If we've gotten this far... it means:
  //   // 1. 'e' is in the word AND 'e' comes before vowelIndex (which is either -1 or position of 'a')
  //   // OR 2. 'e' is NOT in the word
  //   vowelIndex = word.indexOf('e');
  // }
  //
  // if ((word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex) || (word.indexOf('i') === -1) ) {
  //   vowelIndex = word.indexOf('i');
  // }
  //
  // if ((word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex) || (word.indexOf('o') === -1) ) {
  //   vowelIndex = word.indexOf('o');
  // }
  //
  // if ((word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex) || (word.indexOf('u') === -1) ) {
  //   vowelIndex = word.indexOf('u');
  // }
