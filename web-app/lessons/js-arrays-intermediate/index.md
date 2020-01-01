---
title: Intermediate Arrays
---

## Learning Goals

* Explain the concept of iteration
* Use JavaScript syntax to iterate over an array

## Technical Vocabulary

- Collection
- Array
- Element
- Index
- Iterate

## Warm Up



## Iteration

There are times when we want to repeat the same operation multiple times over a set of data. Loops allow us to do just that by running through our data one by one and executing code to accomplish a goal.

For example, for each item in a list (maybe an array…) if a conditional returns true, a code block will be run and the condition will be checked again. This pattern will be repeated until the conditional returns false.

## Iterator Methods

There are times when we want to repeat the same operation multiple times over a set of data. Loops allow us to do just that by running through our data one by one and executing code to accomplish a goal.

For example, for each item in a list (maybe an array…) if a conditional returns true, a code block will be run and the condition will be checked again. This pattern will be repeated until the conditional returns false.

## `forEach`

The benefit of loops is they save us time. When we want do to the same thing for lots of items, we only have to write that command once. If we didn’t use an array and use the `forEach` method, out code would look like this:

```js
console.log(`👋 Hi, ${friendsOfKarlie[0]}!`);
console.log(`👋 Hi, ${friendsOfKarlie[1]}!`);
console.log(`👋 Hi, ${friendsOfKarlie[2]}!`);
console.log(`👋 Hi, ${friendsOfKarlie[3]}!`);
```

Right now, this doesn’t seem so bad. What if we had 100 friends on our list? 1000? That’s a lot of lines of code to write and a lot of places we would need to update it every time we added or removed a friend.

### Syntax

```javascript
var friendsOfKarlie = ["Michelle Obama", "Serena Williams", "T Swift", "Jimmy Fallon"];

friendsOfKarlie.forEach(function(friend) {
  console.log(friend);
});
```

Let's break this code down:
- `friendsOfKarlie` is the array we are going to iterate over
- `.forEach()` is a built-in function that runs through each element of the array it is called on, one-by-one. It takes on argument, a function. This is different from anything we've seen before. It's saying it will run this function _for each_ element in the array.
- `function(friend) {` is the function that will run on each element in the array. `friend` is the variable that represents the current element in the array that is being iterated over.
-  `console.log(friend)` is the code that will run for each element. In this case, each friend in the array will print to the console.

<div class="try-it">
  <h2>Turn & Talk: <code class="try-it-code">forEach</code></h2>
  <p>With your partner, talk about what you think is happening on each line of the code above.</p>
  <p>Once you've made your predictions, type this code out in a CodePen and see what happens. Were your predictions accurate?</p>
</div>
<br>

<div class="try-it">
  <h2>Try It: forEach</h2>
  <p>In a CodePen, write an array with at least four elements, strings, of things you want to learn.</p>
  <p>Write a <code class="try-it-code">forEach</code> for this array and print out "I want to learn ____" for each element.</p>
</div>

<div class="try-it">
  <h2>Try It: Looping over Arrays</h2>
  <p>For this, you will continue use the array you wrote in the previous Try Its.</p>
  <p>Loop over the array, and print the the console the same words, but in ALL CAPS!</p>
  <p>Finish early? Create an array of numbers representing hours worked. Loop over the array and print out the product of each number and 20, representing the pay for each hour. Then print out a complete sentence using string interpolation.</p>
</div>
