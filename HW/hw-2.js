let a = 10;
alert(a);
a = 20;
alert(a);

let b = 2007;
alert(b);

let c = "Brendan";
alert(c);

let d = 10;
let e = 2;
let summ = d + e;
alert(summ);
let difference = d - e;
alert(difference);
let product = d * e;
alert(product);
let quotient = d / e;
alert(quotient);

let result = Math.pow(2, 2);
alert(result);

let f = 9;
let g = 2;
alert(f % g);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

let age = prompt('Сколько тебе лет?');
alert(age);

let user;
user = {
    name: 'Алексей',
    age: 33,
    isAdmin: true
};

let name = prompt("Как вас зовут?");
alert(`Привет, ${name}!`);

let number;
number = prompt("Загадайте число");
alert("Удвойте задуманое число")
let result1 = number * 2;
alert(result1);
alert("К полученому числу прибавьте 10")
result1 += 10;
alert(result1);
alert("Разделите полученое число на 2")
let answer = result1 / 2;
alert(answer);
alert("Из результата вычтите загаданое число")
let finalAnswer = answer - number;
alert(finalAnswer);
alert("Ответ равен 5");