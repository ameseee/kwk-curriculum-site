---
title: DOM Manipulation
---

## Learning Goals

* Continue to learn how to access and use the Chrome Developer Tools
* Continue to develop a basic understanding for JavaScript syntax
* Understand how to query and update a page after its been loaded

**Note**: You will need to write your code in Atom and run in the browser for this lesson. You can either watch this video or your instructor can walk you through how to connect HTML to a JavaScript file.

## Technical Vocabulary

- HTML Element
- CSS Selector
- DOM (Document Object Model)
- Event
- Event Listener
- Event Handler

## What is the DOM?

The DOM, or Document Object Model, represents how HTML is read by the browser. It allows JavaScript to manipulate, structure, and style your website. After the browser reads your HTML document, it creates a representational tree called the Document Object Model and defines how that tree can be accessed.

Manipulating the DOM refers to changes that are made in the browser, that are prompted but not directly made by the user. If I type my email in a form then click "Submit", I might see a message like "Thanks for signing up!". I clicked the button and in response, JavaScript made that message appear. That is an example of DOM manipulation. Today we will learn how to change something on our site based on user interaction.

## Access Elements from the DOM

JavaScript has some `built-in` functions that allow us to access elements from the DOM. Here's an example of accessing an `h1` element.

```js
var header = document.querySelector('h1');
console.log(header);
//=> "<h1>hello</h1>"
```

Let's break this down:
- `document` - this tells the computer: please go over to the HTML document
- `.querySelector` - now that the computer is looking at the HTML document, this instruction says: I'd like you to look for something specific
- `('h1')` - this is the argument passed to the `.querySelector` function. It says: go look in the HTML document for the _first_ `h1` that you find.
- Since we stored the value of this in the `header` variable, we can `console.log()` this and see the HTML element.

We can also access elements by classes and IDs. Instead of `('h1')` we would need to write something like `('.class-name')` or `('#id-name')`, using the same selectors we would when writing CSS rules for classes or IDs.

<div class="try-it">
  <h2>Try It: Accessing Elements</h2>
  <p>Create a folder called "dom" on your Desktop, and create an HTML and Javascript file inside of it. It's standard to title the JavaScript file In your <code class="try-it-code">index.js</code>.</p>
  <p>In your <code class="try-it-code">index.html</code>file, write at least 3 HTML elements. Give at least one a class and at least one an ID.</p>
  <p>In your <code class="try-it-code">index.js</code>file, write JavaScript to print each element to the console. Practice accessing elements by element type, class, and ID.</p>
  <p>Finished Early? Create a duplicate of one of your elements and run the code again. What anything different printed in the console? Use your google skills to research the difference between `.querySelector` and `.querySelectorAll`.</p>
</div>

## Change Content on the DOM

Now that we can access elements and store them in a variable, the possibilities are endless! Let's start by programmatically changing the content of an element. We can use a tool called `.innerText` to change the text inside of an element.

```js
var header = document.querySelector('h1');
header.innerText = "HIIII";
//=> In the browser, the hi now says HIIII
```

What's happening is, the `h1` element has an attribute called `innerText`. When we originally wrote the `h1`, we gave it an `innerText` value of "hello" by typing "hello" between the tags. JavaScript gives us a method to change that original text.

## Events

Events are really at the heart of DOM Manipulation. When we talked about user interaction earlier, that's exactly what events are. Events are any action that the user takes while on our site. Clicking a button, scrolling down, hovering over something, and more.

### Event Listener

In order for our site to respond to events, we need to write some code that so that our site becomes "smart" enough to know to lookout for a specific event on a specific element. These are called **event listeners**. Their job is to sit around and wait for an event to take place in the browser, and when it does, it will call a function for us.

This CodePen has an example of the syntax. Click "Edit on CodePen" to open it in the browser. Make sure to open the console in CodePen, then click the button. Click it again.

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="js,result" data-user="turing-kwk" data-slug-hash="VNGRRv" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Check It Out: Event Listeners">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/VNGRRv/">
  Check It Out: Event Listeners</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

<div class="try-it">
  <h2>Turn & Talk</h2>
  <p>With your partner, read through each line of the JavaScript file in the CodePen. Lines 1 and 5 should be somewhat familiar; but line 3 is brand-new. What is your prediction about what each part of the code is doing?</p>
  <p>Push It: The function <code class="try-it-code">doSomething</code> is never called with the syntax we've learned: <code class="try-it-code">doSomething</code>. Why not? What happens if we add <code class="try-it-code">()</code> after <code class="try-it-code">doSomething</code> on line 3?</p>
</div>

### Event Handler

The event listener is responsible for monitoring an element for events, and doing something when the event occurs. The **event handler** is the function that is called when the event occurs. In our previous example, the function `doSomething` was our event handler. These terms are commonly used interchangeably.

## Access CSS

One cool thing about JavaScript since it's accessing your HTML elements, this includes the styles that have been applied to each element. It works kind of like `innerText`, it's a property on the element. However, we can't just print it out. We can add, remove, replace, or toggle classes.

Check this out:

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="css,result" data-user="turing-kwk" data-slug-hash="QPVLEb" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Check It Out: ClassList Property">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/QPVLEb/">
  Check It Out: ClassList Property</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

Why does the button go back and forth between pink and purple? Try changing `toggle` to `add` - what happens? What happens when you change it to `remove`? Why?

You've seen some examples of DOM Manipulation and it's probably starting to make some sense. It's really important that you can not only understand code you read, but be able to think through it as you write it yourself.

<div class="try-it">
  <h2>Try It: Event Listeners</h2>
  <p>In the files in the "dom" folder you created earlier, write an HTML <code class="try-it-code">button</code> and <code class="try-it-code">h1</code>.</p>
  <p>In the <code class="try-it-code">index.js</code>file, write code so that when the button is clicked, you print something to the console.</p>
  <p>Now, update your JavaScript so that when the button is clicked, the text in the <code class="try-it-code">h1</code> changes to something that it wasn't originally.</p>
  <p>Lastly, add something to your event handler that changes the styles of something on your site.</p>
</div>


## Inputs

Now we know how to write HTML forms, let's make them functional! Usually, the flow of interactions is as follows:
- User types in information
- User clicks a button
- User gets some sort of response

To make this happen, we will have to write code that:
- Listens for the button click
- Gets the information that user typed in
- Use that information in a message/response

Check out the CodePen below to see what that looks like in JavaScript:

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="css,result" data-user="turing-kwk" data-slug-hash="YMOMgE" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Check It Out: Forms with JS">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/YMOMgE/">
  Check It Out: Forms with JS</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

What was the line of code that allowed us to access the information the user typed in? What's new to us about this line of code? Note: the location of this is very important; it must be _inside_ the event handler.

Take some time to put together everything we've learned today and complete the practice below.

<div class="practice">
  <h2>Practice: DOM Manipulation</h2>
  <p>You can create a file folder, or add this to your code from the Try It about.</p>
  <p>Build a small site that has one input field for the user to type their name and a button to submit. When the user clicks the button, they should see a message with their name appear on the screen.</p>
</div>
