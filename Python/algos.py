import math 

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


