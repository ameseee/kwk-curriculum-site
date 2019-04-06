# Conditionals

## Learning Goals

* Students will use if/else if statements to control flow of an application
* Students will use comparison operators

## Technical Vocabulary

* Condition
* Comparison Operator
* Evaluate

## Flow Control - IRL

In life, we make decisions based on our current situation:
* If I'm hungry, I'll eat
* If I'm tired, I'll take a nap

### Turn and Talk

What are some other examples where we make decisions in real life? How about in apps or programs?

<br>
<br>
<br>
<br>

We do the same thing in programming:
* If a user is signed in, they see their account
* If no one is signed in, the user is prompted to do so

The idea of an application doing different things, going in different directions based on what the user wants is called *flow control*. It's a very important concept because it is constantly being used - no matter what language you work in!

### Comparison Operators

Before we get into flow control, we need to be able to use what are called **comparison operators**. Similar to how they sound, they compare things.
You have seen < and > in math class, right? We use those in code, too!

* Compare Integers with <, >, <=, >=, ==, !=
* Compare Strings with ==, !=
* Compare variables
* Every comparison evaluates to either `true` or `false`

### Practice

In a Swift Playground, see what returns when you run each of the following comparisons:

```swift
5 < 3
12 > 7
6 != 8
7 == "7"
"puppy" == "puppy"
"Puppy" == "puppy"

var luckyNum = 7
luckyNum < 10
luckyNum == 7
```

## `if` Syntax

Now that we know how to compare things, we can tell our program to take a different path based on what a certain variable may or may not be! We use this by writing an `if statement`. Essentially, it says, "If <my situation is equal to true>, then do this thing!"
Let's look at this example.

```swift
dogAge = 1

if dogAge < 2 {
  print("You are a puppy 🐶")
}
```

We have a variable `dogAge` assigned to the integer of 1. Next we see the `if` keyword - this tells the computer, please wait and listen for what I'm about to give you - I'll need you to check if it is true or false. Then we provide what is called a **condition**. If the condition is `true`, the computer looks inside the curly braces and executes any code it finds there.

In this situation, `dogAge` == 1, which _is_ less than 2, so this condition evaluates to `true`. The computer then reads the code inside the curly braces, and prints out, "You are a puppy 🐶"

What will happen if we changed dogAge to 4? Because `4 < 2` evaluates to false, our program will not go inside the code block. In this case, _nothing_ will happen.

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

### else if and else

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

etc...
```

## Practice

* Create a variable named `favoriteFood` and assign it to a string of your favorite food
* Write an `if statement` comparing your favorite to 'Chipotle', which if evaluates to true, prints out a sentence (you choose!)
* Write an `else if statement` comparing your favorite to 'Starbucks', which if evaluated to true, prints out a sentence (you choose!)
* Write another `else if` - you choose what you compare it to.
* Write an `else statement` that prints out a sentence of your choice
* Try changing your `favoriteFood` to Chipotle, then Starbucks (if it wasn't already). Do you get what you expected?

## Vocabulary Reflection

* Condition
* Comparison Operator
* Evaluate

## Practice

### Part 1 - Do you already have an account?

You're working on building the next facebook. The app needs to have that screen that asks someone to either login or create an account.

Starting with the variable `var hasAccount = false`, write a conditional that prints either "Please log in!" or "Let's get some information to create an account for you.". Make sure it's working as expected. Change the value of your variable to `true` and you should see the other sentence print.

### Part 2 - Which School?

Write a conditional that tells a student if they are in elementary, middle, or high school based on their grade level.

## Closing

As we close our tutorial time, we'll either write in our journals or discuss as a group:

- What does the computer do when it sees the keyword `if`?
- What can be used to compare strings and numbers?
- Does `==` care about capitalized letters? Spaces?
- What about writing/reading conditionals can be confusing?
