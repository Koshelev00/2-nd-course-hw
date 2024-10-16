     //Exercise-1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ]; 

 console.log(people.sort((a, b) => a.age - b.age));

    //Exercise-2
function isPositive(number){
    return number > 0;
}
       
    
    function isMale(people) {
        return people.gender === 'male';
    }
    function filter(arr, ruleFunction) {        
        const result = [];
        arr.forEach((element) => {
            if (ruleFunction(element)) {
            result.push(element);
        }
        });
        return result;
        
    }
        
    console.log(filter([3, -4, 1, 9], isPositive));
        
    const people1 = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
    ];
        
    console.log(filter(people1, isMale));
 
    //Exercise-3
    let count = 0;
    const intervalId = setInterval(() => {
      console.log(new Date());
      count++;
      if (count === 10) {
        clearInterval(intervalId);
      }
    }, 3000);
    setTimeout(() => console.log("30 секунд прошло"), 30000);

            //Exercise-4
function delayForSecond1(callback) {
    setTimeout(callback, 1000);
    }       
    delayForSecond1(function () {
    console.log('Привет, Глеб!');
})

    //Exercise-5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));