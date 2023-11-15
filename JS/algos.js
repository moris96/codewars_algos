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
//       [a, b] = [b, a + b]
//       res.push(a % 15 == 0 ? 'FizzBuzz' : a % 3 == 0 ? 'Fizz' : a % 5 == 0 ? 'Buzz' : a)
//     }
//     return res;
//   }
// console.log(fibsFizzBuzz(20))


//fizz buzz
// function fizzbuzz(n){
//     const res = []
//     res.push(n % 15 == 0 ? 'FizzBuzz' : n % 3 == 0 ? 'Fizz' : n % 5 == 0 ? 'Buzz' : n)
//     return res 
// }

// function fizzbuzz(n){
//     console.log(
//         Array.from({length: n}, (_,index) => index+1)
//         .map(element => element%15==0 ? 'FizzBuzz' : 
//         element%3==0 ? 'Fizz' :
//         element%5==0 ? 'Buzz' :
//         element)
//     )
// }

// const fizzbuzz = n => 
//     Array.from({length: n}, (_,index) => index+1)
//     .map(element => element%15==0 ? 'FizzBuzz' : 
//     element%3==0 ? 'Fizz' :
//     element%5==0 ? 'Buzz' : element)    
// console.log(fizzbuzz(10))



//is the string uppercase?
// String.prototype.isUpperCase = function() {
//     return this == this.toUpperCase()
// }


//sum of a sequence
// const sequenceSum = (begin, end, step) => {
//     let sum = 0 
//     for(let i=begin; i<=end; i+=step) sum += i 
//     return sum 
// }


//calculate average
// function findAverage(array) {
//     if(array.length===0) return 0 
//     let res = 0
//     for(let i=0; i<array.length; i++) res += array[i]
//     return res/array.length 
// }


//index of an element in an array
// function find(array, element){
//     return array.indexOf(element) > -1 ? array.indexOf(element) : "Not found";
// }


//add big numbers
// function add(a, b) {
//     let res = ''
//     let zero = 0
//     a = a.split('')
//     b = b.split('')
//     while(a.length || b.length || zero){
//         zero += ~~a.pop() + ~~b.pop()
//         res = zero % 10 + res 
//         zero = zero > 9 
//     }
//     return res 
// }


//build a calculator
// var Calculator = {};
// Calculator.add = function(a,b){
//     return a+b
// }
// Calculator.subtract = function(a,b){
//     return a-b
// }
// Calculator.multiply = function(a,b){
//     return a*b
// }
// Calculator.divide = function(a,b){
//     return (!b) ? false : a/b 
// }


//super duper easy lol lmao
// function problem(x){
//     return typeof(x)==='number' ? x * 50 + 6 : 'Error'
// }


//is it a palindrome
// function isPalindrome(x) {
//     return x.split('').reverse().join('').toLowerCase() == x.toLowerCase()
// }
// console.log(isPalindrome("A man, a plan, a canal–Panama"))



//sum of multiples
// function sumMul(n,m){
//     let res = 0
//     for(let i=1; i*n<m; i++) res += i*n 
//     return res > 0 ? res : 'INVALID'
// }


//sum of numbers digits
// function sumDigits(number) {
//     return Math.abs(number).toString().split('').reduce((total,next)=>total+Number(next),0)
// }
// console.log(sumDigits(99))


//power of four
// function powerOf4(n) {
//     return n>1?Number.isInteger(Math.log(n)/Math.log(4)):false
// }
// console.log(powerOf4(1024)) 


//convert integer to binary
// function toBinary(n){
//     return n>=0 ? n.toString(2) : (~n).toString(2);
// }
// function toBinary(n){
//     return parseInt(n).toString(2)
// }
// function toBinary(n){
//     return (n >>> 0).toString(2)
// }
// console.log(toBinary(1))


//selective fear of numbers
// const AmIAfraid = function(day, num){
//     if (day=='Monday'&&num===12)return true
//     if (day=='Tuesday'&&num>95)return true
//     if (day=='Wednesday'&&num===34)return true
//     if (day=='Thursday'&&num===0)return true
//     if (day=='Friday'&&num%2==0)return true
//     if (day=='Saturday'&&num===56)return true
//     if (day=='Sunday'&&(num==666||num===-666))return true
//     return false
// }


//cpnvert 12 hour time to 24 hour time
// function to24hourtime(hour, minute, period) {
//     if(hour===12 && period==='am') hour = 0
//     else if(period==="pm" && hour<12) hour += 12 
//     if(hour<10) hour='0' + hour 
//     if(minute<10) minute='0' + minute
//     return `${hour}${minute}`
// }



//down with arrow numbers
// function getADownArrowOf(n) { 
//     const res =  Array.from({length: n}, (_, i) => {   
//         const arr = Array.from({length: i}, (v, j) => (j + 1) % 10);
//     return ' '.repeat(n - i - 1) + arr.join('') + (i + 1) % 10 + arr.reverse().join('');
//   }).reverse();
//   return res.join('\n');
// }
// console.log(getADownArrowOf(11))



//fake binary number
// function fakeBin(x){
//     let res = ''
//     let nums = x 
//     for(i in nums){
//         if(parseInt(nums[i]) >= 5) res += '1'
//         if(parseInt(nums[i]) < 5) res += '0'
//     }
//     return res 
// }


//even or odd
// function evenOrOdd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd'
// }
// console.log(evenOrOdd(6))


//uglify word
// function uglifyWord(s) {
//     var s = Array.from(s.toLowerCase())
//     let res = 1
//     for (let i = 0; i < s.length; i++) {
//         if (s[i].match(/[a-z]/i)) {
//             if (res === 1) {
//                 s[i] = s[i].toUpperCase()
//                 res = 0
//             } else {
//                 s[i] = s[i].toLowerCase()
//                 res = 1
//             }
//         } else {
//             res = 1
//         }
//     }
//     return s.join('')
// };
// console.log(uglifyWord('aaa'))


//mispelled word
// var mispelled = function(word1, word2)
// {
//     if(word1.length < word2.length){
//         const res = word1
//         word1 = word2
//         word2 = res 
//     } else {
//     }
//     let count = 0 
//     for (let i=0,j=0;i<word1.length;i++,j++){
//         if (word1[i]!==word2[j]){
//         count++
//         if (word1.length>word2.length){
//             i++
//           }
//         }
//       }
//       return count<2
// };
// console.log(mispelled('versed', 'xersed')) 



//leap years
// function isLeapYear(year) {
//     return (year % 100 != 0 && year % 4 == 0) || year % 400 === 0
// }



//sorting dictionaries
// function sortDict(dict) {
//     return Object.entries(dict)
//     .sort((a,b) => b[1] - a[1])
//     .map(([k,v]) => [k,v])
// };
// console.log(sortDict({3:1, 2:2, 1:3}))



//sexy primes
// const isPrime = (n) => {
//     const sqr = Math.sqrt(n)
//     for(let i=2; i<=parseInt(sqr); i++){
//         if(n%i===0) return false
//     }
//     return n !== 1
// };

// function sexy_prime(x, y) {
//     return isPrime(x) && isPrime(y) && (x - y === 6 || y - x === 6) ? true : false;
// };

// console.log(sexy_prime(5,11))



