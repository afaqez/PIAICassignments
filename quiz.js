const prompt = require("prompt-sync")();
var count = 0;
console.log(count)
var q1 = prompt("Is javascript a good language?\nA)Yes (B)NO\t (C)None of these options\n")
if(q1 == ('a' || 'A' || 'Yes'))
{
    console.log("Correct Answer!")
    count++
}
else
{
    console.log("Incorrect Answer!")
}
var q2 = prompt("What is the capital of Pakistan?\nA)Islamabad (B)Karachi\t (C)Lahore\n")
if(q2.toLowerCase() == ('islamabad' || 'a'))
{
    console.log("Correct Answer!")
    count++
}
else
{
    console.log("Incorrect Answer!")
}
console.log("You got " + count + " out of 2!")