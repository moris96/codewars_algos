#IMPORTS
import math 
import re 

#find nearest sq 
# from math import * 
# def nearest_sq(n):
#     return pow(round(sqrt(n)), 2)
# print(nearest_sq(115))


#the hyperfactorial 
# def hyperfact(num):
#     res = 1
#     mod = 1000000007
#     for i in range(1, num+1):
#         for j in range(1, i+1):
#             # 1^1*2^2*3^3...
#             res *= i 
#     return res % mod 
# print(hyperfact(6))

#  % 1000000007

#factorial ---- the codewars challenge is broken since I have the right answer lmao
# def factorial(n):
#     if n<0:
#         return -1
#     elif n==0:
#         return 1
#     else:
#         return (n*factorial(n-1))
# print(factorial(5)) 
# print(factorial(1)) 
# print(factorial(0)) 
# print(factorial(-5)) 


#longest palindrome length
# def longest_palindrome(s):
#     l = 0
#     for i in range(1, len(s)+1):
#         for j in range(0, len(s) - i+1):
#             w = s[j: j+i]
#             if w == w[::-1]:
#                 l = i 
#     return l 

# print(longest_palindrome("aaaa"))


#Chuck Norris VII - True or False?
# def if_chuck_says_so():
#     return not True 
    

#N-th fibonacci 
# def nth_fib(n):
    # if n<=0:
    #     return 'error'
    # elif n==1: return 0
    # elif n==2: return 1
    # else: return nth_fib(n-1) + nth_fib(n-2)


#hex to decimal 
# def hex_to_dec(s):
#     return int(s, 16)
# print(hex_to_dec('a'))


#bin to decimal
# def bin_to_decimal(inp):
#     return int(inp, 2)


#find out whether the shape is a cube 
# def cube_checker(volume, side):
#     return pow(side, 3) == volume and side > 0 
# print(cube_checker(-12, 2)) 


#multiples of 3 or 5 
# def solution(number):
#     sum = 0 
#     for i in range(number):
#         if (i%3==0) or (i%5==0):
#             sum += i 
#     return sum 


#remove string spaces
# def no_space(x):
#     return x.replace(" ", "")


#pythagorean triples 
# def pythagorean_triple(integers):
#     a = integers[0]
#     b = integers[1]
#     c = integers[2]
#     aSq = a*a 
#     bSq = b*b 
#     cSq = c*c 
#     if (aSq + bSq == cSq): return True 
#     elif (bSq + cSq == aSq): return True 
#     elif (aSq + cSq == bSq): return True 
#     else: return False 


#sum of odd numbers
# def row_sum_odd_numbers(n):
#     return n*n*n 
# print(row_sum_odd_numbers(2)) 


# #sum of digits/digital root (16: 1+6=7) (942: 9+4+2=15 --> 1+5=6)
# def digital_root(n):
#     while n>=10:
#         n = sum(int(i) for i in str(n))
#     return n 
# print(digital_root(942))


#sum of angles
# def angle(n):
#     return (n-2)*180
# print(angle(3)) 
# print(angle(4))


#remove the parenthesis 
# def remove_parentheses(s):
#     count = 0
#     res = ''
#     for i in s:
#         if i=='(': count += 1
#         elif i==')': count -= 1
#         else:
#             if count == 0: res += i 
#     return res 
# print(remove_parentheses("example(unwanted thing)example"))


#sum of even numbers
# def sum_even_numbers(seq): 
#     return sum(i for i in seq if not i%2)
# print(sum_even_numbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8])) 


#valid parenthesis 
# def valid_parentheses(paren_str):
#     parents = dict(('()', '[]', '{}'))
#     res = []
#     for i in paren_str:
#         if i in '([{': res.append(i)
#         elif len(res) == 0 or i != parents[res.pop()]: return False 
#     return len(res) == 0 
# print(valid_parentheses("()")) 


#create phone numbers
# def create_phone_number(n):
#     return '({}{}{}) {}{}{}-{}{}{}{}'.format(*n) 
# print(create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


#fix my phone numbers
# def is_it_a_num(s: str) -> str:
#     realNum = ''
#     for i in s:
#         if i.isdigit(): realNum += i 
#     if len(realNum) == 11 and str(realNum[0]) == '0': return realNum
#     return "Not a phone number"
# print(is_it_a_num('efRFS:)0207ERGQREG88349F82!'))


#third angle of a triangle
# def other_angle(a, b):
#     return 180 - (a+b)


#power of two
# def power_of_two(x):
#     if(x==0): return False
#     while(x!=1):
#         if(x%2 != 0): return False 
#         x = x//2 
#     return True 
# print(power_of_two(1024)) 
# print(power_of_two(333)) 


#remove first and last character from string
# def remove_char(s):
#     return s[1:][:-1]
# print(remove_char('Hello'))


#find the stray number 
# def stray(arr):
#     return [i for i in arr if arr.count(i)==1][0]
# print(stray([17, 17, 3, 17, 17, 17, 17])) 


#nth even number
# def nth_even(n):
#     return (n-1) * 2


#remove the time 
# def shorten_to_date(long_date):
#     return long_date.split(',')[0]
# print(shorten_to_date("Friday May 2, 7pm")) 


#double an integer ('you can't code under pressure #1') --easy AF lmao lol lol lol
# def double_integer(i):
#     return i*2


#volume of a cuboid
# def get_volume_of_cuboid(length, width, height):
#     return length*width*height


#factorial
# def factorial(n):
#     if n==1 or n==0: return 1
#     return n * factorial(n-1)
# print(factorial(4)) 


