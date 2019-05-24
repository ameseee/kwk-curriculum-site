---
title: Collections
---

## Learning Goals

* Understand what an array is and why they are useful
* Use `for` loops to iterate over arrays
* Create an arrays & objects and access data from them
* Understand why we sometimes choose to use objects over arrays (and vice versa)

## Technical Vocabulary

- collection
- array
- element
- index
- loop
- object
- key/value pair

## Collections

Collections are data types that hold _multiple things_ - think about your grandma’s cat statue collection - there is probably more than one, right?

In JavaScript, we will be working with two types of collections: arrays and objects. Arrays and objects have some things in common, but they are distinctly different data types, and used for different purposes.

## Arrays

Arrays are useful whenever you need to keep track of an ordered list of things. This is similar to how we keep track of lists in the real world. When we write out a to-do list, we use one piece of paper to keep track of all the tasks we need to complete.

An array is an ordered collection that stores multiple values. An array can store any kind of element - from numbers to strings to ... other arrays. Elements inside an array are separated by a comma.

<div class="try-it">
  <h2>Turn & Talk</h2>
  <p>Think about Instagram or Facebook - where might those applications use arrays?</p>
</div>

### Syntax

```js
// An array of strings:
var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "T Swift", "Jimmy Fallon"];

// An array of numbers:
var temperatures = [78, 72, 81, 75];
```

### Access an Element

Each element in an array is automatically assigned a number called an index. This index can be used to access a specific element inside the array. Indices begin at 0 and count up. If we look back at our `friendsOfKarlie` array, the following would be true:

```js
var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "T Swift", "Jimmy Fallon"];
```
- "Michelle Obama" has an index of 0
- "Serena Williams" has an index of 1
- "T Swift" has an index of 2
- "Jimmy Fallon" has an index of 3

By using the square brackets, we can use the index to access a specific value in an array.

```js
var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "T Swift", "Jimmy Fallon"];

console.log(friendsOfKarlie[0]);
//-> "Michelle Obama"

console.log(friendsOfKarlie[2]);
//-> "T Swift"
```

We can also check how many elements are in an array with the `.length` property:

```js
var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "T Swift", "Jimmy Fallon"];
friendsOfKarlie.length;
//-> 4
 ```

<div class="try-it">
  <h2>Try It: Creating Arrays</h2>
  <p>In a new CodePen titled "Arrays", create a variable that stores an array of at least 4 strings - you choose what the content is about.</p>
  <p>Write a series of <code class="try-it-code">console.log()</code> statements: print out the first element, the last element, and the second element. </p>
</div>

### Updating Elements

We can also update elements with the square bracket syntax we looked at earlier. We access the index value that we would like to change, and then reassign a new value for that index with a =.

```js
var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "T Swift", "Jimmy Fallon"];

friendsOfKarlie[2] = "Josh Kushner";

console.log(languages);
//-> ["Michelle Obama", "Serena Williams", "Josh Kushner", "Jimmy Fallon"]
```

### Adding Elements

A common way to add something to an already existing array is to use the `push()` method - which will add an element to the end of the array.

```js
var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "Josh Kushner", "Jimmy Fallon"];

friendsOfKarlie.push("T Swift");

console.log(friendsOfKarlie);
//-> ["Michelle Obama", "Serena Williams", "Josh Kushner", "Jimmy Fallon", "T Swift"]
```

In the code snippet above, you can see that `.push()` is called on the friendsOfKarlie array, then we give it an argument of the new element we want to be added on the array.

### Removing Elements

There are a few ways we can remove elements from an array. Most often, we either want to remove the first or last element. To do this, we have the `pop()` and `shift()` methods. Check it out:

```js
var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "Josh Kushner", "Jimmy Fallon", "T Swift"];

languages.pop();

console.log(languages);
//-> ["Michelle Obama", "Serena Williams", "Josh Kushner", "Jimmy Fallon"]

languages.shift();

console.log(languages);
//-> ["Serena Williams", "Josh Kushner", "Jimmy Fallon"]
```

A little different from `.push()`, `.pop()` and `.shift()` do not take arguments - they know what to do. `.pop()` removes the last element from an array, and `.shift()` removes the first.

<div class="try-it">
  <h2>Try It: Modifying Arrays</h2>
  <p>For this, you will use the array you wrote in the previous Try It. </p>
  <p>Practice accessing specific elements. Make sure to <code class="try-it-code">console.log()</code> to verify you are accessing what you think you are.</p>
  <p>Now, add two new elements into your array. Use a <code class="try-it-code">console.log()</code> to make sure they have been added.</p>
  <p>Lastly, remove at least two elements from your array. Again, make sure they have been removed by printing to the console.</p>
</div>

### Random Elements

Sometimes, we want to pull an element out of an array at random - have any of your teachers ever used popsicle sticks to decide who to call on? That's a real life example. We can do the same thing with programming!

