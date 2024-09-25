    //Exercise-1 
const nmbr = [1, 5, 4, 10, 0, 3];

for (let item = 0; item < nmbr.length;  item ++) {    
    console.log(nmbr[item]);
    if (nmbr[item] === 10) {
        break;
    }   
}

//     //Exercise-2
const array = [1, 5, 4, 10, 0, 3];
console.log(array.indexOf(4));

    //Exercise-3
const array1 = [1, 3, 5, 10, 20];
console.log(array1.join(' '));

    //Exercise-4
const array2 = [];
for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    array2.push(row);
}
console.log(array2);

    //Exercise-5
const array3 = [1, 1, 1];
for (let j = 0; j < 3; j++) {
    array3.push(2);
}
console.log(array3);

    //Exercise-6
let  array4 = [9, 8, 7, 'a', 6, 5];
array4.sort();
array4 = array4.filter(x => x !== 'a');
console.log(array4);

    //Exercise-7
const array5 = [9, 8, 7, 6, 5];
let answer = prompt('Угадайте число');
console.log(answer);
let isFound = array5.includes(Number(answer));
console.log(isFound == true);
if (isFound) {
    alert('Угадал!');
} else {
    alert('Не угадал!');
}

    //Exercise-8
const string = 'abcdef';
const array6 = string.split('');
array6.reverse();
console.log(array6);

     //Exercise-9
const array7 = [[1, 2, 3], [4, 5, 6]];
console.log([...array7[0], ...array7[1]]); // [1, 2, 3, 4, 5, 6]

    //Exercise-10
const array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array8.length - 1; i++) {
  console.log(array8[i] + array8[i + 1]);
}

    //Exercise-11
function square(arr) {
    return arr.map(num => num ** 2);
}
const numbers = [1, 2, 3, 4, 5];
console.log(square(numbers));

    //Exercise-12
function Lengths(arr) {
    return arr.map(str => str.length);
}      
const words = ['Привет', 'Пока', 'Вижу', 'Иду', 'Ты'];
console.log(Lengths(words));

    //Exercise-13
function getNegative(arr) {
    return arr.filter(num => num < 0);
    }      
const numbers2 = [2, -9, 3, -8, 7];
console.log(getNegative(numbers2));

    //Exercise-14
    const array9 = [];
    for (let i = 0; i < 10; i++) {
      array9.push(Math.floor(Math.random() * 11));
    }
    console.log(array9);    
    const newArray = array9.filter(num => num % 2 === 0);
    console.log(newArray);

    //Exercise-15
const array10 = [];
for (let i = 0; i < 6; i++) {
    array10.push(Math.floor(Math.random() * 10) + 1);
}
console.log(array10);    
const sum = array10.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / array10.length;
console.log(`Среднее арифметическое чисел массива: ${average}`);