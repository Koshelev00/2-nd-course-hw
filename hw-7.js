    //Exercise-1
let string1 = ('js');
console.log(string1.toUpperCase());

    //Exercise-2
const arr = ['adult', 'human', 'youth', 'chin', 'nerve', 'tongue',	'adoption'];
let string2 = 'ad';
function filterString(arr, string2) {
    return arr.filter(str => str.toLowerCase().startsWith(string2.toLowerCase()));
}
console.log(filterString(arr, string2)); 

    //Exercise-3
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

    //Exercise-4
console.log(Math.min( 52, 53, 49, 77, 21, 32));
console.log(Math.max( 52, 53, 49, 77, 21, 32));

    //Exercise-5
function rndm() {
    console.log(Math.floor(Math.random() * 9) +1);
}
rndm();

    //Exercise-6
function randomArray(max) {
    const array = [];
    for (let i = 0; i < max / 2; i++) {
    array.push(Math.floor(Math.random() * max));
    }
    return array;
    }

    console.log(randomArray(10));
 
    //Exercise-7
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(100, 20));

    //Exercise-8
let myDate = new Date();
console.log(myDate);

    //Exercise-9
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 73); 
    console.log(currentDate);

        //Exercise-10
function getDateString(date) {
    const day = date.getDay();
    console.log(day);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
          
    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} — это ${weekdays[day]}. 
Время: ${hours}:${minutes}:${seconds}`;
          }

const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const weekdays = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
          
console.log(getDateString(new Date()));