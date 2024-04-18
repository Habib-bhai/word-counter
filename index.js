#!usr/bin/env node
//importing inquirer from "Node_modules"
import inquirer from "inquirer";
//taking user input
const userAnswer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter your string to count its number of words."
});
const words = userAnswer.sentence.trim().split(" ");
console.log(`Number of words in your input are:${words.length}`);
