function play() {
  
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let userAnswer;
    alert('Я загадал число от 1 до 100. Угадайте это число!');
function guessNumber() {
    userAnswer = prompt('Введите число');
    
    if (userAnswer== randomNumber) {
            alert(`Вы угадали! Это число ${randomNumber}`);
            return;
        } else if (userAnswer > randomNumber) {
            alert(`${userAnswer} больше, чем загаданное число`);
           
        } else {
            alert(`${userAnswer} меньше, чем загаданное число`);
           
        }
    }    
   if (userAnswer== randomNumber) {
     return;
   }else {
    while (userAnswer != randomNumber) {
        guessNumber();
      }
   }
    
}