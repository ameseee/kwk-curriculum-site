---
title: Conditionals
---

## Learning Goals

* User comparison operators to compare variables, strings, and numbers
* Write and understand conditional logic

## Technical Vocabulary

- Boolean
- Condition
- Conditionals
- Evaluate
- Expression
- Operators
- Statement

## Conditionals

Every programming language has conditionals. If you've worked in Python or Java you've probably seen something similar to what we'll be working on today!

Conditionals let us instruct our program to do something **if** a certain condition is met. In one web application, there are hundreds if not thousands of conditionals written into the code. Without conditions, web applications would not be able to do much customization for each user.

## Comparison Operators

Swift gives us a way to compare values. Each **expression** below will be **evaluated** to a **boolean**, true or false.

```swift
3 < 5
//=> true

4 >= 9
//=> false

7 == 7
//=> true

"karlie" == "karlie"
//-> true

"karlie" == "Karlie"
//-> false
```

Notice the `==`. This checks if two pieces of data are equal to each other. The assignment operator (`=`), assigns the value of a variable. These two are **very** different!

<div class="try-it">
  <h2>Explore: Operators</h2>
  <p>Look at each expression below and the value it evaluates to. Based on that information, try to determine what that operator does.</p>
</div>

```swift
3 != 4
//=> true

5 != 5
//=> false

4 != 9
//=> true
```

```swift
11 % 2
//=> 1

32 % 6
//=> 2

16 % 3
//=> 1

15 % 3
//=> 0
```

The `not equal` operator - `!=` - checks that two values are not equal. It is the opposite of our `==` operator - the first `=` is replaced with an `!`.

The `modulo` operator - `%` - finds the remainder of the two numbers. It is a helpful tool to determine if numbers are even or odd. Learn more <a target="blank" href="https://www.codevscolor.com/swift-odd-even-check/">here</a>!

### Comparing Variables

We can use our comparison operators on variables as well! Let's look at this example:

```js
var language = "Swift";

language == "swift"
//=> false

language == "Swift"
//=> true

"swift" == language
//=> false

var year = 2020;
var nextYear = 2021;

year > 2000
//=> true

year != 2019
//=> true

year < nextYear
//=> true
```

<div class="try-it">
  <h2>Try It: Comparison Operators</h2>
  <p>Declare two variables - <code class="try-it-code">firstName</code> and <code class="try-it-code">age</code>, and assign them to appropriate values. Now, check for the following things:</p>
  <ul>
    <li>Is your name the same as "Karlie"?</li>
    <li>Is your age the same as 15?</li>
    <li>Is your age not the same as 15?</li>
    <li>Is your age greater than 7?</li>
    <li>Is your age less than or equal to 10?</li>
    <li>Is your age less than or equal to 10?</li>
    <li>What is the remainder when you age is divided by 2?</li>
  </ul>
  <p><strong>Medium Challenge:</strong> Have you ever tried to create a password, but the application told you you need at least 8 characters? Time to solve a real-world challenge! Declare a new variable called <code class="try-it-code">fakePassword</code> and assign it to a string of your choice. Then, check that the value stored in <code class="try-it-code">fakePassword</code> is equal to or greater than 8 characters. Change the string that <code class="try-it-code">fakePassword</code> is assigned to a  couple times to make 100% sure it's working as expected.</p>
</div>

## Conditionals

Just like in real life, programming is full of decisions. We usually make decisions based on our current state or mood.

**A real life example:**

Am I hungry?

  Yes ➡ I'll eat

  No  ➡ I won't eat

**A programming example:**

Do you have an account?

  Yes ➡ Please log in

  No  ➡ Please create an account

<br>

Swift gives us a way to ask those questions **and** provide different outcomes based on the answer. They are called **conditionals**. Here's an example:

```js
var queen = "Beyoncé"

if queen == "Beyoncé" {
  print("You are correct!")
} else {
  print("Beyoncé is the only queen.")
}
```

For the example above, "You are correct!" will print to the console. Let's break this down line-by-line.

```js
var queen = "Beyoncé"            // new variable created

if queen == "Beyoncé" {          // program checks for this condition
                                // if it evaluates to true, it will execute this block
  print("You are correct!")
} else {                        // if it evaluates to false, it will execute this block
  print("Beyoncé is the only queen.")
}
```
We call this entire piece of code an `if statement`.

After the keyword `if`, we have to give Swift an expression that can be evaluated to `true` or `false`. That expression is called a **condition**.
- If the condition evaluates to `true`, the code in the block below it will execute, or run. It will then ignore the rest of the options.
- If it evaluates to `false`, it will check the condition in the next block.

