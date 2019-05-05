---
title: DOM Manipulation
---

## Learning Goals

* Continue to learn how to access and use the Chrome Developer Tools
* Continue to develop a basic understanding for JavaScript syntax
* Understand how to query and update a page after its been loaded

**Note**: You will need to write your code in Atom and run in the browser for this lesson. You can either watch or go through <a target="blank" href="{{ site.url }}/web-app/lessons/setup-project-atom">this guide</a> or your instructor can walk you through how to connect HTML to a JavaScript file.

## Technical Vocabulary

- HTML Element
- CSS Selector
- DOM (Document Object Model)
- Event
- Event Listener
- Event Handler
- library
- jQuery

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
  <p>Create a folder called "dom" on your Desktop, and create an HTML and Javascript file inside of it. It's standard to title the JavaScript file <code class="try-it-code">index.js</code>.</p>
  <p>In your <code class="try-it-code">index.html</code>file, write at least 3 HTML elements. Give at least one a class and at least one an ID.</p>
  <p>In your <code class="try-it-code">index.js</code>file, write JavaScript to print each element to the console. Practice accessing elements by element type, class, and ID. Open the site in the browser, and open your dev tools. In the console panel, you should see your <code class="try-it-code">console.log</code> statements.</p>
  <p>Finished Early? Create a duplicate of one of your elements and run the code again. What anything different printed in the console? Use your google skills to research the difference between `.querySelector` and `.querySelectorAll`.</p>
</div>

## jQuery

There is a popular **library**, or chunk of code someone else wrote, called **jQuery**. There are a lot of things it can do, all of which are JavaScript, but it's less for us to write! Here's one example:

```javascript
var header = document.querySelector('h1');    // javascript

var header = $('h1');                         // jQuery
```

In jQuery, we can use the `$` in place of the `document.querySelector` which saves us time typing!

### Load jQuery into a CodePen

jQuery doesn't just magically "work" in a JavaScript file; we have to import the library. To do this, click the gear icon to open the settings next to "JS". Under "Add External Scripts/Pens", start typing in "jQuery", then select the first option. Click "Save & Close"

<img src="./assets/jquery.gif">

Keep in mind that when we use features of jQuery, we are still writing JavaScript. It's just a little "extra" on top! From here on out, we will use the jQuery `$` to access DOM elements.

### Load jQuery into a Project in Atom

