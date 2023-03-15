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
    
