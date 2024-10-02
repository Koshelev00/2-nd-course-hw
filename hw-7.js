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
