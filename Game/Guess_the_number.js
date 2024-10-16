let btnClick = document.querySelector('#replay');
const inputElement = document.querySelector('#output');
let randomNumber = Math.floor(Math.random() * 100) + 1;
let a = document.getElementById("guess").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("check").click();
    }
});

const replay =() =>{
    randomNumber = Math.floor(Math.random() * 100) + 1;
    inputElement.value = ('Я загадал число от 1 до 100. Угадайте это число!');
    userAnswer.value = '';
    document.querySelector('#replay').style.display = 'none';
    document.querySelector('#output').style.color = 'rgb(32, 32, 39)';
}

inputElement.value = ('Я загадал число от 1 до 100. Угадайте это число!');
const userAnswer = document.getElementById('guess');

function checkGuess() {
    if (userAnswer.value == randomNumber) {
        inputElement.value=(`Вы угадали! Это число ${randomNumber}`);
        document.querySelector('#replay').style.display = 'block';
        document.querySelector('#output').style.color = '#2cd156';
        } else if (userAnswer.value > randomNumber) {
            inputElement.value=(`${userAnswer.value} больше, чем загаданное число`);
            document.querySelector('#output').style.color = '#FF0000';
            userAnswer.value = '';
        } else {
            inputElement.value=(`${userAnswer.value} меньше, чем загаданное число`);
            document.querySelector('#output').style.color = '#FF0000';
            userAnswer.value = '';
        }
};
document.getElementById("check").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("check").click();
    }
});

const callback = () => {
    inputElement.value = checkGuess();    
};