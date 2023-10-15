import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10:"
    }
]);
console.log;
{
    userGuess;
}
answer;
console.log(userGuess, "userGuess", systemGeneratedNo, `SYs`);
if (userGuess === systemGeneratedNo) {
    console.log("your answer is correct now you win!");
}
else {
    console.log("Please Try again Better luck Next Time!");
}
