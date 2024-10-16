    //Exercise-1
let password = 'пароль';
let answerPassword = prompt('Введите пароль');
(answerPassword === password)?console.log('Пароль введен верно'):console.log('Пароль введен не верно');

    //Exercise-2
let c = Number(prompt('Введите любое число'));
(c > 0 && c < 10)?console.log('Верно'):console.log('Неверно');

    //Exercise-3
let d = 9;
let e = 101;

(d>100 || e>100)?console.log('Верно'):console.log('Неверно');

    //Exercise-4
let a = '2';
let b = '3';

alert(parseInt(a) + parseInt(b));

    //Exercise-5
let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber > 0 && monthNumber < 13) {
    case (1):
        console.log('Зима')
        break;
    case (2):
        console.log('Зима')
        break; 
    case (3):
        console.log('Весна')
        break; 
    case (4):
        console.log('Весна')
        break; 
    case (5):
        console.log('Весна')
        break; 
    case (6):
        console.log('Лето')
        break; 
    case (7):
        console.log('Лето')
        break; 
    case (8):
        console.log('Лето')
        break;
    case (9):
        console.log('Осень')
        break; 
    case (10):
        console.log('Осень')
        break; 
    case (11):
        console.log('Осень')
        break; 
    case (12):
        console.log('Зима')
        break;  
    default:
        console.log('Такого месяца не существует')
        break;  
}

    //Exercise-1*
let input = prompt('Пожайлуста, введите любое число')

if (isNaN(input)) {
    alert('Вы ввели  не число');
} else { (input % 2 === 0)?alert('Число четное'):alert('Число не четное');
}

    //Exercise-2*
// let clientOS = 0;

// (clientOS === 0)?console.log('Установите версию приложения для iOS по ссылке'):console.log('Установите версию приложения для Android по ссылке');

    //Exercise-3*
let clientOS = 0;
let clientDeviceYear = Number(2019);
if (clientDeviceYear >= 2015) {
    (clientOS === 0)?console.log('Установите версию приложения для iOS по ссылке'):console.log('Установите версию приложения для Android по ссылке')
} else {
    (clientOS === 0)?console.log('Установите облегченную версию приложения для iOS по ссылке'):console.log('Установите облегченную версию приложения для Android по ссылке')  
}
