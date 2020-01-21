---
title: Swift Code Challenges
---

## Approaching a Code Challenge

Before you hop into a Playground and start writing code to solve any of these challenges, make sure to take the proper steps to pseudo-code and plan!

<p class="to-do">Link psuedo-coding materials here</p>

## Mild Challenges

<div class="try-it">
  <h2>Sum of Two</h2>
  <p>Declare a function that prints the sum of the two Integers that are passed in as arguments. For example, when <code class="try-it-code">14</code> and <code class="try-it-code">9</code>, the output should be <code class="try-it-code">25</code>.</p>
</div>

<div class="try-it">
  <h2>Check Word Length</h2>
  <p>Declare a function that takes one argument, a String. If the string is 8 characters or longer, print out <code class="try-it-code">Valid password length!</code>. If it is shorter, print out <code class="try-it-code">Try again, must be at least 8 characters</code>.</p>
</div>

## Medium Challenges

<div class="try-it">
  <h2>Even or Odd?</h2>
  <p>Write a function that takes an Integer as an argument and returns "even" for even numbers or "odd" for odd numbers.</p>
</div>

<div class="try-it">
  <h2>Sum of Two</h2>
  <p>Declare a function that prints the sum of the two Integers that are passed in as arguments, but <em>only</em> if both Integers are even. If they are not both even, print out <code class="try-it-code">Oops, try again</code>. For example, when <code class="try-it-code">14</code> and <code class="try-it-code">9</code> are passed in, the output should be <code class="try-it-code">Oops, try again</code>. When <code class="try-it-code">10</code> and <code class="try-it-code">8</code> are passed in, the output should be <code class="try-it-code">18</code>.</p>
  <p><em>Need a Hint? You can read about the Logical AND Operator <a href="https://medium.com/swift-india/everything-about-operators-in-swift-97d6c9d3004f">here</a>.</em></p>
</div>

<div class="try-it">
  <h2>Sound It Out</h2>
  <p>Declare a function that takes in a String as an argument. Return a String with dash’-’marks in between each letter in the String. For example soundItOut("Hello") -> <code class="try-it-code">"H-e-l-l-o-"</code>.</p>
  <p>Once you've done that, level up! Modify your code so that the last letter does not have a dash trailing after it. For example soundItOut("Hello") -> <code class="try-it-code">"H-e-l-l-o"</code>.</p>
</div>

<div class="try-it">
  <h2>Fizz Buzz</h2>
  <p>Write a short program that takes in an Array of Integers. For each multiple of 3, print "Fizz". For each multiple of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz". If a number is not a multiple of 3 or 5, print the number itself.</p>
</div>

## Spicy Challenges

<div class="try-it">
  <h2>Super Fizz Buzz</h2>
  <p>Write a short program that prints each number from 1 to 100 on a new line. For each multiple of 3, print "Fizz" instead of the number. For each multiple of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.</p>
</div>

<div class="try-it">
  <h2>Add Up</h2>
  <p>Write a function that takes a number as an argument. Add up all the numbers from 1 to the number that was passed in, and return the sum. For example, if your argument is 4, your function should return 10 because <code class="try-it-code">1 + 2 + 3 + 4 = 10</code>.</p>
</div>

<div class="try-it">
  <h2>Dashitize</h2>
  <p>Declare a function that takes in an Integer as an argument. Return a String with dash’-’marks before and after each odd Integer, but do not begin or end the string with a dash mark. Example: dashitize(274) -> <code class="try-it-code">2-7-4</code> dashitize(6815) -> <code class="try-it-code">68-1-5</code></p>
</div>

<div class="try-it">
  <h2>Sum of Two</h2>
  <p>Declare a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No empty arrays will be passed in. For example, when an array is passed like <code class="try-it-code">[19, 5, 42, 2, 77]</code>, the output should be <code class="try-it-code">7</code>.</p>
</div>

<div class="try-it">
  <h2>Scrabble</h2>
  <p>Have you ever played Scrabble or Words with Friends? Each player gets a set of tiles, with each tile having one letter printed on it. Using the tiles you have, your task is build words. Each letter has a point value (common letters are lower in value, less commonly used letter are worth a lot!) The player who has the most points wins.</p>
  <p>Your task today is to write a program that will calculate the score of any given word. Your function should take one argument (a word) and return an integer (the score of that word).</p>
  <p>Use this dictionary to access the scores for each letter:</p>
  <code class="try-it-code">
  let letterScores = [<br>
      "A": 1, "B": 3, "C": 3, "D": 2,<br>
      "E": 1, "F": 4, "G": 2, "H": 4,<br>
      "I": 1, "J": 8, "K": 5, "L": 1,<br>
      "M": 3, "N": 1, "O": 1, "P": 3,<br>
      "Q": 10, "R": 1, "S": 1, "T": 1,<br>
      "U": 1, "V": 4, "W": 4, "X": 8,<br>
      "Y": 4, "Z": 10<br>
  ]
  </code>
</div>

<div class="try-it">
  <h2>Trolls</h2>
  <p>Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls’ comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string “This website is for losers LOL!” would become “Ths wbst s fr lsrs LL!“. <em>Note: for this exercise, y isn’t considered a vowel.</em></p>
</div>
