---
title: Functions
---

## Learning Goals

* Use function syntax to package a set of commands, including arguments and return values
* Follow the flow of arguments throughout a function

## Technical Vocabulary

* Function
* Argument
* Return Value
* Declare
* Call (a function)
* Code Block

## What is a function?

You can think of a function as an action in our code. A function has a specific job, and it sits around waiting to be asked to do its job. It can have a very small job (add two numbers together) or a very big job (find the standard deviation of 1 million numbers). We get to write them so we have control over what their jobs are.

You may have seen these before - in JavaScript they are also called functions; in Ruby they are called methods. This is the meat of a program; without functions we can't do much.

Today, we will go through the syntax of functions in Swift, and make sure you have everything you need to start writing them! Let's pretend we have a robot who is going to help us run a dog walking service.

## Declaring Functions

Some people describe functions as 'packages of commands' - we usually group a few commands into one function. The function name should describe what its job is. Today, we are going to write a `walkDog` function, which will give a set of commands to the robot to walk a dog.

```swift
func walkDog() {  

}
```

<div class="try-it">
  <h2>Turn & Talk</h2>
  <p>With your partner, talk about, then write down a list of the steps in walking a dog.</p>
  <p>Then we will create a class list of steps to walk our dog, that will eventually go into our <code class="try-it-code">walkDog</code> function!</p>
</div>

## Syntax

To declare a function, we start with the `func` keyword. Then, like a variable, we choose the name of the function. After the functions name, we see `()`, an opened and closed parenthesis with nothing inside (for now). Lastly, we open up a `code block` with the `{}` curly braces. All the code that we want executed with this function must live inside of the code block.

```swift
func walkDog() {
  // steps
  // go
  // here
}
```

<div class="try-it">
  <h2>Try It: Declaring a Function</h2>
  <p>In an Xcode Playground, write this same <code class="try-it-code">walkDog</code>  function. Instead of <code class="try-it-code">//steps //go //here</code>, write print statements for each of the steps we wrote out on the board. Run the code. It should do ... nothing, for now.</p>
</div>

## Calling Functions

Why don't we see our print statements? One really convenient thing about functions is that they don't do their job until they are told to. We can give them a set of commands, and tell them to hang on to that information until we tell them to run. This command, telling them to run, is called **calling a function**.  The great thing about this is we can run a function multiple times! Check out the syntax to call a function:

```swift
func walkDog() {
  print("Put on leashes")
  print("walk forward")
  // etc...
}

walkDog()
```

Again, if a function is only declared, it will not do its job. We have to call it to tell it it is time to do its job. We can call a function as many times as you want. Add a call to your function and make sure it runs!

<div class="try-it">
  <h2>Try It: Writing Your Own Functions</h2>
  <p>Write two more functions - one for making a bowl of cereal and the other, you pick. Each function should print out at least two statements. Verify your functions are working by calling them.</p>
  <p><strong>Explore:</strong> What happens if you call your function on line 2, then declare it on line 4?
</p>
</div>

## Arguments

If we are really going to have this robot help out, we need it to be a little 'smarter'. We need it to know that if there are two dogs, it needs to put two leashes on, bring two poops bags, etc.

We can make functions a little 'smarter' with something called **arguments**. Arguments allow us to give a function special information. Using this information, it may make slightly different calculations or give us different outputs. Take a look at the code below, then we'll talk about what's happening:

```swift
func walkDog(numberOfDogs : Int) {
  print("There are \(numberOfDogs) dogs in the house")
}

walkDog(numberOfDogs : 4)
```

For the `walkDog` problem we've been working on, we'd like to tell the robot we have a certain number of dogs. In the examples above, we want to tell it we have 4 dogs. We have to change the code in two places to pass information to functions:
- **In the function declaration.** Notice the `()` parentheses are no longer empty, they now contain `numberOfDogs : Int`. This is telling the computer that we are expecting some information when the function is called. Specifically, we are expecting one piece of information, an integer. That integer has a variable name which we defined as `numberOfDogs`.
- **In the function call.** Notice the `()` parentheses are no longer empty, they now contain `numberOfDogs : 4`. This is telling the function that for this time it is run, we want the `numberOfDogs` to have the value of 4.

<div class="try-it">
  <h2>Try It: Arguments</h2>
  <p>Write a function called <code class="try-it-code">hello</code> that takes one argument, a string. In the code block, print out "Hello, Amy" assuming that "Amy" is the string passed in as an argument.</p>
