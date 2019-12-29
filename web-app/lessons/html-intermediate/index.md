---
title: Intermediate HTML
---

## Learning Goals

* Understand and implement nesting with HTML elements
* Identify and use container elements

## Technical Vocabulary

- HTML
- HTML Element
- Container Elements
- Nest
- Wrap

## Warm Up


## Nesting Elements

In most HTML documents, we will see **nesting**. This means that one (or more) elements will live inside of another element.

One common example is when you see one word within a paragraph that is a link. To aid in formatting pages (which we will go into more in our next CSS lesson), we can use **container** elements. Their job is to hold a group of elements together. The Turn & Talk box below is made with a container element! Inside of it is an `h2` and several `p` tags.

<div class="try-it">
  <h2>Turn & Talk</h2>
  <p>Read through the two code snippets below, then talk with your partner about both, including answers to these questions:</p>
  <p>In the first code snippet, which element is nested inside of the <code class="try-it-code">nav</code>? Why do you think the author of this code decided to use nesting?</p>
  <p>In the second code snippet, which element is wrapped around other elements? What do you think the author decided to indent all of the nested elements they way they did? What do you imagine <code class="try-it-code">nav</code> stands for/does?</p>
</div>

```html
<p>“Don't let anyone rob you of your imagination, your creativity, or your curiosity. It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.”  - <a href="https://www.space.com/17169-mae-jemison-biography.html">Mae Jemison<a>, first African American woman astronaut in space</p>
```

```html
<nav>
  <h1>Author Finder</h1>
  <p>Search for your favorite author:</p>
  <input placeholder="Author Name"/>
  <button>Go!</button>
</nav>
```

There are two words you'll hear in regards to nesting - **nest** and **wrap**.

In the second example, the `nav` element _is wrapping_ the `h1`, `p`, `input`, and `button` elements. You could also say that the `h1`, `p`, `input`, and `button` elements _are nested in_ the `nav` element.

It's also important to point out the use of indentation in the example above. Since `nav` is the parent, or wrapping element, it is not indented at all. Every element nested inside of it is indented one tab. The HTML will _work_ even if indentation is not used; but it makes it much more readable for you and others.

<div class="try-it">
  <h2>Try It: Nesting Elements</h2>
  <p>Let's open a new pen in CodePen and follow these steps!</p>
  <ul>
    <li>First, write an empty <code class="try-it-code">div</code> tag.</li>
    <li>Inside of the div tag, write 2-3 paragraphs.</li>
    <li>Outside of the div tag, write one more paragraph.</li>
    <li>In CSS, add a border to the div element. (If you forgot the syntax, <a href="https://css-tricks.com/almanac/properties/b/border/">check this out</a>.</li>
    <li>Check your indentation - the div and last paragraph should not be indented at all, but the paragraphs nested inside the div should be indented once.</li>
  </ul>

  <p><em>Why did we use CSS in an HTML lesson? Sometimes CSS, especially the border property, can help us see how HTML code, particularly a container element, is working.</em></p>
</div>

<p class="to-do">great spot for sponsor integration, reference something on their site?</p>

In the Try It above, you used a `div` element for the first time. You'll be seeing this more and more! `div` is an element that is used to contain other elements.

## Block vs. Inline Elements

You might notice that some elements behave a little differently in a layout than others. Some elements make content stack, while others let content sit next to each other. What’s that about?

This is an important difference:

* **Block elements** stack on top of each other. Each one starts and ends on its own line.
* **Inline elements** can be used to mark up a few words inside of a block element.

Most elements are block elements. When you write two paragraph, `<p>`, elements in your HTML file, they will show up on different lines, right? That is because they are block elements. Other block elements we've worked with:

- `h1`
- `h2` (and `h3` - `h6`)
- `div`

Some common inline elements that are used:

- `a`
- `em`
- `strong`
- `button`
- `input`

When looking at the markup, you also notice that it’s common for inline elements to be written on the same line of code, nested inside of a parent element.

```html
<p>“Don't let anyone rob you of your imagination, your creativity, or your curiosity. It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.”  - <a href="https://www.space.com/17169-mae-jemison-biography.html">Mae Jemison<a>, first African American woman astronaut in space</p>
```

<div class="try-it">
  <h2>See It To Believe It: Inline vs. Block</h2>
  <p>Let's take a couple minutes to see this in action, to make sure we have an understanding. Open <a href="https://codepen.io/turing-kwk/pen/LYEjaZY">this CodePen</a>, then click the "Fork" button in the top nav bar. This will create a copy of the CodePen to your account!</p>
  <ul>
    <li>In the CSS file, add a border of any color to the <code class="try-it-code">h1</code>.</li>
    <li>Element by element, add a border (use a different color for each one).</li>
  </ul>
  <p>When we introduced the <code class="try-it-code">border</code> property in the first lesson, we mentioned it was a helpful tool. This is what we were talking about! It's a great way to quickly check what space an element is actually taking up. A short title in an <code class="try-it-code">h1</code> element may look like it's only an inch or so wide, but it's actually taking up the entire width of the page!</p>
</div>

For now, we just need to know that some elements behave differently than others do. In our next CSS lesson, we will learn how to **change** the default behavior.
