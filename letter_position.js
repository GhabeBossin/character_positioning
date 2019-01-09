// Loop through args input (str) [.length] number of times. Each time a new character appears, create an object key+val pair that states what the character is then assign it to a key, and what position of the index it is at and assigns it to the value. Each successive time it encounters that character, [.push()]'s it's current index to the array.



//get node input
args = process.argv.slice(2);
function countLetters(str) {
  //remove spaces
  var getLetters = str.join("");
  //init object to populate
  var objOutput = {};

  //init for loop to generate key+val pairs
  for (var i = 0; i < getLetters.length; i++) {
    //temp variable to store current letter
    var currentLetter = getLetters[i];
    //seperate conditions, "if not a key make one, if already a key then add index position"
    if (objOutput[currentLetter]) {
      //for adding values paired to pre-existing keys
      objOutput[currentLetter].push(i);
    } else {
      //generate new key+pair
      objOutput[currentLetter] = [i];
    }
  }

  return objOutput;
}
//print object (and contained key+val pairs)
console.log(countLetters(args));

//worked on with floydianslips