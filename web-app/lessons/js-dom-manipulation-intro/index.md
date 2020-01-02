---
title: Intro to DOM Manipulation
---

## Learning Goals

* Use the console in the Chrome Developer Tools
* Query and update a page after its been loaded
* Respond to user interactions with event listeners

## Technical Vocabulary

- HTML Element
- CSS Selector
- DOM (Document Object Model)
- Event
- Event Listener
- Event Handler
- library
- jQuery

## Warm Up

- Watch a video then do some sort of scavenger hunt??
- Console.logging to the Dev Tools console
- clearing the console

## What is the DOM?

The **DOM**, or Document Object Model, represents how HTML is read by the browser. It allows JavaScript to interact with your HTML, which ultimately lets us manipulate, structure, and style our websites.

**Manipulating the DOM** refers to changes that are made in the browser, that are prompted but not directly made by the user.

Here's a real-life example of DOM Manipulation:
> If I type my email in a form then click "Submit", I might see a message like "Thanks for signing up!".

I clicked the button and in response, JavaScript made that message appear. In this lesson, we will learn how to change something on our site based on user interaction.

<div class="try-it">
  <h2>Turn & Talk</h2>
  <p class="to-do">opportunity for sponsor integration</p>
  <p>Visit the ____ site. Where do you think the developers used DOM manipulation?</p>
</div>

## Access Elements from the DOM

Accessing elements is the first step in building out the functionality to respond to user input. By the end of this lesson, you'll be able to let a user click a button, and see something happen on the screen in response to the click. We have a lot to learn in the meantime, but we will take it step by step.

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

We can also access elements by classes. Instead of `('h1')` we would need to write something like `('.class-name')` , using the same selectors we would when writing CSS rules for classes.

<div class="try-it">
  <h2>Try It: Accessing Elements</h2>
  <p>Create a new CodePen.</p>
  <p>In your HTML file, write at least 3 HTML elements. Give at least one of the elements a class.</p>
  <p>In your JavaScript pane, write code to print each element to the console. Practice accessing elements by element type or class. In the console panel, you should see your <code class="try-it-code">console.log</code> statements.</p>
  <p><strong>Medium Challenge:</strong> Create a duplicate of one of your elements in HTML and run the code again. Was anything different printed in the console? Use your google skills to research the difference between <code class="try-it-code">.querySelector</code> and <code class="try-it-code">.querySelectorAll</code>.</p>
</div>

## jQuery

There is a popular **library**, or chunk of code someone else wrote, called **jQuery**. There are a lot of things it can do, all of which are JavaScript, but it's less for us to write! Here's one example:

```javascript
var header = document.querySelector('h1');    // JavaScript

var header = $('h1');                         // jQuery
```

In jQuery, we can use the `$` in place of the `document.querySelector` which saves us time typing!

### Load jQuery into a CodePen

jQuery doesn't just magically "work" in a JavaScript file; we have to import the library. To do this, click the gear icon to open the settings next to "JS". Under "Add External Scripts/Pens", start typing in "jQuery", then select the first option. Click "Save & Close"

<img src="./assets/jquery.gif">

Keep in mind that when we use features of jQuery, we are still writing JavaScript. It's just a little "extra" on top! From here on out, we will use the jQuery `$` to access DOM elements.

<div class="try-it">
  <h2>Try It: Access Elements with jQuery</h2>
  <p>Create a new CodePen. Follow the steps above to load jQuery into this pen.</p>
  <p>In the HTML file, create an <code class="try-it-code">h1</code> and two <code class="try-it-code">p</code> elements.</p>
  <p>In the JavaScript file, use the jQuery <code class="try-it-code">$</code> syntax to access all three elements and store them in variables. Then, <code class="try-it-code">console.log()</code> all three variables to make sure you stored the elements correctly.</p>
  <p><em>Keep in mind that from here on out you'll have to do this for each CodePen that you are going to use the jQuery <code class="try-it-code">$</code> in!</em></p>
</div>

## Change Content on the DOM

Now that we can access elements and store them in a variable, the possibilities are endless! Let's start by programmatically changing the content of an element. We can use a tool called `.text` to change the text inside of an element.

```js
var header = $('h1');
header.text("HIIII");
//=> In the browser, the hi now says HIIII
```

What's happening? The `h1` element has an attribute called `text`. When we originally wrote the `h1`, we gave it an `text` value of "hello" by typing "hello" between the tags. jQuery gives us a method to change that original text. Whatever string is passed into, or typed into the parenthesis after, `.text` will replace the text inside of the `h1`.


<div class="try-it">
  <h2>Try It: Change Text</h2>
  <p>Continue working in the CodePen from the last Try It.</p>
  <p>By only adding code to the JavaScript file, change the text inside of all three elements.</p>
  <p><strong>Medium Challenge:</strong> If you changed the text of the <code class="try-it-code">h1</code> on one line of code, then on the line below changed it to something else, which one would show in the browser? Why? </p>
</div>

This was interesting, but we could have just written different text inside the HTML tags to accomplish what we just did here. It was mentioned earlier, we are taking today's concept step by step. Move on to Event Listeners and you'll start seeing some ✨magic✨ happen!

## Events

Events are really at the core of DOM Manipulation. When we talked about user interaction earlier, that's exactly what events are. An **event** is any action that the user takes while on our site. Clicking a button, scrolling down, hovering over something, and more.

### Event Listener

In order for our site to respond to events, we need to write some code that so that our site becomes "smart" enough to lookout for a specific event on a specific element. This "lookout" is called an **event listener**. Their job is to sit around and wait for an event to take place in the browser, and when it does, it will call a function for us.