</div>

## Return Values

We won't always just use functions to print things to the console - we'll have many functions that have different jobs, all working together to create one big program. Part of the way they do this is by **returning** a value. Return values can be any data type - strings, integers, arrays, and more. Check out this code below:

```swift
func walkDogs(numberOfDogs : Int) -> Int {

  return numberOfDogs
}

walkDogs(numberOfDogs : 3)
```

You probably observed two new things in this function:
- `-> Int` in between our parentheses and opening curly brace for the code block. This syntax indicates that we plan to return an Integer from this function.
- the `return` keyword. Up until now, we've been printing inside of functions, which is cool, but do really make powerful programs, we need to return. Over the next couple of days, you'll see the power of `return`. Keep in mind: `return` should almost always be used on the last line of the function.

<div class="try-it">
  <h2>Try It: Return Values</h2>
  <p>Inside your <code class="try-it-code">walkDog</code> function, create a <code class="try-it-code">lengthOfWalk</code> variable that multiplies the number of dogs by 15. Then on the next line, return <code class="try-it-code">lengthOfWalk</code>. Now run the function.</p>
  <p>Explore:</p>
  <ul>
    <li>What happens if you forget to include to <code class="try-it-code">-> Int</code> in your function declaration?</li>
    <li>What happens if you forget to use the <code class="try-it-code">return</code> keyword, when you have <code class="try-it-code">-> Int</code>  in the declaration?</li>
  </ul>
</div>

## How to use Return Values

If you are wondering... "This is all great - but where did that return value _go_? Who sees it? What can we do with it?" ... this section is for you. Sometimes we have many functions working together. Below is a simpler example, where we take the return value of a function and use it to write a custom sentence for our robot:

```swift
func walkDog(numberOfDogs : Int) -> Int {
  var lengthOfWalk = numberOfDogs * 15
  return lengthOfWalk
}

let minutesToWalk = walkDog(numberOfDogs : 3)
print("Please walk the dogs. I will expect to see you complete that task in \(minutesToWalk) minutes!")
```

The `let` was used because minutes to walk is not changed. If you are curious, try starting with `var` then noticing the warning Xcode throws.

## Swift Functions

Make sure that your use of functions is down pat by completing this partner activity below!

<div class="practice">
  <h2>Practice: Function</h2>
  <h3>Part 1: Functions</h3>
  <ul>
    <li>With your partner, brainstorm another task you'd like to have this robot complete. You should agree on using the same task that way you can check in with each other throughout the lab. Once you've decided on it, share with an instructor to make sure it will work for all activities, then go to the next step</li>
    <li>In your notebook, write out the small steps that your robot needs to take in order to complete the task</li>
    <li>In your playground declare and call the function - the code block should be empty</li>
    <li>To make 100% sure you are calling it correctly, write a print statement into the code block and make sure that appears in your console</li>
    <li>Now, write a print statement for each of the commands you wrote down in your notebook. Are they all printing out as expected?</li>
  </ul>
  <h3>Part 2: Arguments</h3>
  <ul>
    <li>Building off of your function already written - what information could you give this function to show different situations?</li>
    <li>Comment out your first function, and start over. This time, your function declaration should ask for an argument. It doesn't necessarily have to be an integer like the class example!</li>
    <li>Finish writing your function</li>
    <li>Call your function - a few times, passing in different arguments each time</li>
  </ul>
  <h3>Part 3: Return Values</h3>
  <ul>
    <li>With your partner, decide what information you want to return out of your function. What data type is most appropriate (string, integer, etc.)?</li>
    <li>In the declaration, tell your function you plan to return a value</li>
    <li>Use the return keyword to return the desired value</li>
    <li>Check yourself: did you return a number like "4" or a string like "Good job!"? To make this function dynamic, we should probably be returning a _variable_ that is storing something your calculated based on the argument passed in. Look back at the class example if you are stuck on this part!</li>
    <li>Call your function - a few times, passing in different arguments each time. STOP!</li>
    <li>Before you run your code, talk with your partner - what is the expected output/return value?</li>
  </ul>
  <h3>Extension: Multiple Arguments</h3>
  <ul>
    <li>What is another argument that could be passed in your function? Try it out! Not sure what the syntax looks like? You got this. Remember, strong developers are strong googlers, so feel free to look for examples online.</li>
    <li>Can you have more than 1 return value? How do you know?</li>
  </ul>
</div>
