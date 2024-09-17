let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);
console.log("Я загадал число от 1 до 100. Угадывайте!");


const userAnswer = document.getElementById('guess');
console.log(guess.value);


function checkGuess() {
    if (userAnswer.value == randomNumber) {
            console.log(`Вы угадали! Это число ${randomNumber}`);
        } else if (userAnswer.value > randomNumber) {
            console.log(`${userAnswer.value} больше, чем загаданное число`);
        } else {
            console.log(`${userAnswer.value} меньше, чем загаданное число`);
        }
};
    console.log(userAnswer.value);
   