#roman numerals encoder (int to roman)
# def solution(n):
#     romans = {
#         'M': 1000,
#         'CM': 900,
#         'D': 500,
#         'CD': 400,
#         'C': 100,
#         'XC': 90,
#         'L': 50,
#         'XL': 40,
#         'X': 10,
#         'IX': 9,
#         'V': 5,
#         'IV': 4,
#         'I': 1,
#     }
#     res = ''
#     for i in romans:
#         count = n // romans[i]
#         if count != 0:
#             res += i * count
#         n %= romans[i]
#         if n == 0:
#             return res
#     return res 
# print(solution(3))


#roman numerals decoder (roman to int)
# def solution(roman):
#     nums = {
#         'I': 1,
#         'V': 5,
#         'X': 10,
#         'L': 50,
#         'C': 100,
#         'D': 500,
#         'M': 1000,
#     }
#     res = 0
#     for i in range(len(roman)):
#         if i < len(roman) - 1 and nums[roman[i]] < nums[roman[i+1]]:
#             res -= nums[roman[i]]
#         else:
#             res += nums[roman[i]]
#     return res
# print(solution('IV'))


#number of people in the bus 
# def number(bus_stops):
#     return sum([i[0] - i[1] for i in bus_stops])


#sum factorial
# def fact(x):
#     if x==1: return 1
#     return x * fact(x-1)
# def sum_factorial(lst):
#     return sum(list(map(lambda x: fact(x), lst)))


#find multiples of a number
# def find_multiples(integer, limit):
#     return list(range(integer, limit+1, integer))
# print(find_multiples(2,6)) 


#fibonacci fizzbuzz
# def fibs_fizz_buzz(n):
#     res = []
#     a, b = 0, 1
#     for i in range(n):
#         a, b = b, a + b
#         if a % 15 == 0:
#             res.append('FizzBuzz')
#         elif a % 3 == 0:
#             res.append('Fizz')
#         elif a % 5 == 0:
#             res.append('Buzz')
#         else:
#             res.append(a)
#     return res
# print(fibs_fizz_buzz(20))


#5 without numbers
# def unusual_five():
#     return len('lmfao')


#reverse strings
# def solution(string):
#     return string[::-1]
# print(solution('this is a string'))


#Find the index of the second occurrence of a letter in a string
# def second_symbol(s, symbol):
#     return s.find(symbol, s.find(symbol)+1)
# print(second_symbol('Hello world!!!','l')) 



#sorted array by string length 
# def sort_by_length(arr):
#     return sorted(arr, key=lambda x: len(x))
# print(sort_by_length(["Telescopes", "Glasses", "Eyes", "Monocles"]))



#######multiplication table
##my way:
# def multiplication_table(size):
#     for i in range(1,11):
#         print(size, 'x', i, '=', size*i)
##codewars way - stupider way cause it has to return arrays instead of the actual multiplication table lmao:
# def multiplication_table(size):
#     res = []
#     for i in range(1, size+1):
#         x = []
#         for j in range(1, size+1):
#             x.append(i*j)
#         res.append(x)
#     return res 
# print(multiplication_table(5))



#sum of a sequence
# def sequence_sum(begin_number, end_number, step):
#     return (sum(range(begin_number, end_number+1, step)))
# print(sequence_sum(2,6,2)) 



#running out of space
# def spacey(array):
#     res = []
#     temp = ''
#     for i in array:
#         temp += i 
#         res.append(temp)
#     return res 
# print(spacey(['i', 'have','no','space']))



#reverse a number
# def reverse_number(n):
#     rev = 0
#     while(n>0):
#         remainder = n%10
#         rev = (rev*10)+remainder
#         n = n//10
#     return rev 
# def reverse_number(n):
#     nString = str(n)
#     if '-' in nString:
#         nString = nString[1:]
#         return int('-' + nString[::-1])
#     else: return int(nString[::-1])
# print(reverse_number(123))



#prime factors
# def prime_factors (n):
#     i = 2
#     factors = []
#     while i * i <= n:
#         if n % i:
#             i += 1
#         else:
#             n //= i
#             factors.append(i)
#     if n > 1:
#         factors.append(n)
#     return factors
# print(prime_factors(7))


#is this a triangle?
# def is_triangle(a, b, c):
#     if(a+b > c) and (b+c > a) and (c+a > b): return True
#     else: return False


#odd or even?
# def even_or_odd(number):
#     return 'Even' if number % 2 == 0 else 'Odd'
# print(even_or_odd(5)) 


#reverse list order
# def reverse_list(l):
#     newL = l[::-1]
#     return newL
# print(reverse_list([1,2,3,4]))



#make upper case
# def make_upper_case(s):
#     return s.upper()
# print(make_upper_case('hello'))



#miles per gallon to kilometers per liter
# def converter(mpg):
#     kpg = mpg * 1.609344 #kilometers per gallon 
#     kpl = kpg / (4.54609188) #kilometers per liter 
#     return round(kpl, 2)
# print(converter(1)) 


#next prime number
# def next_prime(n):
#     next = []
#     isPrime = []
#     for i in range(n+1,n+200):
#         next.append(i)
#     for j in next:
#         val_is_prime = True
#         for x in range(2,j-1):
#             if j%x == 0:
#                 val_is_prime = False
#                 break 
#             if val_is_prime:
#                 isPrime.append(j)
#     return min(isPrime)
# print(next_prime(15))


#convert int to binary 
# def to_binary(n):
#     return bin(n)[2:]
# print(to_binary(10))


#filter the number
# def filter_string(string):
#     res = ''
#     for i in string:
#         if i.isdigit(): res = res + i 
#     return int(res)
# print(filter_string('hello world 69'))


#remove duplicates from list
# def distinct(seq):
#     return [seq[i] for i in range(len(seq)) if i == seq.index(seq[i])]
# print(distinct([1,1,2]))


