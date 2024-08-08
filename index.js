// Console log a welcome message with instructions to mad libs
let message=""


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words

let adjective = prompt("Give me an adjective")
let pluralnoun = prompt("Give me a plural noun")
let verb = prompt("Give me a verb")
let adjective2 = prompt("Give me another adjective")
// Create an array that stores the values the user entered
//push the user inputs to the arrray
let story=[]
story.push(adjective)
story.push(pluralnoun)
story.push(adjective2)
story.push(verb)


// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive
console.log(`In a small ${story[0]} school in the Bronx,there was a problem with to many ${story[1]}.These ${story[1]} loved to ${story[2]},which caused Mr P so many headaches.However,no one wanted to remove them because they were too ${story[3]}.`)