<div class="try-it">
  <h2>Try It: Conditionals</h2>
  <ul>
    <li>Create a variable named <code class="try-it-code">luckyNumber</code> and assign it to a number of your choice.</li>
    <li>Write an if statement checking if <code class="try-it-code">luckyNumber</code> is less than 50, which if evaluated to true, prints out a sentence (you choose!). If it is evaluated to false, it should print out a different sentence.</li>
  </ul>
  <p><strong>Medium Challenge:</strong> Using your <code class="try-it-code">luckyNumber</code>, write a new conditional. If the lucky number equals 13, the output should be "You got it!". If it is too high, the output should be "Guess lower...", and it is too low, the output should be "Guess higher..."</p>
  <p><strong>Spicy Challenge:</strong> Using your <code class="try-it-code">luckyNumber</code>, write a new conditional. If the lucky number equals 13, the output should be "You got it!". If it is not, the output should be customized based on how far the number is from the <code class="try-it-code">luckyNumber</code>. There should be one output when the number is within 10 of the lucky number, and one when there's a difference of more than 10. For example, if the number is 20, the output might be: "So close, you are just 7 off.". If the number is 100, the output might be "Ouch you are not even close. Off by 87!".</p>
</div>

Sometimes we may want to provide more than two options. Look at the use of `else if`:

```js
var queen = "Beyoncé"

if queen == "Beyoncé" {
  print("You are correct!")
} else if queen == "Elizabeth II" {
  print("I guess you are technically right...")
} else {
  print("Beyoncé is the only queen.")
}
```

Takeaways:
- We can use any comparison operator in a condition
- We can use strings or numbers in a condition
- If a condition evaluates to true, the code below (block) it will run
- Only one block of code will run for each `if` statement

