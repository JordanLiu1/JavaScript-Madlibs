//Create a script.js file and an index.html file. link the script.js file to the html  file
//Define at least one variable for each of the following data types:
alert("Hi Welcome!")
let boolean = true
let bought = " "
let word = "Man "
//a word (e.g., a noun, verb, adjective).
let useranswer = prompt("Pick a number from 1-4")
let numbertotal = Number(useranswer)
let numbergain = 1
//a numeric value (e.g., a number).
numbertotal = (numbertotal + numbergain)
let numberleft = numbertotal
// a number calculated from an expression involving at least one other number.
if (numbertotal > 3) {
    boolean = true
}
else {
    boolean = false
}
if (boolean) {
    bought= "did buy"
    numberleft= numbertotal - 3
}
else {
    bought = "did not buy"
}
// a true/false value.
//a value entered by the user using prompt 
//Create a short story (at least 2-3 sentences) using these variables. The story should make sense even if it's silly or whimsical.
//Concatenate your variables into a single string that forms a complete sentence or sentences.
console.log(word + "has " + useranswer + " dollars. He gets 1 dollar.")
console.log(word + bought+ " a car.")
console.log(word + "has "+ numberleft + ' dollars left.')
