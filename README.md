# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


# Runtime Analysis Answer:

The time complexity of my divideAndConquerSum() is $\Theta(log(n))$.
At the beginning of my algorithm, I check to see if the length of the
array is 0 or 1. If the array is either of these lengths, then the execution
time will be constant in the best case scenario. However, in the scenerio
where the length is greater than 1, the complexity increases.
The algorithm will always divide the array up into thirds and process
its own portion of the array until it reaches the base cases where the 
sub-array size is 0 or 1, in which it is added in a constant time:

$T(n) = 3T(n/3) + \Theta(1)$

No matter what the content or the order of the array is, the function will 
recursively call itself until the sub-arrays reach the criteria for the base
cases, then it is all added back together through the recursive calls to get 
the final result which is the sum of all the elements in any given array.


# Sources

- www.w3schools.com: for the quick documentation of the .slice() function

# Plagiarism Acknowledgement
I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against me 
without prior notice.
