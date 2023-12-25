// Daily Challenge: Not Bad
console.log('Daily Challenge Not Bad:')
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.
let sentence = 'The movie is not that bad, I like it';
console.log(sentence);
// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
console.log('The index of "not" is:')
let wordNot = sentence.indexOf('not');
console.log(wordNot);
console.log('\n')

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
console.log('The index of "bad" is:')
let wordBad = sentence.indexOf('bad');
console.log(wordBad)
console.log('\n')

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.

if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
    // Replace "not...bad" with "good"
    let beforeNot = sentence.substring(0, wordNot);
    let afterBad = sentence.substring(wordBad + 3);
    sentence = beforeNot + "good" + afterBad;
    console.log('Modified sentence:');
    console.log(sentence);
} else {
    // If "bad" does not come after "not" or either word is not in the sentence
    console.log('No modification needed:');
    console.log(sentence);
}
console.log('\n')

// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.


// node DailyChallengeNotBad.js