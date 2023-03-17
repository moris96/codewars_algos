//multiply
// function multiply(a, b){
//     a * b
//     return a*b;
// }


//multiply 3 or 5 
// function solution(number){
//     let sum = 0;
//     for(let i = 1; i < number; i+=1) {
//       if(i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//       }
//     }
//     return sum;
// }


// function nearestSq(n){
//     return Math.pow(Math.round(Math.sqrt(n)), 2)
// }
// console.log(nearestSq(115))


// convert string to camel case 
// function toCamelCase(str){
//     const regEx = /[-_]\w/ig
//     return str.replace(regEx,(i) => {
//         return i[1].toUpperCase() 
//      })
// };
// console.log(toCamelCase('the_stealth_warrior'))
// console.log(toCamelCase('The_Stealth_Warrior'))
// console.log(toCamelCase('The_Stealth-Warrior'))


//remove string spaces
// function noSpace(x){
//     return x.split(' ').join('')
// }
// console.log(noSpace('hello there'))


//hyperfactorial in JS
// function hyperfact(num){
//     let res = 1;
//     const mod = 1000000007;
//     for(let i=1; i<=num; i++){
//         for(let j=1; j<=i; j++){
//             res *= i
//         }
//     }
//     return res % mod    
// }
// console.log(hyperfact(6))


//recursion - factorial
// function factorial(n){
//     if(n<=1) return 1 
//     return n * factorial(n-1)
// }
// console.log(factorial(3))

//factorial - normal
// function factorial(n){
//     if(n<0) return -1
//     else if (n==0) return 1
//     else return(n*factorial(n-1))
// }
// console.log(factorial(5))


//Chuck Norris VII - True or False?
// function ifChuckSaysSo(){
//     return !true 
// };


//N-th fibonacci 
function nthFibo(n) {
    if(n<=0) return 'error'
    else if(n===1) return 0
    else if(n===2) return 1
    else return nthFibo(n-1) + nthFibo(n-2)
};

console.log(nthFibo(10))