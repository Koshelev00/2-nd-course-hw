function generateTask() {
    let operations = ["+", "-", "*", "/"]; 
    let operation = operations[Math.floor(Math.random() * 4)];
    let number1 = Math.ceil(Math.random() * 10);
    let number2 = Math.ceil(Math.random() * 10); 
      
    switch (operation) {
        case "+":
        return number1 + " " + operation + " " + number2;
        case "-": 
        return number1 + " " + operation + " " + number2;
        case "*": 
        return number1 + " " + operation + " " + number2;
        default:
        if (number2 === 0) {
            return generateTask();
        }else {
            return number1 + " / " + number2;
            }
        }
      }

function cllickButton() {
    let task = generateTask(); 
    let example = ("Пример:   " + task);
    alert(example); 
    let result = eval(task);
    let userAnswer = prompt('Введите ответ');

function checkGuess() {
    if (userAnswer === result.toString()) {
      
      alert("Ответ верный!");
    } else {
      alert("Ошибка!");
     
    }
};
checkGuess();
}