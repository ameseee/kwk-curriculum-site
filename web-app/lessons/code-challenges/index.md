---
title: JavaScript Code Challenges
---

<div class="try-it">
  <h2>Even or Odd?</h2>
  <p>Write a function that takes a number as an argument and returns "even" for even numbers or "odd" for odd numbers.</p>
</div>

<div class="try-it">
  <h2>Is it Prime?</h2>
  <p>Write a function that accepts a number as a parameter and check the number is prime or not. If it is prime, return <code class="try-it-code">true</code>. If not, return <code class="try-it-code">false</code>. <em>Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.</em></p>
</div>

<div class="try-it">
  <h2>Fizz Buzz</h2>
  <p>Write a short program that prints each number from 1 to 100 on a new line. For each multiple of 3, print "Fizz" instead of the number. For each multiple of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.</p>
</div>

<div class="try-it">
  <h2>Dashitize</h2>
  <p>Given a number, return a string with dash’-’marks before and after each odd integer, but do not begin or end the string with a dash mark. Example: dashitize(274) -> <code class="try-it-code">2-7-4</code> dashitize(6815) -> <code class="try-it-code">68-1-5</code></p>
</div>

<div class="try-it">
  <h2>Add Up</h2>
  <p>Write a function that takes a number as an argument. Add up all the numbers from 1 to the number that was passed in, and return the sum. For example, if your argument is 4, your function should return 10 because <code class="try-it-code">1 + 2 + 3 + 4 = 10</code>.</p>
</div>

<div class="try-it">
  <h2>Sum of Two</h2>
  <p>Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No empty arrays will be passed in. For example, when an array is passed like <code class="try-it-code">[19, 5, 42, 2, 77]</code>, the output should be <code class="try-it-code">7</code>.</p>
</div>

<div class="try-it">
  <h2>Centuries</h2>
  <p>Return the inputted numerical year in century format. For example 2014, would return 21st. The input will always be a 4 digit string. So there is no need for year string validation Examples: Input: 1999/Output: 20th, Input: 2011/Output: 21st, Input: 2154/Output: 22nd.</p>
</div>

<div class="try-it">
  <h2>Scrabble</h2>
  <p>Have you ever played Scrabble or Words with Friends? Each player gets a set of tiles, with each tile having one letter printed on it. Using the tiles you have, your task is build words. Each letter has a point value (common letters are lower in value, less commonly used letter are worth a lot!) The player who has the most points wins.</p>
  <p>Your task today is to write a program that will calculate the score of any given word. Your function should take one argument (a word) and return an integer (the score of that word).</p>
  <p>Use this object to access the scores for each letter:</p>
  <code class="try-it-code">
  let letterScores = {<br>
      "A": 1, "B": 3, "C": 3, "D": 2,<br>
      "E": 1, "F": 4, "G": 2, "H": 4,<br>
      "I": 1, "J": 8, "K": 5, "L": 1,<br>
      "M": 3, "N": 1, "O": 1, "P": 3,<br>
      "Q": 10, "R": 1, "S": 1, "T": 1,<br>
      "U": 1, "V": 4, "W": 4, "X": 8,<br>
      "Y": 4, "Z": 10<br>
  }
  </code>
</div>

<div class="try-it">
  <h2>Trolls</h2>
  <p>Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls’ comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string “This website is for losers LOL!” would become “Ths wbst s fr lsrs LL!“. <em>Note: for this exercise, y isn’t considered a vowel.</em></p>
</div>
