    //Exercise-1
for (let a=1; a<3; a++) {
    console.log ('Привет');
    
}

    //Exercise-2
for (let b=1; b<=5; b++) {
     console.log (b);
}    

    //Exercise-3
    for (let c=7; c<=22; c++) {
        console.log (c);
   }    

    //Exercise-4
const obj= {
    Коля : 200+'$',
    Вася : 300+'$',
    Петя : 400+'$'
}

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

    //Exercise-5
let n = 1000;
let num = 0;
while (n >= 50) {
  n /= 2;
  num++;
}
console.log(n);
console.log(num);

    //Exercise-6
for (let Friday = 3; Friday<=31; Friday+=7) {
    console.log (`'Сегодня пятница, ${Friday}-е число. Необходимо подготовить отчет.`)
}    

    //Exercise-1*
let k = 100;
let iterations = 0;
while (k > 0) {
    k -= 7;
    iterations++;
}
console.log(k);
console.log(iterations);

    //Exercise-2*
    const months = 
[
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];

for (let x = 0; x < months.length; x++) {
    console.log(`${months[x]} - ${x + 1}`);
}

    //Exercise-3*
const book= {
    Название : 'Мертвые души',
    Автор : 'Гоголь Николай Васильевич',
    Год_издания : 2009,
    Жанр : 'Поэма'
}
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}

    //Exercise-4*
const numbers = [
    103,
    10,
    83,
    7,
    96,
    25,
    64,
    14,
    129,
    38
]
const min = Math.min.apply(null, numbers);
console.log(min);