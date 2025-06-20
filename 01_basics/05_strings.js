/**
 * String Handbook
 *
 * String: A sequence of characters used to represent text in JavaScript.
 *
 * - length: Returns the number of characters in a string.
 * - indexOf(): Returns the index of the first occurrence of a specified value in a string, or -1 if not found.
 * - lastIndexOf(): Returns the index of the last occurrence of a specified value in a string, or -1 if not found.
 * - slice(): Extracts a section of a string and returns it as a new string, without modifying the original string.
 * - substring(): Returns a subset of a string between two indices, or from a start index to the end of the string.
 * - replace(): Returns a new string with some or all matches of a pattern replaced by a replacement.
 * - split(): Splits a string into an array of substrings using a specified separator.
 * - trim(): Removes whitespace from both ends of a string.
 * - toUpperCase(): Returns the calling string value converted to uppercase.
 * - toLowerCase(): Returns the calling string value converted to lowercase.
 */



// String Handbook 

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(), split(), trim(), toUpperCase(), toLowerCase(), etc.

// length: -Returns the number of characters in a string.

function getLength(str){
  console.log("Orginal String: ", str);
  console.log("Length: ", str.length);
}

getLength("Hello World");

// indexOf(): Returns the index of the first occurrence of a specified value in a string, or -1 if not found.

function findIndexOf(str, target){
  console.log("Orginal String: ", str);
  console.log("Index: ", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf(): Returns the index of the last occurrence of a specified value in a string, or -1 if not found.
function findLastIndexOf(str, target){
  console.log("Original String", str);
  console.log("Last Index Of: ", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice()
function getSlice(str, start, end){
  console.log("Original String: ",str);
  console.log("Slice: ",str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// Substring
function getSubstring(str, start, end){
  console.log("Original String: ",str);
  console.log("After Substring : ",str.substring(start, end));
}
getSubstring("Hello World", 6);

// replace()

function replaceString(str, target, replacement){
  console.log("Original String: ", str);
  console.log("After Replace: ", str.replace(target, replacement)); 
}
replaceString('Hello World', 'World', "Javascript")

// split

function splitString(str, separator){
  console.log("Original String: ", str);
  console.log("After split: ", str.split(separator)); 
}
splitString('Hello World'," ");

// trim
function trimString(str){
  console.log("Original String: ", str);
  console.log("After trim: ", str.trim()); 
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str){
  console.log("Original String: ", str);
  console.log("After toUpper: ", str.toUpperCase()); 
}
toUpper("rachit");

