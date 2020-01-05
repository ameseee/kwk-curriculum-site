---
title: Functions
---

## Learning Goals

* Be familiar with the syntax to write and call a function
* Explain the flow of arguments/variables through a function

## Technical Vocabulary

- Argument
- Call/Run
- Declare
- Function
- Parameter
- Return Value

## Warm Up

With your partner, choose one application or website that you both like to use.

You will have one minute to click through the application as you normally would while using it.
- Partner A should be the "user" - clicking, scrolling, etc.
- Partner B should be tallying the number of times the application DOES something (examples: load content, respond to a click/tap by showing a different screen or new content, etc.)

To build a web application, developers write LOTS of functions. Every time you click a button and see something happened, a function (or many functions) just performed its job. Every time you see new data load (you account page, someone else's profile page, detail of an image, etc.), a function just performed its job.

As we start learning about functions today, we won't be writing ones quite as involved as some that are powering your favorite apps - but we will get the foundations!

## What is a Function?

A function is an action in our code. It has a specific job, and it sits around waiting to be asked to do it. It can perform its job as many or as few times as we tell it to. It can have a very small job (add two numbers together) or a very big job (find the standard deviation of 1 million numbers). We get to write them so we have control over what each function does!

In our class example today, we will write instructions for a robot to walk a dog.

## Declare a Function

Here's what a very basic function **declaration** looks like:

```js
function walkDog() {
  // code goes here
}
```

We start with the keyword `function`, then name our function whatever we want. The name should describe the type of action our function is taking. Like variables, we use camelCase.

Directly after the function name, we see an open and close parentheses, then an open and close curly bracket. The directions we want our function to take will live inside the curly braces. We can give a function as many directions as we'd like!

Let's add some of the steps our robot needs to take to walk a dog. For now, we will use `console.log()` to print out the steps so we know when our function is working.

```js
function walkDog() {
  console.log("Put on leash");
  console.log("Put treats in pocket");
  console.log("Put poop bag in pocket");
}
```

Now, this code alone won't do anything. We have **declared** the function - told it what its job is. But we haven't **called** the function - or told it to carry out its job.

## Call a Function

We have a really nice function written, but we need to **call** it for it to run. The nice thing about functions is you can decide when they do their job. Maybe we only want a certain function to run when a user interacts with our site in a specific way. This puts us in complete control.

```js
function walkDog() {
  console.log("Put on leash");
  console.log("Put treats in pocket");
  console.log("Put poop bag in pocket");
}

walkDog();
```

The last line of the code snippet is what **calls** the function. If we have this code in a CodePen, and open up the console, we should see each step printed out.

<div class="try-it">
  <h2>Try It: Declaring & Calling a Function</h2>
  <p>Declare and call a function named <code class="try-it-code">sayHello</code>. Write 2-4 <code class="try-it-code">console.log</code> statements in it, saying whatever you'd like. Verify that it is running successfully by checking the console for the sentences.</p>
  <p>Declare and call a function named <code class="try-it-code">sayGoodbye</code>. Write 2-4 <code class="try-it-code">console.log</code> statements in it, saying whatever you'd like. Verify that it is running successfully by checking the console for the sentences.</p>
  <p><strong>Medium Challenge:</strong> Did your <code class="try-it-code">sayHello</code> sentences print before or after your <code class="try-it-code">sayGoodbye</code> sentences? Why?</p>
</div>

## Arguments and Parameters

If we are really going to have this robot help out, we need it to be a little 'smarter'. We need it to know that if there are two dogs, it needs to put two leashes on, bring two poops bags, etc.

We can make functions a little 'smarter' with something called **arguments** and **parameters**. Check out the code below, then we'll talk about what is happening:

```js
function walkDog(numberOfDogs) {
  console.log(`Put on ${numberOfDogs} leashes`);
  console.log(`Put ${numberOfDogs} treats in pocket`);
  console.log(`Put ${numberOfDogs} poop bags in pocket`);
}

walkDog(2);

//=>Put on 2 leashes
//=>Put 2 treats in pocket
//=>Put 2 poop bags in pocket

walkDog(7);

//=>Put on 7 leashes
//=>Put 7 treats in pocket
//=>Put 7 poop bags in pocket
```

To allow our functions to be more _dynamic_, or work in more situations, we can write the declaration with **parameters**. The parameter(s) live inside the parenthesis right after the function name. If there are more than one, they should be separated by a comma and a space.

When we call the function, it will now be expecting an **argument**. The argument is the value(s) you want to store to the parameter variable(s).

In our example above, `walkDog(2)` was called. `2` was the argument that was passed in. So, the parameter `numberOfDogs` is now a variable that holds the value of `2`. Anytime `numberOfDogs` is referenced inside of this function for this one time its being run, `2` will be the value it points to.

Below, `walkDog(7)` was called. Anytime `numberOfDogs` is referenced inside of this function for this one time its being run, `7` will be the value it points to.

### Using Parameters Like Variables

We can also do some calculations with our parameters - just like we've done with variables. Let's say we want to set an expectation that the robot walks each dog for 15 minutes. We can use the parameter to tailor the total number of minutes walked for each walk.

```js
function timeToWalk(numberOfDogs) {
  var totalMinutes = numberOfDogs * 15;
  console.log(`You should walk a total of ${totalMinutes} minutes.`);
}
```

<div class="try-it">
  <h2>Try It: Arguments & Parameters</h2>
  <p><strong>Mild Challenge:</strong> Write a function that will take 1 argument when called, a number. The function should <code class="try-it-code">console.log</code> the sum of that number and 5. Make sure to name your function something related to its job.</p>
  <p><strong>Medium Challenge:</strong> Write a function that will take 2 arguments when called, both being numbers, and that will <code class="try-it-code">console.log</code> the sum of those two numbers. Make sure to name your function something related to its job.</p>
  <p><strong>Spicy Challenge:</strong> Write a function that will take 3 arguments when called, all being numbers. It should sum the first two numbers, then multiply that sum by the third number and <code class="try-it-code">console.log</code> the result. Make sure to name your function something related to its job.</p>
</div>

## Return Values

Up until now, inside our functions we've only called `console.log` on values - in the future we will need our functions to return values so we can use them elsewhere. This may not completely make sense now, but in the next couple lessons all the pieces will tie together. It's good to get some exposure to it today.

```js
function timeToWalk(numberOfDogs) {
  var totalMinutes = numberOfDogs * 15;
  return totalMinutes;
}
```

In this function, we are not calling `console.log`, so when we call it, we won't see an output. But, we can store the output in another variable.

```js
function timeToWalk(numberOfDogs) {
  var totalMinutes = numberOfDogs * 15;
  return totalMinutes;
}

var minutes = timeToWalk(3);
console.log(`You should walk a total of ${minutes} minutes.`);
//=> You should walk a total of 3 minutes.
```

A couple things to know about `return`:
- Each function can only return **one** value
- If we don't explicitly return a value with the return keyword, the default return value is `undefined`
- Once the program reads the `return` keyword and the rest of the code on that line, it will exit that function. So, no code written below the `return` keyword will ever be read.

<div class="try-it">
  <h2>Turn & Talk</h2>
  <p>With your partner, read through each line of the code above. With as much technical vocabulary as possible, explain what is happening at each line.</p>
</div>

Takeaways:
- `function timeToWalk(numberOfDogs) {` declares the function
- `var totalMinutes = numberOfDogs * 15;` declares a new variable that store the result of 15 multiplied by the number passed into the function
- `return totalMinutes;` returns the value of the `totalMinutes` variable
- `var minutes = timeToWalk(3);` calls the function `timeToWalk` and passes in 3 as the argument. The return value of that is stored in the new variable `minutes`

### Incorporating Conditionals

If we were only walking 1 dog, the sentences would read incorrectly, for example "put on 1 leashes". Let's write a conditional inside the function; if the `numberOfDogs` passed in is 1, we will print out one set of directions, and if it is greater than 1, we will print out another set.

```js
function walkDog(numberOfDogs) {
  if (numberOfDogs === 1) {
    console.log(`Put on ${numberOfDogs} leash`);
    console.log(`Put ${numberOfDogs} treat in pocket`);
    console.log(`Put ${numberOfDogs} poop bag in pocket`);
  } else {    
    console.log(`Put on ${numberOfDogs} leashes`);
    console.log(`Put ${numberOfDogs} treats in pocket`);
    console.log(`Put ${numberOfDogs} poop bags in pocket`);
  }
}
```

<div class="try-it">
  <h2>Try It: Logic Inside a Function</h2>
  <p>Write a function that takes one argument, a <code class="try-it-code">gradeLevel</code>. It should then print out "You are in elementary school" or "You are in middle school", etc. based on the grade level passed in.</p>
  <p>Now, write another function that takes in a number, a <code class="try-it-code">dogAge</code>, and multiplies it by 7. It should print out a sentence telling the dog how old it is in human years.</p>
</div>

## Functions

Over the course of camp, we will write a lot of functions! They will have different jobs, and some will look quite different from ours today, but you've got a great foundation. Get a little more practice by completing the task below.

<div class="practice">
  <h2>Practice: Functions, Arguments, Return Values</h2>
  <p>As a class, let's brainstorm another task that we can give our robot.</p>
  <p>With your partner, decide which task you'd like to write code for. Make a list of steps that would be required to complete the task. Make a list of possible arguments you could pass the function to make it dynamic. Get your lists approved, then declare and call your function.</p>
  <p>Now, re-write your function so it not only <code>console.log</code>s data, but returns a value. Store the return value in a variable.</p>
</div>
