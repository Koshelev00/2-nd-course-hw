let randomNumber = Math.floor(Math.random() * 100) + 1;
// do {
// 

// } while ( const button = document.querySelector('#куздфн'););
const inputElement = document.querySelector('#output');
inputElement.value = ('Я загадал число от 1 до 100. Угадайте это число!');

const userAnswer = document.getElementById('guess');

function checkGuess() {
    if (userAnswer.value == randomNumber) {
        inputElement.value=(`Вы угадали! Это число ${randomNumber}`);
        } else if (userAnswer.value > randomNumber) {
            inputElement.value=(`${userAnswer.value} больше, чем загаданное число`);
        } else {
            inputElement.value=(`${userAnswer.value} меньше, чем загаданное число`);
        }
};

const callback = () => {
    inputElement.value = checkGuess();
};

// function shouBtn() {
//     if (userAnswer.value == randomNumber) {
//         document.getElementById('#replay').style.display = 'block';
//     }
    
// }
// const button = document.querySelector('#check');