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
// function smartSum(){
//     const arr = Array.from(arguments).toString().split(",")
//     let sum = 0
//     for(const i in arr) sum += +arr[i]
//     return sum  
// }
// console.log(smartSum(1,2,3,[4,5],6))


//remove parenthesis 
// function removeParentheses(s){
//     count = 0 
//     res = ''
//     for(i of s){
//         if(i==='(') count += 1
//         else if(i===')') count--
//         else if(count===0) res += i
//     }
//     return res 
// }
// console.log(removeParentheses("example(unwanted thing)example"))



//returning strings (easy AF lol)
// function greet(name){
//     return `Hello, ${name} how are you doing today?`
// }


//create phone numbers
// function createPhoneNumber(numbers){
//     let num = '(xxx) xxx-xxxx';
//     for (const i of numbers) num = num.replace('x', i)
//     return num 
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


//third angle of triangle
// function otherAngle(a, b) {
//     return 180 - (a+b)
// }


//power of two 
// function isPowerOfTwo(n){
//     if(n===0) return false
//     while(n!=1){
//         if(n%2 != 0) return false
//         n /= 2 
//     }
//     return true 
// }
// console.log(isPowerOfTwo(1024))
// console.log(isPowerOfTwo(333))


//roman numerals encoder (int to roman)
// function solution(number){
    // const romans = {
    //     M: 1000,
    //     CM: 900,
    //     D: 500,
    //     CD: 400,
    //     C: 100,
    //     XC: 90,
    //     L: 50,
    //     XL: 40,
    //     X: 10,
    //     IX: 9,
    //     V: 5,
    //     IV: 4,
    //     I: 1,
    //  }
//      let res = ''
//      for(i in romans){
//         const count = Math.floor(number / romans[i])
//         if(count !== 0){
//             res += i.repeat(count)
//         }
//         number %= romans[i]
//         if(number === 0){
//             return res 
//         }
//      }
//      return res 
// }
// console.log(solution(3))


//roman numerals decoder (roman to int)
// function solution (roman) {
//     const nums = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//      }
//     let res = 0 
//     for(let i=0; i<roman.length; i++){
//         if(nums[roman[i]] < nums[roman[i+1]]) res -= nums[roman[i]]
//         else res += nums[roman[i]] 
//     }
//     return res 
// }
// console.log(solution('IV')) 


//number of people in the bus 
// const number = (busStops) => {
//     let people = 0 
//     busStops.forEach((i) => {
//         people += i[0] - i[1]
//     });
//     return people 
// }


//sum factorial
// const fact = (x) => {
//     return x===1 ? 1 : x * fact(x-1);
// }
// function sumFactorial(arr){
//     let sum = 0 
//     for(const i in arr) sum += fact(arr[i])
//     return sum 
// }


//find multiples of a number
// function findMultiples(integer, limit) {
//     const multi = []
//     for(let i=integer; i<=limit; i+=integer) multi.push(i)
//     return multi
// }
// console.log(findMultiples(2,6))


//fibonacci fizzbuzz
// const fibsFizzBuzz = (n) => {
//     const res = []
//     let [a, b] = [0, 1]
//     for (let i=0; i<n; i++){
//       [a, b] = [b, a + b];
//       res.push(a % 15 == 0 ? 'FizzBuzz' : a % 3 == 0 ? 'Fizz' : a % 5 == 0 ? 'Buzz' : a);
//     }
//     return res;
//   }
// console.log(fibsFizzBuzz(20))