<div class="try-it">
  <h2>Try It: Conditionals</h2>
  <ul>
    <li>Create a variable named <code class="try-it-code">favoriteFood</code> and assign it to a string of your favorite food</li>
    <li>Write an if statement comparing your favorite to 'Chipotle', which if evaluated to true, prints out a sentence of your choice</li>
    <li>Write an else if statement comparing your favorite to 'Starbucks', which if evaluated to true, prints out a sentence of your choice</li>
    <li>Write another else if - you choose what you compare it to</li>
    <li>Write an else statement that prints out a sentence of your choice</li>
    <li>Try changing the value of your <code class="try-it-code">favoriteFood</code> variable to "Chipotle", then "Starbucks" (if it wasn't already). Do you get what you expected?</li>
  </ul>
  <br>
  <p><strong>Medium Challenge:</strong> Write a program that checks a string. It should print to the console "even" if the number of characters in the text is even, and "odd" if the number of characters in the text is odd.</p>
</div>

## Conditionals

<div class="practice">
  <h2>Practice: Operators & Conditionals</h2>
  <p>For each of these exercises, you should use <code class="try-it-code">print</code> to print your output or feedback.</p>
  <p>Declare a variable called <code class="try-it-code">numberOfScholars</code> and assign it to any number. Write a condition that checks the number of scholars. If there are less than 24, output "There is room for more - welcome!". If there are already 24 or 25 scholars, output "Oh no, we're going to have to put you on the waiting list." If there are more than 25 scholars, output "We are so sorry but we are booked. Would you like to sign up for next year?"</p>
  <p><strong>Medium Challenge:</strong> Declare a new variable <code class="try-it-code">number</code> and assign it to any number. If it is a multiple of 3, print "Fizz". If it is a multiple of 5, print "Buzz". If it is a multiple of both 3 and 5, print "FizzBuzz". If it isn't a multiple of 3 or 5, just print out the number.</p>
  <p><strong>Spicy Challenge:</strong> Have you ever tried to create a password, but the application told you that <em>you need at least 1 number and between 8 and 14 characters total</em>? Time to solve another real-world challenge! Declare a new variable called <code class="try-it-code">fakePassword</code> and assign it to a string of your choice. Write a conditional that checks the value of <code class="try-it-code">fakePassword</code> and gives appropriate feedback on if it is a valid password (contains at least 1 number and between 8 and 14 characters total).</p>
</div>

<!--
## Learning Goals

* Students will use comparison operators
* Students will use if/else if statements to control flow of an application

## Technical Vocabulary

* Condition
* Comparison Operator
* Evaluate

## Flow Control IRL

In life, we make decisions based on our current situation:
* If I'm hungry, I'll eat
* If I'm tired, I'll take a nap

<div class="try-it">
  <h2>Turn and Talk</h2>
  <p>What are some other examples where we make decisions in real life?</p>
  <p>How about in apps or programs?</p>
</div>

## Flow Control In Programming

We do the same thing in programming:
* If a user is signed in, they see their account
* If a user is not signed in, they are prompted to do so

The idea of an application doing different things, going in different directions based on what the user wants is called *flow control*. It's a very important concept because it is constantly being used, no matter what language you work in!

### Comparison Operators

Before we get into flow control, we need to be able to use what are called **comparison operators**. Similar to how they sound, they compare things.
You have seen < and > in math class, right? We use those in code, too!

* Compare Integers with <, >, <=, >=, ==, !=
* Compare Strings with ==, !=
* Compare variables
* Every comparison evaluates to either `true` or `false`

<div class="try-it">
  <h2>Try It: Comparison Operators</h2>
  <p>In a Swift Playground, see what returns when you run each of the following comparisons:</p>

  <code class="try-it-code">5 < 3</code><br>
  <code class="try-it-code">12 > 7</code><br>
  <code class="try-it-code">6 != 8</code><br>
  <code class="try-it-code">7 == "7"</code><br><br>
  <code class="try-it-code">"karlie" == "karlie"</code><br>
  <code class="try-it-code">"karlie" == " karlie"</code><br>
  <code class="try-it-code">"Karlie" == "karlie"</code><br><br>

  <code class="try-it-code">var luckyNum = 7</code><br>
  <code class="try-it-code">luckyNum < 10</code><br>
  <code class="try-it-code">luckyNum == 7</code><br><br>
</div>

## `if` Syntax

Now that we know how to compare things, we can tell our program to take a different path based on what a certain variable may or may not be! We use this by writing an `if statement`. Essentially, it says, "If <code>my situation is equal to true</code>, then do this thing!"
Let's look at this example.

```swift
var dogAge = 1

if dogAge < 2 {
  print("You are a puppy 🐶")
}
```

We have a variable `dogAge` assigned to the integer of 1. Next we see the `if` keyword - this tells the computer, please wait and listen for what I'm about to give you - I'll need you to check if it is true or false. Then we provide what is called a **condition**. If the condition is evaluated to `true`, the computer looks inside the curly braces and executes any code it finds there.

In this situation, `dogAge` == 1, which _is_ less than 2, so this condition evaluates to `true`. The computer then reads the code inside the curly braces, and prints out, "You are a puppy 🐶"

What will happen if we changed dogAge to 4? Because `4 < 2` evaluates to `false`, our program will not go inside the code block. In this case, _nothing_ will happen.

## What if we want several options?

Instead of just telling puppies that they are puppies, I'd like to tell dogs over the age of 12 that they are elderly, and all the dogs in between puppies and elderlies that they are also awesome. I could write out several `if statements`, but that seems kind of tedious...

```swift
if dogAge < 2 {
  print("You are a puppy 🐶")
}

if dogAge == 2 {
  print("You are awesome!")
}

if dogAge == 3 {
  print("You are awesome!")
}

if dogAge == 4 {
  print("You are awesome!")
}

// etc.

if dogAge > 12 {
  print("You are elderly 💗")
}

```

### `else if` and `else`

The Swift language also gives us this keyword/phrase - `else if`. It works JUST like `if` - takes a condition to evaluate, then runs a code block if the condition is met.

We also get this `else statement`, which 'catches' any other situation. If the dog is not less than 2 or greater than 12, the else code will be executed. Notice that the `else statement` does not evaluate a condition - if none of the previous conditions were met, our program will run the `else` block.

```swift
if dogAge < 2 {
  print("You are a puppy 🐶")
}
else if dogAge > 12 {
  print("You are elderly 💗")
}
else {
  print("You are also awesome 🐾")
}
```

<div class="try-it">
  <h2>Try It: Control Flow</h2>
  <ul>
    <li>Create a variable named <code>favoriteFood</code> and assign it to a string of your favorite food</li>
    <li>Write an <code>if statement</code> comparing your favorite to 'Chipotle', which if evaluates to true, prints out a sentence (you choose!)</li>
    <li>Write an <code>else if statement</code> comparing your favorite to 'Starbucks', which if evaluated to true, prints out a sentence (you choose!)</li>
    <li>Write another <code>else if</code> - you choose what you compare it to.</li>
    <li>Write an <code>else statement</code> that prints out a sentence of your choice</li>
    <li>Try changing your <code>favoriteFood</code> to Chipotle, then Starbucks (if it wasn't already). Do you get what you expected?</li>
  </ul>
</div>

## Swift Conditionals

Practice putting all of these skills together by completing the prompts below. Keep in mind - there is more than one correct solution - you and your partner may have the same outcome, but quite different code!

<div class="practice">
  <h2>Practice: Control Flow</h2>

  <h3>Part 1 - Do you already have an account?</h3>
  <p>You're working on building the next facebook. The app needs to have that screen that asks someone to either login or create an account.</p>
  <p>Starting with the variable <code>var hasAccount = false</code>, write a conditional that prints either "Please log in!" or "Let's get some information to create an account for you.". Make sure it's working as expected. Change the value of your variable to <code>true</code> and you should see the other sentence print.</p>

  <h3>Part 2 - Which School?</h3>
  <p>Write a conditional that tells a student if they are in elementary, middle, or high school based on their grade level.</p>

  <h3>Part 3 - Journal</h3>
  <ul>
    <li>What does the computer do when it sees the keyword <code class="try-it-code">if</code>?</li>
    <li>What can be used to compare strings and numbers?</li>
    <li>Does <code class="try-it-code">==</code> care about capitalized letters? Spaces?</li>
    <li>What about writing/reading conditionals can be confusing?</li>
  </ul>
</div> -->
