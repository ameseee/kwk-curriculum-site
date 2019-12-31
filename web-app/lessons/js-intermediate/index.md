---
title: Intermediate JavaScript
---

## Learning Goals

* User comparison operators to compare variables, strings, and numbers
* Write and understand conditional logic

## Technical Vocabulary

- boolean
- operators
- conditionals
- evaluate

## Operators

We can also compare values. Each statement below will be **evaluated** to a **boolean**, true or false.

```js
3 < 5
//=> true

4 >= 9
//=> false

7 === 7
//=> true

"karlie" === "karlie"
//-> true

"karlie" === "Karlie"
//-> false
```

Notice the `===`. This checks if two pieces of data are equal to each other. The assignment operator (`=`), assigns the value of a variable. These two are **very** different!

<div class="try-it">
  <h2>Explore: Operators</h2>
  <p>Look at each statement below and the value it evaluates to. Based on that information, try to determine what that operator does.</p>
</div>

```js
3 !== 4
//=> true

5 !== 5
//=> false

4 !== 9
//=> true
```

```js
11 % 2
//=> 1

32 % 6
//=> 2

16 % 3
//=> 1
```

The `not equal` operator - `!==` - checks that two values are not equal. It is the opposite of our `===` operator - the first `=` is replaced with an `!`.

The `modulo` operator - `%` - finds the remainder of the two numbers. It is a helpful tool to determine if numbers are even or odd. Learn more <a target="blank" href="https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/">here</a>!

## Conditionals

Just like in real life, programming is full of decisions. We usually make decisions based on our current state or mood.

A real life example:

Am I hungry?
Yes ➡ I'll eat
No  ➡ I won't eat

A programming example:

Do you have an account?
Yes ➡ Please log in
No  ➡ Please create an account

JavaScript, like most all languages, gives us a mechanism to ask those questions and provide different outcomes based on the answer:

```js
var queen = "Beyonce";

if (queen == "Beyonce") {
  console.log("You are correct!")
} else {
  console.log("Beyonce is the only queen.")
}
```

For the example above, "You are correct!" will print to the console. Let's break this down line-by-line.

```js
var queen = "Beyonce";          // new variable created

if (queen == "Beyonce") {       // program checks for this condition
                                // if it evaluates to true, it will execute this block
  console.log("You are correct!")
} else {                        // if it evaluates to false, it will execute this block
  console.log("Beyonce is the only queen.")
}
```

In the parenthesis after `if`, we have to give JavaScript something that can be evaluated to `true` or `false`. We call this an `if statement`. If it evaluates to `true`, the code in the block below it will execute, or run. It will ignore the rest of the options. If it evaluates to `false`, it will try the next block.

Sometimes we may want to provide more than two options. Look at the use of `else if`:

```js
var queen = "Beyonce";

if (queen == "Beyonce") {
  console.log("You are correct!")
} else if (queen == "Elizabeth II") {
  console.log("I guess you are technically right...")
} else {
  console.log("Beyonce is the only queen.")
}
```

<div class="try-it">
  <h2>Try It: Conditionals</h2>
  <p>For this Try It, type all your code in the JavaScript editor in CodePen. To see if it's working, look below at the console.</p>
  <ul>
    <li>Create a variable named <code class="try-it-code">favoriteFood</code> and assign it to a string of your favorite food.</li>
    <li>Write an if statement comparing your favorite to 'Chipotle', which if evaluated to true, prints out a sentence (you choose!)</li>
    <li>Write an else if statement comparing your favorite to 'Starbucks', which if evaluated to true, prints out a sentence (you choose!)</li>
    <li>Write another else if - you choose what you compare it to.</li>
    <li>Write an else statement that prints out a sentence of your choice.</li>
    <li>Try changing your <code class="try-it-code">favoriteFood</code> to Chipotle, then Starbucks (if it wasn't already). Do you get what you expected?</li>
  </ul>
</div>

## JavaScript

JavaScript is pretty different from HTML and CSS. There is a lot more going on, and for the things we are going to build, a lot more to learn. You've built the foundations today, and are on your way to building some awesome apps!

<div class="practice">
  <h2>Practice: JS Foundations</h2>
  <p>Write a program that checks a string. It should print to the console "even" if the number of characters in the text is even, and "odd" if the number of characters in the text is odd.</p>
</div>
