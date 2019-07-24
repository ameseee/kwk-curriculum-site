---
title: Intro to JavaScript
---

## Learning Goals

* Use variables to store strings and numbers
* User comparison operators to compare variables, strings, and numbers
* Write and understand conditional logic

**Note**: For this class, we will only be working in CodePen.

## Technical Vocabulary

- variable
- string
- interpolation
- operators
- conditionals

## What is JavaScript?

JavaScript is the language of the internet. It is commonly confused with <a target="blank" href="https://www.seguetech.com/java-vs-javascript-difference/">Java</a>, but they are two very different languages. As of now, we can build very good looking sites, but they don't _do_ much. JavaScript is what allows our pages to be dynamic - show your name in the top corner to indicate you are signed in, change information on the screen based on what you type in a form, etc.

If we compare a web app to a human body, we can think of HTML as a skeleton, CSS as clothes and accessories, and JavaScript as the muscle.

## Strings

You can think of strings as a series of characters (alpha, numeric, spaces, and special characters) between two quote marks, like so:

```js
'hello, world!'
```

In JavaScript, strings can be either double quoted (“like this”) or single quoted (‘like this’).

In order to experiment with strings, we’ll click on the console button in CodePen:

<img src="./assets/console1.png" alt="">

<div class="try-it">
  <h2>Try It: Strings</h2>
  <p>In your CodePen console, type <code class="try-it-code">"your name"</code>.</p>
  <p>Now, type <code class="try-it-code">"your name".length</code>. (Instead of the words "your name", type your actual name).</p>
  <p>What printed as the output? Check with your neighbor - did you get the same thing? What does <code class="try-it-code">.length</code> do?</p>
</div>

## `console.log()`

Right now, we can see the strings we type in when we hit enter. However, we won’t always be writing our code in the console, so let’s move to a more realistic way of writing our JavaScript.

Keep the console open, but **in the JavaScript editor tab** on Codepen, type the following:

```js
console.log('hello, world!');
```

You should see "hello, world!" appear in the console. This isn’t super exciting right now, but let’s build on it.

## Variables

In most programming languages, including JavaScript, you can save values to variables. Unlike in math class, where we would use x or y and a number, variables in programming are much more flexible. For example, here are three variables, each of which has a string as its value.

```js
var name = "Beyonce";
var firstHit = "Crazy In Love";
var documentary = "Homecoming";
```

To define a variable, we use the `var` keyword followed by an arbitrary name we choose for the variable. Notice that all of the variables start with a lowercase letter. If you are choosing a variable name that has two words, uppercase the first letter of the second word. This is called camelCase.

After naming the variable, we use the `=` sign to show what value the variable will hold.

We can now `console.log()` any of these variables we have defined. The example below defines three variables, but only one will be logged to the console.

```js
var name = "Beyonce";
var firstHit = "Crazy In Love";
var documentary = "Homecoming";

console.log(name);
```

We can also include variable data in a sentence. This is called **interpolation**:

```js
console.log(`The first ${name} hit was ${firstHit}.`);
//=> The first Beyonce hit was Crazy In Love.
```

Make sure to use the back-ticks when you are using string interpolation (to the left of the 1 on your keyboard); it will _not_ work with regular single or double quotes.

<div class="try-it">
  <h2>Try It: Strings and Variables</h2>
  <p>Complete the following in a CodePen. You should type your code in the JavaScript editor of the CodePen, and see the results in the console.</p>
  <p>If you have the strings "Karlie" and "Kloss" in the following variables:</p>
  <code class="try-it-code">var first = "Karlie"</code><br>
  <code class="try-it-code">var last = "Kloss"</code>
  <p>Use string interpolation to complete the following:</p>
  <ul>
    <li>What code can you write to output the string "KarlieKloss"?</li>
    <li>What code can you write to output the string "KlossKarlie"?</li>
    <li>What code can you write to output the string "Karlie Kloss"?</li>
    <li>What code can you write to output the string "Kloss Karlie Kloss Karlie"?</li>
    <li>What code can you write to output the string "I love Karlie"?</li>
  </ul>
</div>

## Numbers

Like we saw with strings above, we can also store numbers in variables.

```js
var sisters = 3;
var age = 26;
```

We can also do math with numbers in JavaScript! The same math operators you are used to from class work here.

```js
3 + 5
//=> 8

12 / 2
//=> 6

(3 + 2) * 8
//=> 40
```

As you can see from the last example above, we can also use parenthesis and the Order of Operation holds true here as well.

## Operators

We can also compare values. The return value is a **boolean**, true or false.

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

We have some other helpful operators that may be newer to you. Look at each snippet of code and it's return value, then predict what the operator does.

```js
3 != 4
//=> true

5 != 5
//=> false

32 % 6
//=> 2

16 % 3
//=> 1
```

The modulo operator is a helpful tool to determine if numbers are even or odd. Learn more <a target="blank" href="https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/">here</a>!

We can also use math on variables, if those variables hold numbers.

```js
var name = "Karlie";
var tinsOfKookies = 1200;
var mealsDonatedPerTin = 10;

var mealsDonated = tinsOfKookies * mealsDonatedPerTin;

console.log(mealsDonated);
console.log(`Because ${tinsOfKookies} were purchased during Fashion's Night Out, ${mealsDonated} meals were donated to starving children all over the world. Thanks, ${name}!`);
//=> "Because 1200 were purchased during Fashion's Night Out, 12,000 meals were donated to starving children all over the world. Thanks, Karlie!"
```

<div class="try-it">
  <h2>Try It: Numbers & Operators</h2>
  <p>Start with these numbers:</p>
  <code class="try-it-code">var a = 12</code><br>
  <code class="try-it-code">var b = 65</code><br>
  <code class="try-it-code">var c = 31</code><br>
  <code class="try-it-code">var d = 98</code>
  <p>Write code to find the average of these four numbers.</p><br>
  <p>Find the answer to this problem using JavaScript: On average, there are 23.5 scholars at each Kode With Klossy camp this year. If there are 36 camps taking place, about how many scholars are attending in total?</p>
  <p>Push It: Print out to the console a complete sentence with your answer to the problem about Kode With Klossy scholars nation-wide.</p>
</div>

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
