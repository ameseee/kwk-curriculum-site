---
title: Intermediate HTML
---

## Learning Goals

* Understand and implement nesting with HTML elements


## Technical Vocabulary

- HTML
- HTML Element
- Nest
- Wrap

## Warm Up


## Nesting Elements

In most HTML documents, we will see **nesting**. This means that one (or more) elements will live inside of another element.

One common example is when you see one word within a paragraph that is a link. To aid in formatting pages (which we will go into more tomorrow), we can use **container** elements. Their job is to hold a group of elements together. Two examples are below.

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

There are two words you'll hear in regards to nesting - nest and wrap.

In the second example, the `nav` element is wrapping the `h1`, `p`, `input`, and `button` elements. You could also say that the `h1`, `p`, `input`, and `button` elements are nested in the `nav` element. Nesting is a concept you will see in CSS and JavaScript as well!

It's almost important to point out the use of indentation in the example above. Since `nav` is the parent, or wrapping, element, it is not indented at all. Every element nested inside of it is indented on tab. HTML will _run_ if indentation is not used; but it makes it much more readable for you and others.

<div class="try-it">
  <h2>Try It: Nesting Elements</h2>
  <p>Let's update your CodePen!</p>
  <p>First, wrap a <code class="try-it-code">body</code> tag around all of your code.</p>
  <p>Then, in one of your existing paragraphs, change at least one word or phrase. Do some Google research on <code class="try-it-code">code</code>, <code class="try-it-code">em</code>, <code class="try-it-code">i</code>, <code class="try-it-code">small</code> or <code class="try-it-code">s</code> if you want to do something other than a link!</p>
</div>

In the Try It above, you used a `body` element for the first time. You'll be seeing this more and more.

## Required Tags

Every HTML document has one `head` element and one `body` element. The `head` holds a lot of information about the site that the user won't see in the browser. The `body` wraps everything that the user does see in the browser. When we work in CodePen, we don't _have_ to use the `body` element, but it's good to know that it exists because we'll be seeing it later.
