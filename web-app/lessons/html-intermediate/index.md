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
    <li>First, write an empty <code class="try-it-code">body</code> tag.</li>
    <li>Inside of the body tag, write 2-3 paragraphs.</li>
    <li>Outside of the body tag, write one more paragraph.</li>
    <li>In CSS, add a border to the body element. (If you forgot the syntax, <a href="https://css-tricks.com/almanac/properties/b/border/">check this out</a>.</li>
    <li>Check your indentation - the body and last paragraph should not be indented at all, but the paragraphs nested inside the body should be indented once.</li>
  </ul>

  <p><em>Why did we use CSS in an HTML lesson? Sometimes CSS, especially the border property, can help us see how HTML code, particularly a container element, is working.</em></p>
</div>

In the Try It above, you used a `body` element for the first time. You'll be seeing this more and more.
