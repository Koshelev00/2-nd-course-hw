    //Exercise-1    
function min (a, b) {
    if (a<b) {
        console.log(a)
    } else {
        console.log(b)
    }
}

min(6, 6);

    //Exercise-2
function numberCheck(number) {
    if (number % 2 === 0) {
       return 'Число четное';
      } else {
        return 'Число нечетное';
      }
}

console.log(numberCheck(5));
console.log(numberCheck(4));

    //Exercise-3
function square(number) {
    return Math.pow(`${number}`, 2);       
}
console.log(square(8)); 

function square(number) {
    return Math.pow(`${number}`, 2);
}
let math = square(8);
console.log(math);

     //Exercise-4
function welcome () {
    age = prompt('Сколько тебе лет?');
    if (age <0) {
        return 'Вы ввели неправильное значение';
        
    }else if (age >=13) {
        return'Добро пожаловать!';
    } 
    else {
        return 'Привет, друг!';
    }

}
alert(welcome())

    //Exercise-5
function check(a=3, b=5) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }
    else {
       
        return  a * b;
    }
}
console.log(check(9, 5));

    //Exercise-6
    number= prompt('Введите число');
function checkNumber() {
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';        
    } else {        
        let degree = Math.pow(`${number}`, 3);
        return `${number} в кубе равняется ${degree}`;        
    }
}
alert(checkNumber());

    //Exercise-7
const circle1 = {
    radius: 8,
    getArea() {
        return Math.PI * Math.pow(`${this.radius}`, 2);
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const circle2 = {
    radius: 30,
    getArea() {
        return Math.PI * Math.pow(`${this.radius}`, 2);
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}


console.log(circle1.getArea());
console.log(circle2.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getPerimeter());