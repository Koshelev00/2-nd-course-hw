function game5() {
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
  }
  

  let userChoice = prompt("Выберите 'камень', 'ножницы' или 'бумага':");
  

  let computerChoice = getComputerChoice();
  
 
  if (userChoice === "камень" && computerChoice === "ножницы") {
    alert("Компьютер выбрал ножницы. Вы выиграли!");
  } else if (userChoice === "ножницы" && computerChoice === 'бумага') {
    alert("Компьютер выбрал бумагу. Вы выиграли!");
  } else if (userChoice === "бумага" && computerChoice === 'камень') {
    alert("Компьютер выбрал камень. Вы выиграли!");
  } else {
    if (userChoice == computerChoice) {
      alert("Ничья!");
    } else {
        console.log(`Компьютер выбрал ${computerChoice}, вы выбрали ${userChoice}. Компьютер выиграл!`);
    
  }
  }
}