function game3 () {
    let userWord = prompt('Введите слово, а я его переверну');
    let reversed = userWord.split("").reverse().join('').toUpperCase();
    if (reversed ===  userWord.toLocaleUpperCase() ) {
        alert(`Слово ${userWord} не возможно перевернуть - это слово полиндром!`);
    } else {
        alert(`Я перевернул слово и вот что получилось: ${reversed}`);
    }
   
}
