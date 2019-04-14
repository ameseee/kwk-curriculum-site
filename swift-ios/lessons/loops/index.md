# For-In Loops

## Learning Goals

* Students will understand what a for-in loop is and why they are useful
* Students will learn how to create a for-in loop to accomplish repetitive code
* Students will learn how to use for-in loops to iterate over arrays and dictionaries

## Technical Vocabulary

* For-In Loop
* Array
* Dictionary
* Element
* Index
* Iterate

## What is a for-in loop?

A `for-in` loop is a block that will run code a specific number of times. It can iterate through a collection (array or dictionary) and do something with each element. Loops are very common and necessary parts of a programming language - every language has their version of getting this done.

`For-in` loops are useful whenever you want to repeat a bit of code a certain number of times. We can also use them to iterate over arrays and dictionaries, when we want to perform the same action on each element or key/value pair.

## Writing a For-In Loop

Let's learn how to write `for-in` loops. We will specify what we are working with, how many times the loop will run, and what the code will do each time.

A `for-in` loop has a few parts:

* The keyword `for` which begins the loop
* A name for the data we're working with
* The keyword `in`
* The number of times the loop will run
  - The first number is the low point
  - The second number is the high point

## For-In Loops and Arrays

We can use `for-in` loops to use data from an array. If we created an array of cute animals, we could write a `for-in` loop to do the same thing with each of the strings in our array.

```swift
var animals = ["red pandas", "giraffes", "sea turtles"]

for animal in animals {
  print("I love \(animal)!")"
}
```

### Turn & Talk

* What do you think will happen?
* What if we add another animal to our array?
* Why do you think we used the words "animal" and "animals" in our `for-in` loop?

<br>
<br>
<br>
<br>

Let's try to understand what's going on here.

```swift
for animal in animals {
  print("I love " + animal)
}

// => I love red pandas
// => I love giraffes
// => I love sea turtles
```

The word `animal` right after the keyword `for` refers to each element of our array, and the `animals` after the `in` keyword is the name of the array we are telling the computer to iterate over. We've told our loop to run the same number of times as there are elements in the array. So, since we currently have 3 elements in the array, it will run three times. If we added another animal to our array, the loop would run four times.

By using the word `animal` after the `for` keyword, we're telling our code that we can use `animal` like a variable, and its value for each iteration of the loop will be whatever element of the array it's currently on.

## For-In Loops and Dictionaries

For the most part, the syntax for iterating over a dictionary looks very similar. Check it out:

```swift
var capitals = ["France": "Paris", "Cuba": "Havana", "Japan": "Tokyo"]

for pair in capitals {
  print(pair)
}
```

### Turn & Talk

* What do you think will print?
* Why does the variable "pair" represent on each iteration?

With your partner, verify your predictions from the Turn and Talk by running this code in an Xcode playground.

Now, instead of printing `pair` inside the loop, try printing `pair.key` and `pair.value` and see what happens.

Another cool thing you can do if you are going to utilize both keys and values, is something like this:

```swift
var capitals = ["France": "Paris", "Cuba": "Havana", "Japan": "Tokyo"]

for (country, capital) in capitals {
  print("The capital of \(country) is \(capital).")
}
```

### Practice - Arrays & Dictionaries

* Iterate over an array using a for-in loop:
  - Create an array of the names of five of your friends
  - Write a for-in loop that uses each name and prints `Hello, [friend's name]` to the console
* Iterate over a dictionary using these directions:
  - Create a dictionary of 3+ key/value pairs, where the keys are names of cities, and the values hold the distance between that city and your location (you'll need to do some research! You choose the cities!)
  - Write a for-in loop that uses each city and distance and prints `You are currently ___ miles away from _____`.

## For-In Loops _without_ Collections

We can also use `for-in` loops without a collection, like an array or dictionary. In this case, we would do this because we want to perform a certain action, a certain number of times. There are a couple differences in the syntax you might see when we aren't iterating over an array. See the code below:

```swift
for _ in 1...4 {
  print("Hello!")
}
```

Why didn't we use a variable here? We didn't _need_ one. We weren't iterating over an array and trying to do something with each element, so we use the underscore. If we did create a variable, for example `number`, instead of the `_` - it would behave as if we were iterating over [1, 2, 3, 4]. This doesn't mean 1...4 really is an array, though. If you're interesting in learning more about this, read up on [this documentation](https://developer.apple.com/documentation/swift/closedrange).

### Partner Challenge

What's going on in this code?

```swift
var animals = ["red panda", "penguin", "polar bear"]

for index in 0..<animals.count {
  print("I love " + animals[index])
}
```

Think about the lesson on arrays - how did we access information?
- What do you think `index` stands for in our code?
- Can you figure out what is happening after the `in` keyword?
- Take a few minutes to jot down your thoughts and guesses! Then try it out in an Xcode Playground.

## Vocabulary Reflection

* For-In Loop
* Iterate

## Practice

### Part 1: Check Your Understanding

Let's take some time to answer the following questions in our journals, and then discuss our answers together.

- What is a `for-in` loop (in Swift)? What does it do?
- What are the different ways you can use a `for-in` loop?
- How can `for-in` loops be useful? What do you think is the point of them?
- Can you brainstorm some ways that one of your favorite apps might make use of a `for-in` loop?

### Part 2: Modify your friends names

Can you use the `for-in` loop to edit the strings in your friends array from just their names to their names plus an exclamation point? Consider:

- how to access an element in an array based on its index
- how to tell your `for-in` loop to run for the same number of times as the length of your array
- how to assign a new value to an element in an array
- how to add strings together

Don't forget to write down your notes so you can remember and share them later!
