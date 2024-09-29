function generateTask() {
  let operations = ["+", "-", "*", "/"]; 
  let operation = operations[Math.floor(Math.random() * 4)];
  let number1 = Math.ceil(Math.random() * 100);
  let number2 = Math.ceil(Math.random() * 100); 

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
      } else {
        return number1 + " / " + number2;
      }
  }
}
const userAnswer = document.getElementById('guess1');

const inputElement = document.querySelector('#output');
let a = document.getElementById("guess1").addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
      document.getElementById("check").click();
  }
});  
  let task = generateTask(); 
  let example = ("Пример:   " + task); 
  inputElement.value= example; 
  let result = eval(task);
  console.log(result);  
  
  const replay =() =>{ 
    task = generateTask();
    example = ("Пример:   " + task);
    result = eval(task);
    console.log(result);
    inputElement.value = example;
    userAnswer.value = '';
    document.querySelector('#replay').style.display = 'none';
    document.querySelector('#output').style.color = 'rgb(32, 32, 39)';
  }

  function checkGuess() {
    if (userAnswer.value === result.toString()) {
      document.querySelector('#replay').style.display = 'block';
      document.querySelector('#output').style.color = '#2cd156';
      inputElement.value = "Ответ верный!";
    } else {
      inputElement.value = "Ошибка!";
    }
};
