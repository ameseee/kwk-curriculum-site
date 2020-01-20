---
title: Array Exercises
---

## Mild Practice

<div class="try-it">
  <h3>Calculate Daily Pay</h3>
  <p>Trisha gets paid $22 each time she walks a dog. The array below holds 7 numbers, the number of dog walks she took each day last week. Iterate over the array, and print out "Trisha earned $____ today!" for each day.</p>
  <code class="try-it-code">var dogWalks = [4, 5, 2, 2, 6, 1, 3]</code>
  <p></p>
</div>

<div class="try-it">
  <h3>YELLING</h3>
  <p>Iterate over an array of strings. For each string, print out the YELLING version of it. Look into <a href="https://developer.apple.com/documentation/swift/string/1640996-uppercased">how to convert a string to uppercase</a>!</p>
</div>

## Medium Practice

<div class="try-it">
  <h3>Sum of All</h3>
  <p>Write a function that takes one argument, an array of Integers. No empty arrays will be passed in. The function should return the sum of all of the numbers in an array.  For example, when an array is passed like <code class="try-it-code">[19, 5, 42, 2, 77]</code>, the output should be <code class="try-it-code">145</code>.</p>
</div>

<div class="try-it">
  <h3>Calculate Total Pay</h3>
  <p>Trisha gets paid $22 each time she walks a dog. The array below holds 7 numbers, the number of dog walks she took each day last week. Write a function that calculates her total pay.</p>
  <code class="try-it-code">var dogWalks = [4, 5, 2, 2, 6, 1, 3]</code>
  <p></p>
</div>

## Spicy Practice

<div class="try-it">
  <h3>Sum of Two</h3>
  <p>Write a function that takes one argument, an array of Integers. No empty arrays will be passed in. The function should return the sum of the two lowest positive numbers given an array of minimum 4 integers.  For example, when an array is passed like <code class="try-it-code">[19, 5, 42, 2, 77]</code>, the output should be <code class="try-it-code">7</code>.</p>
</div>

<div class="try-it">
  <h3>Find the Odd (or Even) One Out</h3>
  <p>Write a function that takes in one argument, an array of Integers. The array must have at least 3 elements. All numbers except for one of them will be either even or odd. You job is to return that <strong>one</strong> number that is the exception. Below are some example inputs and outputs. Make sure your function works on them all.</p>
  <p>Input: <code class="try-it-code">[1, 3, 5, 6]</code>, Output: <code class="try-it-code">6</code></p>
  <p>Input: <code class="try-it-code">[10, 15, 20, 30, 40, 50]</code>, Output: <code class="try-it-code">15</code></p>
  <p>Input: <code class="try-it-code">[19, 5, 42, 1, 77]</code>, Output: <code class="try-it-code">42</code></p>
</div>

<div class="try-it">
  <h3>Explore</h3>
  <p>Take the following steps using the code snippet below.</p>
  <ul>
    <li>What do you think <code class="try-it-code">index</code> stands for in the code?</li>
    <li>Can you figure out what is happening after the <code class="try-it-code">in</code> keyword?</li>
    <li>Take a few minutes to jot down your thoughts and guesses! Then try it out in an Xcode Playground.</li>
  </ul>
</div>

```swift
var animals = ["red panda", "penguin", "polar bear"]

for index in 0..<animals.count {
  print("I love \(animals[index])")
}
```
