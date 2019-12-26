---
title: Intermediate CSS
---

## Learning Goals

* a
* b
* c

## Technical Vocabulary

* CSS
* CSS Property
* HTML Element
* id
* class

## Warm Up


## Classes

Right now, we know how to style all of the paragraphs or all of the links on a page. But what if we only wanted to style a particular one?

As it turns out, we can set a `class` attribute on an HTML element. The class attribute takes one or more words, separated by spaces. Typically we use classes to describe what kind of element we’re creating. For example, we might create a <p> element with the class of "sidebar" to denote that this is a particular kind of section on the page. We might also use classes to describe the kind of content inside of the element.

When we add classes, we make one change in the HTML and one change in the CSS:

```html
<h2 class="heading-main">Lorem Ipsum</h2>
```

```css
.heading-main {
  background-color: yellow;
}
```

This will look for every element — regardless of type — that has the class of `heading-main` and style it with a yellow background color.

Notice the syntax - when we were just targeting an `h2` element, we would just type `h2`. Since we are targeting a class, we have to be really specific in telling the computer how to do that - when it sees a `.` it will look for a class that matches the words following the `.`.

<div class="try-it">
  <h2>Try It: Add Classes</h2>
  <p>In your CodePen, apply a class to your <code class="try-it-code">h1</code> and change your CSS to target the class instead of the <code class="try-it-code">h1</code> element. Then, apply that same class to <strong>one</strong> of your paragraph elements.</p>
  <p>What happened to the paragraphs? Is that what you expected? Talk with your partner about why this may have behaved this way.</p>
</div>

## IDs

IDs add one more layer of complexity. On the surface, they look and behave a lot like our classes. IDs are really meant to only be used once. Classes can, and usually are, used multiple times. Here's an example of an ID in action:

```html
<div>
  <p>Space is completely silent.</p>
  <p class="space-fact">Nobody knows how many stars are in space.</p>
  <p class="space-fact" id="nasa-suit-cost">A full NASA space suit costs $12,000,000.</p>
</div>
```

```css
p {
  color: darkred;
}

.space-fact {
  color: slategrey;
}

#nasa-suit-cost {
  color: midnightblue;
}
```

<div class="try-it">
  <h2>Turn & Talk</h2>
  <p>Looking at the HTML and CSS above, what color do you predict each paragraph will appear?</p>
  <p>Based on what you know about the syntax for rules for classes, what do you think the syntax for IDs is?</p>
</div>

### Classes _and_ IDs

Occasionally, you'll see the use of a class _and_ an ID on the same element. Why?

There may be several reasons for this. When it comes to styling, we may have two paragraphs that should have a lot in common. But one of them should also have a unique style. Both paragraphs can have the class with all the styles they share, then the second has an ID with it's unique styles.

When we get into JavaScript, we will also utilize these classes and IDs. It's common that a class will have the styles for a set of elements, then we use the ID in JavaScript to _do_ something with one of those elements. We'll get more into that later.
