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