JavaScript gives us a tool called `Math` to do advanced math, like square roots, logarithms, etc. Included in that are some options on how to use it. We've got:

- `Math.random()` - returns a random decimal between 0 and 1
- `Math.round(x)` - returns the value of a number rounded to the nearest integer
- `Math.floor()` - returns the value of a number rounded down to the nearest integer


Let's work on generating a random number between 1 and 20.

First, generate a random decimal:

```js
var randomDecimal = Math.random();
//-> 0.5617898712887952 (this number will vary)
```

Now, let's multiply it by 20:

```js
var randomDecimal = Math.random();
//-> 0.5617898712887952 (this number will vary)

var random = randomDecimal * 20;
//-> 11.235797425775903
```

We still don't have a nice integer as expected, so let's round it down:

```js
var random = randomDecimal * 20;
//-> 11.235797425775903

var final = Math.floor(random);
//-> 11
```

Going back to `why would this be useful`? A teacher could have a program with an array of names, like this:

```js
var students = ["Leta", "Ellen Mary", "Pam", "Megan", "Amy", "Sarah", "Robyn", "Courtney", "Rachel", "Allison", "Ruby", "Maile", "Julie", "Meg", "Christie", "Emmie", "Aurora", "Tori", "Kerry", "Juliana"];
```

Now, the teacher can write a `pickStudent` function:

```js
function pickStudent() {
  var random = Math.random() * 20;
  var rounded = Math.floor(random);
  var student = students[rounded];
  return student;
}
```

### Loops

There are times when we want to repeat the same operation multiple times over a set of data. Loops allow us to do just that by running through our data one by one and executing code to accomplish a goal.

For example, for each item in a list (maybe an array…) if a conditional returns true, a code block will be run and the condition will be checked again. This pattern will be repeated until the conditional returns false.

Let’s take a look at the structure of the most commonly used type, the for loop:

```js
for ([initialExpression]; [condition]; [incrementExpression]) {
  statement
}
```

Which looks like this when we implement it in code:

```js
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```

If we break this down, we see that our loop is constructed from the following parts:

- the keyword `for`
- a set of rules, or conditions `(var i = 0; i < 5; i++)`
- opening and closing curly braces which contain our code (code block)
- the code that we want our loop to execute: `console.log(i);`

What do each of the three things inside the condition mean?
- `initialExpression`: This is the starting point, we create a variable that acts as a counter.
- `condition`: The sets the condition for when the loop **stops** running.
- `incrementExpression`: This tells the counter what to increase by each time the loop runs

As a class, let's run this look in a CodePen and talk through what's happening.

### Looping over Arrays

`for` loops are commonly used to iterate over the items in an array. To do this, we use the length of the array as the `condition`.

```js
var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "T Swift", "Jimmy Fallon"];

for (var i = 0; i < friendsOfKarlie.length; i++) {
  console.log(`👋 Hi, ${friendsOfKarlie[i]}!`);
}
```

Our `initialExpression` tells us that our counter, the variable `i` starts at 0. The `condition` tells us that the code inside the block will run the same number of times as the number of elements in our array. The `incrementExpression` tells us that each time the block runs and comes back to run again `i` will increase by 1. Since we are accessing `friendsOfKarlie[i]`, each time we print the sentence out, it will fill in the next friend in the array.

This is what will print to the console:

```js
//-> 👋 Hi, Michelle Obama!
//-> 👋 Hi, Serena Williams!
//-> 👋 Hi, T Swift!
//-> 👋 Hi, Jimmy Fallon!
```

The benefit of this is it saves us time. When we want do to the same thing for lots of items, we only have to write that command once. If we didn’t use an array and use this `for` loop, out code would look like this:

```js
console.log(`👋 Hi, ${friendsOfKarlie[0]}!`);
console.log(`👋 Hi, ${friendsOfKarlie[1]}!`);
console.log(`👋 Hi, ${friendsOfKarlie[2]}!`);
console.log(`👋 Hi, ${friendsOfKarlie[3]}!`);
```

Right now, this doesn’t seem so bad. What if we had 100 friends on our list? 1000? That’s a lot of lines of code to write and a lot of places we would need to update it every time we added or removed a friend.

<div class="try-it">
  <h2>Try It: Looping over Arrays</h2>
  <p>For this, you will continue use the array you wrote in the previous Try Its.</p>
  <p>Loop over the array, and print the the console the same words, but in ALL CAPS!</p>
  <p>Finish early? Create an array of numbers representing hours worked. Loop over the array and print out the product of each number and 20, representing the pay for each hour. Then print out a complete sentence using string interpolation.</p>
</div>

## Another Way To Iterate

Another way to iterate over arrays is using the `.forEach` function that is built-in to JavaScript. Here's what it looks like:

