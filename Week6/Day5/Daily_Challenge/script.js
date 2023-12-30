// Daily Challenge: Anagram

// Instructions
// Create a function that:
// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help
function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Convert strings to arrays of characters and sort them
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage:
  const result = areAnagrams("Astronomer", "Moon starer");
  const result1 = areAnagrams("School master", "The classroom");
  const result2 = areAnagrams("The Morse Code", "Here come dots");

  console.log(result);
  console.log(result1);
  console.log(result2);
  
// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

// Do we need to consider whitespace?
// Trim whitespace prior to comparison.