This CodePen has an example of the syntax. Click "Edit on CodePen" to open it in the browser. Click the button. Click the button a second time. What happens each time you click the button?

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
  <p><strong>Medium Challenge:</strong> The function <code class="try-it-code">doSomething</code> is never called with the syntax we've learned: <code class="try-it-code">doSomething</code>. Why not? What happens if we add <code class="try-it-code">()</code> after <code class="try-it-code">doSomething</code> on line 3?</p>
</div>

Takeaways:
- `Line 1` declares a variable that stores the `button` element
- `Line 3` creates an event listener. Our program will now be "on the lookout" for a click that takes place on the button. It won't listen for clicks anywhere else. It won't listen to any other events on that button. Just a click and just on that button. When that button is clicked, it will call the function `doSomething`.
- `Line 5` declares the function `doSomething`. It is just a set of directions, waiting around to do its job. It will be called when the button is clicked.

### Event Handlers

The event listener is responsible for monitoring an element for events, and doing something when the event occurs. The **event handler** is the function that is called when the event occurs. In our previous example, the function `doSomething` was our event handler. These terms are commonly used interchangeably.

<div class="try-it">
  <h2>Try It: Event Listeners & Handlers</h2>
  <p>Create a new CodePen and load jQuery into it.</p>
  <p>Create an <code class="try-it-code">h1</code> and <code class="try-it-code">button</code> in the HTML.</p>
  <p>Now, update the JavaScript so that when the button is clicked, the text in the <code class="try-it-code">h1</code> changes to something that it wasn't originally.</p>
  <p>When you're done, answer these questions with your partner:</p>
  <ul>
    <li>What line of code is your event listener on?</li>
    <li>What type of event is your listener on the lookout for?</li>
    <li>What is the name of your event handler?</li>
  </ul>
</div>

## Access CSS

One cool thing about JavaScript is that since it's accessing your HTML elements, you can also access the styles that have been applied to each element. It works kind of like `text`; there's a property on the element that we can change. We can add, remove, replace, or toggle CSS classes!

Check this out:

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="css,result" data-user="turing-kwk" data-slug-hash="QPVLEb" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Check It Out: ClassList Property">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/QPVLEb/">
  Check It Out: ClassList Property</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

<div class="try-it">
  <h2>Turn & Talk</h2>
  <p>Fork the CodePen above, then answer these questions with your partner:</p>
  <ul>
    <li>Why does the button go back and forth between pink and purple?</li>
    <li>Try changing <code class="try-it-code">.toggleClass</code> to <code class="try-it-code">.addClass</code> - what happens?</li>
    <li>What happens when you change <code class="try-it-code">.toggleClass</code> to <code class="try-it-code">.removeClass</code>? Why?</li>
  </ul>
</div>

Takeaways:
- `.addClass` will add a class to an HTML element
- `.removeClass` will remove a class from an HTML element
- `.toggleClass` will check if an HTML has a specific class. If it does, it will remove the class. If it doesn't, it will add that class.

Besides accessing CSS rules by classes, we can also add CSS property/values! Check out the code in the pen below:
<!-- //this is messed up because it introduces .val() which they don't know about yet. -->

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="js,result" data-user="turing-kwk" data-slug-hash="YMbvdP" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Check It Out: DOM Manipulation of CSS">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/YMbvdP/">
  Check It Out: DOM Manipulation of CSS</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Let's break this down.
- On lines 1-2, we declare the `changeBackgroundBtn` and `container` variables which are storing the button and `div`, respectively
- On line 4, we declare an event listener for the `changeBackgroundBtn` button
- On line 6, we declare the `changeBackgroundColor` event handler
- Line 7 is where the magic happens:

```javascript
container.css('backgroundColor', 'mediumaquamarine');
```

  * `container` references the `container` variable
  * `.css` says: I'm about to give you directions on adding styles, or CSS rules. `.css` takes two arguments, a property and a value.
  * `backgroundColor` says: here is the property I'd like you to add to this element
  * `'mediumaquamarine'` says: here is the value I'd like you to update this property to. We can give any valid color name, hex code, or rgba value. It must be in a string.

This entire line of code accesses the `div` element and updates that elements styles, so we see the background color change in the browser!

<div class="practice">
  <h2>Practice: DOM Manipulation</h2>
  <p>Ever wonder how sites or apps create a "dark mode"? You're about to do just that!</p>
  <p>Create a new CodePen and load jQuery into it.</p>
  <p>Create two <code class="try-it-code">button</code> elements in your HTML, both nested inside of a <code class="try-it-code">div</code>. One button should be labeled "light mode" and the other "dark mode". They will both need their own class name.</p>
  <p>Now, write the JavaScript so that when the dark mode button is clicked, the background color of the <code class="try-it-code">div</code> changes to a dark color. When the light mode button is clicked, the background color should change to a light color.</p>
  <p><strong>Medium Challenge:</strong> When an application uses dark mode, not only the background color changes; so do fonts, colors, etc. Add a few more elements to your HTML. When each button is clicked, those elements should change colors appropriately.</p>
  <p><strong>Spicy Challenge:</strong> In addition to light and dark mode, add a "party mode" button. When clicked, the user should see a screen that looks like a party! Use a <code class="try-it-code">background image</code> instead of a background color. Have some fun with it!</p>
</div>

<!-- insert everything below into forms lesson -->

<!-- ## Inputs

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

What was the line of code that allowed us to access the information the user typed in? What's new to us about this line of code? Note: the location of this is very important; it must be _inside_ the event handler. -->


<!-- ## Forms

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
</div> -->