```javascript
var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "T Swift", "Jimmy Fallon"];

friendsOfKarlie.forEach(function(friend) {
  console.log(friend);
});
```

<div class="try-it">
  <h2>Turn & Talk: forEach</h2>
  <p>With your partner, talk about what you think is happening on each line of the code above.</p>
  <p>Once you've made your predictions, type this code out in a CodePen and see what happens. Were your predictions accurate?</p>
</div>
<br>

Let's break this code down:
- `friendsOfKarlie` is the array we are going to iterate over
- `.forEach()` is a built-in function that basically builds a for loop. It takes on argument, a function. This is different from anything we've seen before. It's saying it will run this function _for each_ element in the array.
- `function(friend) {` is the function that will run on each element in the array. `friend` is the variable that represents the current element in the array that is being iterated over.
  -  `console.log(friend)` is the code that will run for each element. In this case, each friend in the array will print to the console.

<div class="try-it">
  <h2>Try It: forEach</h2>
  <p>In a CodePen, write an array with at least four elements, strings, of things you want to learn.</p>
  <p>Write a <code class="try-it-code">forEach</code> for this array and print out "I want to learn ____" for each element.</p>
</div>

## Objects

Objects are another way to hold multiple pieces of data (collection). There is one big difference between them and arrays: Objects are not ordered by index (0, 1, 2, etc.), instead, each piece of data has a ‘label’ instead of a number. We call the labels `keys` and the data `values`. `key/value pairs` is a term you will hear a lot.

### When to use Objects

We just got the hang of arrays and are feeling pretty great about them - why do we also need dictionaries?

- When we don’t care about the order of items (array)
- When we need an associative relationship (title for some info)

If I wanted to make a list of all the dogs in my apartment building, I should use an array. They are all strings, they are all the same thing. I don’t care about how old they are, or their owners, names, or anything else.

If I wanted to make a list of all the dogs in my apartment building and their birthday so that we can throw a party for each of them, I should use an object. There is an associative relationship between each dog and it’s birthday.

<div class="try-it">
  <h2>Try It: Array or Object?</h2>
  <p>For each set of data, would an array or object be better to store it? Why?</p>
  <ul>
    <li>List of all of the students in class</li>
    <li>List of states and their capitals</li>
    <li>List of things to pack for vacation</li>
    <li>Names of all the Instagram accounts I follow</li>
    <li>List of scholars and the school they attend</li>
  </ul>
</div>

### Syntax

Instead of a list of programming languages we want to learn, let's write a list of popular programming languages and the year they were invented:

```js
var languages = {
  "Go": 2009,
  "Swift": 2014,
  "Python": 1990,
  "PHP": 1995
}
```

Each of the keys, also referred to as properties, is in a string. Each value is a number. Each key/value pair is separated by a comma.

### Access a Value

To access a value, we will use the label, or `key`, associated with it.

```js
console.log(languages["Go"]);
//-> 2009

console.log(languages["PHP"]);
//-> 1995
```

<div class="try-it">
  <h2>Try It: Creating and Accessing Objects</h2>
  <p>Create an object with a list of 3 people (yourself, family, friends, or other students here!) and their birthdays.</p>
  <p>Use <code>console.log()</code> statements to verify your syntax is correct. Then use a <code>console.log()</code> statement to practice accessing specific pieces of data. Try to print your birthday by using the <code>[]</code> notation.</p>
</div>

### Updating, Adding & Removing Data

We won't go into detail on how to do this here as it likely won't be used during camp. If you are curious to learn more or find yourself needing a resource while working on your personal project, here are a couple resources.
- [JavaScript Info](https://javascript.info/object)
- [Free Code Camp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object/)

## Putting It All Together

Arrays and objects are both types of collections with different purposes and uses. It's important to have an understanding of their job and the ability to create and identify them. However, remember that even professional developers can't remember it all and have to use their resources!

<img class="small" src="./assets/kelly-vaughn.png" alt="Tweet about having to google even with 15 years of experience">

<div class="practice">
  <h2>Practice: Arrays</h2>
  <ul>
    <li>Create an array of your top five favorite hobbies</li>
    <li>Change at least one of the values in the array</li>
    <li>Add a new hobby to the array</li>
    <li>Remove the last hobby from the array</li>
    <li>Print the value of the third element of the array</li>
    <li>Print one hobby to the console, at random.</li>
    <li>You should have five hobbies in your array. Using a for loop and string interpolation, iterate over the values in your array in order to print five strings that say "I love ______!"</li>
  </ul>

  <h2>Practice: Objects</h2>
  <p>Create an object with keys that are family or friend titles (i.e. "sister", "bestFriend") and values that are the name of that family member or friend. Pets are family, too!</p>
  <ul>
    <li>Aim to have at least 6 family members of friends in your 'tree'</li>
    <li>Print to the console the entire object</li>
    <li>Print to the console 3 individual names</li>
  </ul>
</div>