On the line above your script tag for your JavaScript file, add this:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```

## Change Content on the DOM

Now that we can access elements and store them in a variable, the possibilities are endless! Let's start by programmatically changing the content of an element. We can use a tool called `.innerText` to change the text inside of an element.

```js
var header = $('h1');
header.innerText = "HIIII";
//=> In the browser, the hi now says HIIII
```

What's happening is, the `h1` element has an attribute called `innerText`. When we originally wrote the `h1`, we gave it an `innerText` value of "hello" by typing "hello" between the tags. JavaScript gives us a method to change that original text.

## Events

Events are really at the heart of DOM Manipulation. When we talked about user interaction earlier, that's exactly what events are. Events are any action that the user takes while on our site. Clicking a button, scrolling down, hovering over something, and more.

### Event Listener

In order for our site to respond to events, we need to write some code that so that our site becomes "smart" enough to know to lookout for a specific event on a specific element. These are called **event listeners**. Their job is to sit around and wait for an event to take place in the browser, and when it does, it will call a function for us.

This CodePen has an example of the syntax. Click "Edit on CodePen" to open it in the browser. Make sure to open the console in CodePen, then click the button. Click the button a second time. What do you see in the console?

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="js,result" data-user="turing-kwk" data-slug-hash="VNGRRv" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Check It Out: Event Listeners">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/VNGRRv/">
  Check It Out: Event Listeners</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

<div class="try-it">
  <h2>Turn & Talk</h2>
  <p>With your partner, read through each line of the JavaScript file in the CodePen above. Lines 1 and 5 should be somewhat familiar; but line 3 is brand-new. What is your prediction about what each part of the code is doing?</p>
  <p>Push It: The function <code class="try-it-code">doSomething</code> is never called with the syntax we've learned: <code class="try-it-code">doSomething</code>. Why not? What happens if we add <code class="try-it-code">()</code> after <code class="try-it-code">doSomething</code> on line 3?</p>
</div>

### Event Handler

The event listener is responsible for monitoring an element for events, and doing something when the event occurs. The **event handler** is the function that is called when the event occurs. In our previous example, the function `doSomething` was our event handler. These terms are commonly used interchangeably.

<div class="try-it">
  <h2>Try It: Event Listeners</h2>
  <p>In the files in the "dom" folder you created earlier, write an HTML <code class="try-it-code">button</code> and <code class="try-it-code">h1</code>.</p>
  <p>In the <code class="try-it-code">index.js</code>file, write code so that when the button is clicked, you print something to the console.</p>
  <p>Now, update your JavaScript so that when the button is clicked, the text in the <code class="try-it-code">h1</code> changes to something that it wasn't originally.</p>
</div>

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

Why does the button go back and forth between pink and purple? Try changing `toggleClass` to `addClass` - what happens? What happens when you change it to `removeClass`? Why?

Besides accessing CSS rules be classes, we can also add CSS property/values! Check out the code in the pen below:

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="js,result" data-user="turing-kwk" data-slug-hash="YMbvdP" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Check It Out: DOM Manipulation of CSS">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/YMbvdP/">
  Check It Out: DOM Manipulation of CSS</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Let's break this down.
- On lines 1-2, we declare the `submit` and `body` variables which are storing the submit button and body, respectively
- On line 3, we declare an event listener for the `submit` button
- On line 4, we declare the `selectedColor` variable which grabs the value off of the input with a class of `.color-input`, using `.val()`
- Line 5 is where the magic happens:

```javascript
body.css('backgroundColor', selectedColor);
```

  * `body` references the `body` variable
  * `.css` says: I'm about to give you directions on adding styles, or CSS rules. `.css` takes two arguments, a property and a value.
  * `backgroundColor` says: here is the property I'd like you to add to this element
  * `selectedColor` says: here is the value that goes with the property, in this case the value inside our `selectedColor` variable. We could change this to any color, hex, or rgba code.

This entire line of code accesses the body element and updates that elements styles, so we see the background color change in the browser!

<div class="try-it">
  <h2>Try It: Access CSS</h2>
  <p>In the files in the "dom" folder you created earlier, add some code in an event listener so that the color of the button changes.</p>
  <p>Finished Early? What other property/values can you implement through JavaScript?</p>
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

## Forms

In the HTML Forms lesson, we wrapped inputs in a `form` element. In this lesson, we've just left `input` elements floating around. The `form` element has some default behavior that can be tricky, but we'll briefly go into it.

By default, when a `form` is submitted, it will attempt to send that request somewhere (to our back-end, if we had one), then refresh the page. This is not ideal for us because we don't actually want to send information off or refresh the page. The video below illustrates the default behavior:

<iframe width="100%" height="560" frameborder="0" scrolling="no" src="https://screencast-o-matic.com/embed?sc=cqhebOZmE0&v=5&ff=1" allowfullscreen="true"></iframe>

While this can be inconvenient, we have a work-around! We can prevent the default behavior that the click usually causes. We will add one line of code to our event handler:

```js
function addName(event) {
  event.preventDefault();
  // the rest of your code here
}
```

The `event` variable we are passing around represents the click event. This is a little abstract, but when an event takes place, we have an object with a lot of information about that event. `.preventDefault()` is a function we can call on the event to prevent the refresh from occurring.

<div class="try-it">
  <h2>Try It: Refactor into a Form</h2>
  <p>Fork <a target="blank" href="https://codepen.io/turing-kwk/pen/YbKWbw?editors=1111">this CodePen</a> and refactor it so that the inputs are wrapped in a form. Make sure it has the same functionality it did before your refactor.</p>
</div>

Take some time to put together everything we've learned today and complete the practice below.

<div class="practice">
  <h2>Practice: DOM Manipulation</h2>
  <p>You can create a folder on your Desktop, or a CodePen. Don't forget to load jQuery into your project!</p>
  <p>Build a small site that has one input field for the user to type their name and a button to submit. When the user clicks the button, they should see a message with their name appear on the screen.</p>
</div>
