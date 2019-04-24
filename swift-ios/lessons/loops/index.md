---
title: For-In Loops
---

## Learning Goals

* Understand what a for-in loop is and why they are useful
* Write a for-in loop to accomplish repetitive code
* Use for-in loops to iterate over arrays and dictionaries

## Technical Vocabulary

* for-in loop
* array
* dictionary
* element
* index
* iterate

## What is a `for-in` loop?

A `for-in` loop is a block that will run code a specific number of times. It can iterate through a collection (array or dictionary) and do something with each element. Loops are very common and necessary parts of a programming language - every language has its version of getting this done.

`for-in` loops are useful whenever you want to repeat a bit of code a certain number of times. We can also use them to iterate over arrays and dictionaries, when we want to perform the same action on each element or key/value pair.

## Writing a `for-In` Loop

Let's learn how to write `for-in` loops. We will specify what we are working with, how many times the loop will run, and what the code will do each time.

A `for-in` loop has a few parts:

* The keyword `for` which begins the loop
* A name for the data we're working with
* The keyword `in`
* The number of times the loop will run

## For-In Loops and Arrays

We can use `for-in` loops to use data from an array. If we created an array of cute animals, we could write a `for-in` loop to do the same thing with each of the strings in our array.

```swift
var animals = ["red pandas", "giraffes", "sea turtles"]

for animal in animals {
  print("I love \(animal)!")"
}
```

<div class="try-it">
  <h2>Turn & Talk</h2>
  <ul>
    <li>What do you think will happen?</li>
    <li>What if we add another animal to our array?</li>
    <li>Why do you think we used the words "animal" and "animals" in our <code class="try-it-code">for-in</code> loop?</li>
  </ul>
</div>

### Breaking it Down

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

By using the word `animal` after the `for` keyword, we're telling our code that we can use `animal` like a variable, and its value for each iteration of the loop will be whatever element of the array it's currently iterating over.

## `for-in` Loops and Dictionaries

For the most part, the syntax for iterating over a dictionary looks very similar. Check it out:

```swift
var capitals = ["France": "Paris", "Cuba": "Havana", "Japan": "Tokyo"]

for pair in capitals {
  print(pair)
}
```
<div class="try-it">
  <h2>Turn & Talk</h2>
  <ul>
    <li>What do you think will print?</li>
    <li>Why does the variable <code class="try-it-code">pair</code> represent on each iteration?</li>
  </ul>
  <p>With your partner, verify your predictions from the Turn and Talk by running this code in an Xcode playground.</p>
  <p>Now, instead of printing <code class="try-it-code">pair</code> inside the loop, try printing <code class="try-it-code">pair.key</code> and <code class="try-it-code">pair.values</code> and see what happens.</p>
</div>

### Another Way to Iterative Over Dictionaries

Another cool thing you can do if you are going to utilize both keys and values, is something like this:

```swift
var capitals = ["France": "Paris", "Cuba": "Havana", "Japan": "Tokyo"]

for (country, capital) in capitals {
  print("The capital of \(country) is \(capital).")
}
```

<div class="try-it">
  <h2>Try It: Arrays & Dictionaries</h2>
  <h3>Array:</h3>
  <ul>
    <li>Create an array of the names of five of your friends</li>
    <li>Write a <code class="try-it-code">for-in</code> loop that uses each name and prints <code class="try-it-code">Hello, [friend's name]</code> to the console</li>
  </ul>
  <h3>Dictionary:</h3>
  <ul>
    <li>Create a dictionary of 3+ key/value pairs, where the keys are names of cities, and the values hold the distance between that city and your location (you'll need to do some research! You choose the cities!)</li>
    <li>Write a <code class="try-it-code">for-in</code> loop that uses each city and distance and prints <code class="try-it-code">You are currently ___ miles away from _____</code>.</li>
  </ul>
</div>

## `for-in` Loops _without_ Collections

We can also use `for-in` loops without a collection, like an array or dictionary. In this case, we would do this because we want to perform a certain action, a certain number of times. There are a couple differences in the syntax you might see when we aren't iterating over an array. See the code below:

```swift
for _ in 1...4 {
  print("Hello!")
}
```

Why didn't we use a variable here? We didn't _need_ one. We weren't iterating over an array and trying to do something with each element, so we use the underscore. If we did create a variable, for example `number`, instead of the `_` - it would behave as if we were iterating over [1, 2, 3, 4]. (This doesn't mean `1...4` really is an array, though.) If you're interesting in learning more about this, read up on [the Range documentation](https://developer.apple.com/documentation/swift/closedrange).

### Code for Partner Challenge

What's going on in this code?

```swift
var animals = ["red panda", "penguin", "polar bear"]

for index in 0..<animals.count {
  print("I love " + animals[index])
}
```

<div class="try-it">
  <h2>Partner Challenge</h2>
  <p>With your partner, take the following steps using the code snipper from above. Hint: Think about the lesson on arrays - how did we access information?</p>
  <ul>
    <li>What do you think <code class="try-it-code">index</code> stands for in our code?</li>
    <li>Can you figure out what is happening after the <code class="try-it-code">in</code> keyword?</li>
    <li>Take a few minutes to jot down your thoughts and guesses! Then try it out in an Xcode Playground.</li>
  </ul>
</div>

We are really getting int some complicated work. Work through the practice below to make you have this down.

<div class="practice">
  <h2>Practice: Loops</h2>
  <h3>Check Your Understanding</h3>
  <p>Let's take some time to answer the following questions in our journals, and then discuss our answers together.</p>
  <ul>
    <li>What is a for-in loop (in Swift)? What does it do?</li>
    <li>What are the different ways you can use a for-in loop?</li>
    <li>How can for-in loops be useful? What do you think is the point of them?</li>
    <li>Can you brainstorm some ways that one of your favorite apps might make use of a for-in loop?</li>
  </ul>
  <h3>Modify your friends names</h3>
  <p>Can you use the for-in loop to edit the strings in your friends array from just their names to their names plus an exclamation point? Consider:</p>
  <ul>
    <li>how to access an element in an array based on its index</li>
    <li>how to tell your for-in loop to run for the same number of times as the length of your array</li>
    <li>how to assign a new value to an element in an array</li>
    <li>how to add strings together</li>
  </ul>
</div>
