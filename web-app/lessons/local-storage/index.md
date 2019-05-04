---
title: Local Storage
---

## Learning Goals

- Set and get data from localStorage
- Get data from localStorage on page load; if there is none, have a default value
- Convert data to and from JSON

## Technical Vocabulary

- localStorage
- database
- client-side storage
- JSON
- persist
- domain

## Storing User Data

Up until this point, the data in our projects has disappeared whenever we refresh our page, which is problematic. It would be nice if we could keep our to-dos on the page without having to recreate them every time we leave the window. There are two places we could store our data to make that happen.

**Server-side storage:** On someone else’s computer (often times one that is in a data warehouse), in a database. Good for storing sensitive information. This is what a back-end developer usually handles.

**Client-side storage:** On the user’s computer, using JavaScript and the storage provided by the browser. This is good for less sensitive information (shopping cart). Front-end developers write the code to make this happen.

Since we are front-end developers, we will learn how to use Local Storage, an implementation of client-side storage, as a database to hold our information. Once we do this, we can refresh a page after a user has added data, and the data will **persist** (still be on the page)!

## Local Storage

Local Storage is like a local database. Each user that uses an application have have information saved to the app, on that computer. Let's say you make a to-do list app that uses Local Storage:
- You could add a to-do, refresh, and still have that to-do. You could add ten more, refresh, and now have all 11 to-dos.
- If your partner opens your to-do app, they won't see any of your to-dos. They can add to-dos, refresh, and the todo-s will still be there. You'll never see any of your partners to-dos.

## Local Storage Syntax

`localStorage` is a property you can call on the global window variable within your browser that allows you to access a local storage object for persisting data.

<div class="try-it">
  <h2>Turn & Talk: Local Storage</h2>
  <p>With any site opened in the browser, open the dev tools and in the console, type <code class="try-it-code">localStorage</code> then press enter/return.</p>
  <p>What is the output? What data type does that look like? What do you notice about all of the values in red?</p>
  <p>Do the same thing on a different site and compare the outputs - are they the same or different?</p>
</div>

`localStorage` stores an object with key/value pairs. They key is like a label and the value holds the actual data we want to be stored. `localStorage` is a database that holds information for a given **domain**, or web address.

`localStorage` supports the following methods:

- `localStorage.setItem();` takes two arguments—a key and value (key must be string)—and stores the given value under the provided key.
- `localStorage.getItem();` gets an item from storage based on the key provided.
- `localStorage.removeItem();` takes a key and removes that key and its associated value from storage.
- `localStorage.clear();` removes **all** items from storage for that domain.

<div class="try-it">
  <h2>Try It: Get, Set, Remove and Clear</h2>
  <p>Still in your dev tools in the browser, try running the following methods, and pay close attention to the outputs and changes in what is in your <code class="try-it-code">localStorage</code> object.</p>
  <ol>
    <li><code class="try-it-code">localStorage.clear();</code></li>
    <li><code class="try-it-code">localStorage.setItem('storeMePlease', 2);</code></li>
    <li><code class="try-it-code">localStorage.getItem('storeMePlease');</code></li>
    <li><code class="try-it-code">Refresh the page and try to get the item again.</code></li>
    <li><code class="try-it-code">localStorage.getItem('storeMePlease');</code></li>
    <li><code class="try-it-code">localStorage.removeItem('storeMePlease');</code></li>
    <li><code class="try-it-code">localStorage.getItem('storeMePlease');</code></li>
    <li><code class="try-it-code">localStorage.setItem('anotherThing', 'you look nice today');</code></li>
    <li><code class="try-it-code">localStorage.getItem('anotherThing');</code></li>
  </ol>
</div>

## In our JavaScript file

You may be thinking, this is great, but we're writing code in the browser; what does this look like in my codebase? Check out this CodePen to see how the use of `localStorage` fits in:

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="js,result" data-user="turing-kwk" data-slug-hash="mYbmBQ" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Check It Out: localStorage in a Project">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/mYbmBQ/">
  Check It Out: localStorage in a Project</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

To see what it does, you'll need to open this pen in the browser, and with the dev tools console opened, type in your name and click submit! What logs to the console? Do you see your name in a key/value pair?

<div class="try-it">
  <h2>Try It: Color Picker</h2>
  <p>It's your turn to implement some work with <code class="try-it-code">localStorage</code> in a project.</p>
  <p><strong>Step 1:</strong> Copy and paste the code from each of the 3 files in <a href="https://codepen.io/turing-kwk/pen/yWBbmM">this CodePen</a> into a project called "color-picker" in Atom. it will be easier to see what's happening when we run it in the real browser.</p>
  <p><strong>Step 2:</strong> Read through the JavaScript and make sure you understand how the current code is creating the functionality that the app currently has.</p>
  <p><strong>Step 3:</strong> With your partner, talk about/pseudo-code what code you would write, and where you would write it to implement localStorage.</p>
</div>

> As a class, let's discuss everyone's ideas on how to implement localStorage.

<br>
<br>

After our class discussion, we are setting the color to `localStorage` in the event handler, but we aren't doing anything when the page loads. We need to give the browser an additional instruction:
- when the page loads, get the color from `localStorage`. If there isn't a color stored yet, set the default color to "#000000" (black).

Let's add this line of code at the top of the file:

```javascript
var currentColor = localStorage.getItem('color') || "#000000";
```

Then, let's set the background color of the `div` to the `currentColor`:

```javascript
newColor.css('backgroundColor', currentColor);
```

Let's try it again - does the color persist after a refresh? It should!

## JSON

JSON stands for “JavaScript Object Notation” and is a standard for sending information back and forth over the web. It’s a subset of JavaScript’s object syntax. JSON is a language-independent data format that is easy for humans to read and write and easy for machines to parse and generate. **JSON is a means of sending data.**

JSON has the following rules:
- Keys must be double quoted.
- Values must be one of the following types, but must be wrapped in double quotes:
  * Strings
  * Numbers
  * Booleans
  * Arrays
  * Objects

There are two methods we can use on a JSON object:
- `JSON.stringify();` turns any JavaScript object into valid JSON.
- `JSON.parse();` turns any valid JSON into a JavaScript object.

Instead of wrapping everything in double quotes, we can call `JSON.stringify` and it will do that for us. This should be used before we set something into `localStorage`.

```javascript
var names = ["Leta", "Brianne", "Cindy"];
JSON.stringify(names)
//-> "["Leta","Brianne","Cindy"]"
```

When we get something from `localStorage` and want to work with that data in JavaScript, we immediately need to take it out of JSON, like this:

```javascript
var stringifiedNames = "["Leta","Brianne","Cindy"]"
JSON.parse(stringifiedNames);
//-> ["Leta", "Brianne", "Cindy"]
```

<div class="practice">
  <h2>Practice: localStorage</h2>
  <p>Clone down <a target="blank" href="https://github.com/turingschool/local-storage-practice">this repo</a> and implement <code class="try-it-code">localStorage</code>, so that when a user adds some to-dos and refreshes the page, to to-dos are still there.</p>
</div>
