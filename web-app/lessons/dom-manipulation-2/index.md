---
title: DOM Manipulation 2
---

## Learning Goals

* Append multiple elements to the DOM to create a to-do list-like application

## Technical Vocabulary

- event
- append
- prepend
- argument
- object

## DOM Manipulation

Turn and Talk - what can we do with DOM Manipulation as of now?

You've already come so far with implementing JavaScript to manipulate the DOM! Today we will take it to the next level. We are going to build a site that can take user input multiple times and keep adding each input to a list. This "To-Do List" is a very common app that developers use as they are learning JavaScript. Here's an example of something like what we will build by the end of this lesson:

<p class="to-do">add screen shot of a to-do list</p>

## `.append()`

jQuery gives us a function called `.append()`. If you google append, you'll see a definition:

```
verb
add (something) as an attachment or supplement.
```

The `.append()` function allows us to append a newly-created HTML element to an already-existing element. Here's an example of the syntax:

```html
<section class="container">
</section>
```

```javascript
var container = $('.container');
container.append(`<p>Hello!</p>`);
```

As you can see above, we have an empty `section` element in the HTML document. In JavaScript, we accessed that section element by its class. Let's break down the next line:

- `container` - the HTML section we accessed on the previous line
- `.append()` - this is being called on the `container`, so it's saying: I'd like you to attach something to the container.
- `(`<p>Hello!</p>`)` - this is the argument that `.append()` takes, wrapped in back-ticks, an HTML element. Whatever lives inside the back-ticks will be added into `innerHTML` of the container.

Try it -

write an HTML article that has an H2. Run in Code pen.
In JS, write an append to add a paragraph. Run in Code Pen.

## When to Append

This is great, but the append is happening right away, so it's not really helping us build a dynamic to-do list.

Turn and Talk
Considering everything we've learned, map out a list of steps we would want to eventually code to make our to-do list work. (re word this)


We can't just append directly in our JavaScript file, or as we saw, that HTML is added immediately. We want to respond to our user with an event listener and handler. Here's a more-realistic example, with a little more going on.

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="css,result" data-user="turing-kwk" data-slug-hash="WWqjLp" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Check it Out: Append">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/WWqjLp/">
  Check it Out: Append</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Read through each line of the JavaScript; make sure to reference the HTML so you know which DOM element we are accessing. Then, walk through it with your partner and answer the following questions:

<div class="try-it">
  <h2>Turn & Talk: Append</h2>
  <p>What are the two steps that are taken inside the event listener?</p>
  <p>When a name is submitted, the card that it is displayed on has a white background. Where in the code was this style applied? How did the HTML element know about that style?</p>
  <p>Try to add another <code class="try-it-code">p</code> element inside the append. What happens when you add another name now?</p>
  <p>As a user, are there any changes you would like to be made to make this site more user-friendly?</p>
</div>

Inside the event handler, we took two important steps:
1. Get the information that the user typed in
2. Append that information (plus some of our own text) inside a `p` element to the `cardContainer`.

When we appended the `p` element, we wrote a class on it. The CSS file has a rule written for that class, so when the paragraph was appended, it came with styles already applied!

You may have noticed that multiple elements can be appended at the same time. Typically, we will see one `div` or other container, wrapping other elements with information, appended. Might look something like this:

```javascript
function appendSomeoneAwesome() {
   var name = $('.name').val();
   var birthday = $('.birthday').val();

  cardContainer.append(`
    <div class="name=card">
      <p class="name">${name} is awesome!</p>
      <p class="birthday">Their birthday is ${birthday}.</p>
    </div>
  `);
}
```

The code above would append a `div` that contains two `p`s to the `cardContainer`.

<div class="try-it">
  <h2>Turn & Talk: Append</h2>
  <p>Fork <a href="https://codepen.io/turing-kwk/pen/rbEzOa">this CodePen</a> and write JavaScript so that the user can write a to-do list.</p>
</div>

## Appending Lots of Info

get into objects.

## Refactor Tractor

code is getting long and messy - refactor into a couple functions.

try it

Practice section
- have a form with at least 3 inputs and a button. Take user input and render it in a card, user should be able to add another set of info and also see that card.
