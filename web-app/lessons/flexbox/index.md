---
title: Flexbox
---

## Learning Goals

* Explain the difference between a parent and child, and a direct child
* Apply Flexbox to containers in order to achieve a desired layout

## Technical Vocabulary

- parent
- child
- direct child

## What is Flexbox?

Flexbox is a part of CSS that provides a more efficient way to lay out, align and distribute space among items in a container. It helps us when we have those silly block elements, that even with `display: inline-block`, can be hard to do just what we want them to do.

## Parents and Children

As we start working with Flexbox, a very important distinction should be pointed out. We need to be careful about the CSS rules we apply to a parent element vs. those to a child element. A **parent** element wraps other elements, a **child** is nested inside the parent. We will also refer to parents as containers, and children as items.

Let's look an some HTML to make sure we are all on the same page:

```html
<section class="container">
  <article class="item-in-container"></article>
  <article class="item-in-container"></article>
  <article class="item-in-container"></article>
</section>
```

In the code above, the `section` is the parent/container, and the 3 `article`s are all children/items because they are directly nested inside of that `section`. Let's looks at one more example:

```html
<section class="container">
  <article class="item-in-container">
    <h2>Title of Article 1</h2>
  </article>
  <article class="item-in-container">
    <h2>Title of Article 2</h2>
  </article>
  <article class="item-in-container">
    <h2>Title of Article 3</h2>
  </article>
</section>
```

In the code above, we now have these `h2` elements nested inside of the `article`s. It's important to know that `h2` is **not** a child of the `section`. It is technically a grandchild, and a child of `article`. The idea of **direct child** is really important to understand as we work with Flexbox.

<img class="small" src="./assets/parent-container.svg" alt="">
<img class="small" src="./assets/child-item.svg" alt="">
(Graphics from [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))

## Creating a Flex Container

Without Flexbox, 10 colorful `article`s might look like this:

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="html,result" data-user="turing-kwk" data-slug-hash="bJKmLB" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Normal Block Elements">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/bJKmLB/">
  Flexbox: Normal Block Elements</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

But with Flexbox, we can start, having some control over them:

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="html,result" data-user="turing-kwk" data-slug-hash="Pgayxz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1.0em 0; padding: 1em;" data-pen-title="Flexbox: Applying Flexbox">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/Pgayxz/">
  Flexbox: Applying Flexbox</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<div class="try-it">
  <h2>Turn & Talk</h2>
  <p>Looking at the CSS in both examples above, what is the difference between the two files?</p>
  <p>What element(s) is the property <code class="try-it-code">display: flex;</code> applied to? Is that a parent or child?</p>
</div>

### Flex helps even things out

Adding `display: flex` to the CSS rule on the parent makes the parent element a flex container, and opens up a world of possibilities.

We can apply a width to each item. If all items can fit in the container at that width, that's the width they will be. If the width wouldn't leave enough room for all the items, they will become as wide as they can, and remain evenly spaced. In the CodePen below, change to width of the `article` to several different values and see what happens.

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="html,result" data-user="turing-kwk" data-slug-hash="VNdVLv" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Items Too Wide">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/VNdVLv/">
  Flexbox: Items Too Wide</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Justify Content

In professional apps, we typically see white space (margin or padding) used, and the content is centered on the screen. We can use Flexbox to center content:

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="html,result" data-user="turing-kwk" data-slug-hash="KYerVR" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Centering Items">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/KYerVR/">
  Flexbox: Centering Items</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

But the items are still all crunched together, they might need some breathing room too.

<div class="try-it">
  <h2>Try It: Justify Content</h2>
  <p>On the container's CSS rule, change the code to: <code class="try-it-code">justify-content: space-between;</code>. What happens?</p>
  <p>Now try: <code class="try-it-code">justify-content: space-around;</code>. What is the difference between around and space-between?</p>
  <p>Finished early? Learn about even more values that we can provide to <code class="try-it-code">justify-content</code> with <a target="blank" href="https://css-tricks.com/almanac/properties/j/justify-content/">CSS Tricks</a>.</p>
</div>

The `justify-content` property allows us to control how our content sits _horizontally_.

## Align Items

Just like we can control how our content sits _horizontally_ with `justify-content`, we have a tool to control how our content sits _vertically_. Check out the CodePen below. Try changing the value for `align-items` to `flex-end`, then `flex-start`, and see what happens!

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="html,result" data-user="turing-kwk" data-slug-hash="mgKQOR" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Align Items">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/mgKQOR/">
  Flexbox: Align Items</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Direction

Another CSS property with Flexbox is `direction`. This property takes one of four values:

- `row` (default): left-to-right
- `row-reverse`: opposite of row (right-to-left)
- `column`: same as `row` but top to bottom
- `column-reverse`: same as `column` but bottom to top

It's not very common to use row-reverse or column-reverse, but it's good to know what's out there!

<div class="try-it">
  <h2>Try It: Direction</h2>
  <p>Open <a target="blank" href="https://codepen.io/turing-kwk/pen/WWyYZy">this CodePen</a> and fork it. This will create a new copy to your account that you can edit. Update the CSS (you'll probably need to add some classes on some HTML elements, too!) so the outcome looks like this:</p>
  <img src="./assets/direction.png" alt="">
</div>

## Wrap

Now, sometimes we don't want _all_ our items on the same row or column. We can use the property `flex-wrap`. It allows items to wrap onto the next line. The three values it takes are:

- `no-wrap` (default): one line, direction is defined by `flex-direction`
- `wrap`: multi-lines, direction is defined by `flex-direction`
- `wrap-reverse`: multi-lines, opposite to direction defined by `flex-direction`

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="html,result" data-user="turing-kwk" data-slug-hash="qwKQwa" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Wrap">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/qwKQwa/">
  Flexbox: Wrap</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Flexbox

There is more to learn about Flexbox, but we can do a lot with what we know. It will take a while to get used to; remember to use your dev tools and use that `border` property to help you understand what space each element is taking up.

<div class="practice">
  <h2>Practice: Flexbox</h2>
  <p>Work your way through <a target="blank" href="https://flexboxfroggy.com/">Flexbox Froggy</a>.</p>
  <p>Make sure to check in with your partner every few levels to see if they need any help!</p>
</div>
