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
// function nthFibo(n) {
//     if(n<=0) return 'error'
//     else if(n===1) return 0
//     else if(n===2) return 1
//     else return nthFibo(n-1) + nthFibo(n-2)
// };
// console.log(nthFibo(10))


//pythagorean triples 
// function isPythagoreanTriple(integers) {
//     let a = integers[0]
//     let b = integers[1]
//     let c = integers[2]
//     let aSq = a*a 
//     let bSq = b*b 
//     let cSq = c*c 
//     if(aSq + bSq == cSq) return true 
//     else if(bSq + cSq == aSq) return true 
//     else if(aSq + cSq == bSq) return true 
//     else return false 
// }


//sum of odd numbers 
// function rowSumOddNumbers(n) {
// 	return n*n*n
// }
// console.log(rowSumOddNumbers(2))


//sum of digits/digital root (16: 1+6=7) (942: 9+4+2=15 --> 1+5=6)
// function digitalRoot(n) {
//     return (n-1) % 9 + 1
// }
// console.log(digitalRoot(942))


//smart sum 
function smartSum(){
    const arr = Array.from(arguments).toString().split(",")
    let sum = 0
    for(const i in arr) sum += +arr[i]
    return sum  
}
console.log(smartSum(1,2,3,[4,5],6))