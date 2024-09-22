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

The time complexity of my divideAndConquerSum() is $\Theta(n)$.
At the beginning of my algorithm, I check to see if the length of the
array is 0 or 1. If the array is either of these lengths, then the execution
time will be constant in the best case scenario. However, in the scenerio
where the length is greater than 1, the complexity increases.
The algorithm will always divide the array up into thirds and process
its own portion of the array until it reaches the base cases where the 
sub-array size is 0 or 1, in which it is added with two addition calls (hence 
why $\Theta$ contains the value 2 rather than the value of 1).

Recurrence Relation for divideAndConquerSum():\
$T(n) = 3T(n/3) + \Theta(2)$

###### Solving for the time complexity:
- First we expand the recurrence relation:\
    $T(n) = 3(3T(n/9) + \Theta(2)) + \Theta(2)$\
    $T(n) = 9T(n/9) + 3\Theta(2) + \Theta(2)$\
    $T(n) = 18T(n/18) + 9\Theta(2) + 3\Theta(2) + \Theta(2)$

- Then we can generate a pattern:\
    $T(n) = 3^k * T(n/3^k) + k * \Theta(2)$

- In order to get T(1), we can plug in $k = log{_3}n$:\
    $T(n) = n * T(1) + log{_3}n * \Theta(2)$

- We know that the base case for T(1) is a constant time operation, so we 
    can state that $T(1) = \Theta(1)$:\
    $T(n) = n * \Theta(1) + log{_3}n * \Theta(2)$\
    Simplified:\
    $T(n) = \Theta(n) + \Theta(2log{_3}n)$

- In this asymptotic analysis, $\Theta(2log{_3}n)$ is negligible, therefore
    the final time complexity is $T(n) \in \Theta(n)$



# Sources

- www.w3schools.com: for the quick documentation of the .slice() function
- ChatGpt: For generating an example (unrelated to this assignment) on
            how to solve a recurrence relation and rewrite into an asymtotic
            equation. I solved the recurrence relation for this assignment 
            myself once I had a better understand of how to do so.

# Plagiarism Acknowledgement
I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against me 
without prior notice.
