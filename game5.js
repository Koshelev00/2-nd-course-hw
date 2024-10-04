function game5() {
function generationComputerAnswer() {
    return Math.floor(Math.random() * 3);
  }
  const arrAnswer = ['камень', 'ножницы', 'бумага']
  let userAnswer = prompt("Выберите 'камень', 'ножницы' или 'бумага':").toLocaleLowerCase().trim();

  let computerAnswer =arrAnswer[generationComputerAnswer()];  

  if (userAnswer === arrAnswer[0] && computerAnswer === arrAnswer[1]) {
    alert("Компьютер выбрал ножницы. Вы выиграли!");
  } else if (userAnswer === arrAnswer[1] && computerAnswer === arrAnswer[2] ) {
    alert("Компьютер выбрал бумагу. Вы выиграли!");
  } else if (userAnswer === arrAnswer[2] && computerAnswer === arrAnswer[0]) {
    alert("Компьютер выбрал камень. Вы выиграли!");
  } else {
    if (userAnswer == computerAnswer) {
      alert("Ничья!");
    } else {
      alert(`Компьютер выбрал ${computerAnswer}, вы выбрали ${userAnswer}. Компьютер выиграл!`);
    }
  }
}