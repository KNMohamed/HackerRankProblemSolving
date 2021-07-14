# Dynamic Array (My Solution)

## https://www.hackerrank.com/challenges/dynamic-array/problem

### Problem Description

- Declare a 2-dimensional array, _**arr**_ , of _**n**_ empty arrays. All arrays are zero indexed.

- Declare an integer, _**lastAnswer**_ , and initialize it to **0**.

- There are **2** types of queries, given as an array of strings for you to parse:
  - Query: 1 x y
    1. Let _**idx**_ _=_ **((x^lastAnswer)%n)**
    2. Append the integer _**y**_ to _**arr[idx]**_.
  - Query: 2 x y
    1. Let _**idx**_ _=_ **((x^lastAnswer)%n)**
    2. Assign the value _**arr[idx]y%size(arr[idx])]**_ to _**lastAnswer**_
    3. Store the new value of _**lastAnswer**_ to an answers array
