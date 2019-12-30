---
title: Intermediate CSS
---

## Learning Goals

* Understand the difference between inline and block elements
* Use margin and padding to achieve ideal breathing room around elements
* Control the layout of a page using height, width, and an understanding of the box model

## Technical Vocabulary

- CSS Property
- Inline
- Block
- Box Model
- Margin
- Padding

## Warm Up

There are 4 posters around the room with HTML elements written on them. On the sticky notes at your table, write out how you would select that element in CSS.

Here's an example:

```html
<section class="cards">
```

```css
.cards {

}

/* OR */

section {

}
```

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

## Does Order Matter?

You may have wondered if the order your CSS rules are written in, matters. Let's explore to start answering that question ourselves!

<div class="try-it">
  <h2>Try It: Does Order Matter?</h2>
  <p>Go into one of your CodePens and try switching around the order of rules. Do you see any changes?</p>
  <p>Now, try switching around the order of property/values within a rule. Do you see any changes?</p>
</div>

The answer is: yes and no.

CSS stands for Cascading Style Sheets. It is read from top to bottom. In very rare cases, you will see that switching the order of rules or property/values within a rule will change the appearance of your site. For what we're doing here at camp, it's probably more important to be aware of the hierarchy of element ➡ class ➡ ID when targeting something to write a rule for.

## Sizing Images

Many times, the photos we bring in will not be the exact size we want it to be for our site. We can use the `width` and `height` properties to handle this.

We will almost always want to preserve the ratio of the image, so we can give either a width or height. Once we set the width or height, the other dimension will be determined by the ratio of the original image.

If you want to give both width and height for some reason, you may need to apply the `object-fit` property. This might come in handy if you want to display a row of photos of the same height and width, but which all started off in various sizes.

Look at the two images of <a target="blank" href="https://www.youtube.com/watch?v=dhWPBY4IgRU">Dr. Katie Bouman</a> below, then look at the code that was used to style them:

<img class="image-ratio" src="./assets/dr-katie-bouman.png" alt="Two photos, the one on the left has the correct ratio, the one on the right is squished">

```html
<img class="correct-ratio" src="./assets/dr-katie-bouman" alt="Dr. Katie Bouman">
<img class="squished" src="./assets/dr-katie-bouman" alt="Dr. Katie Bouman">
```

```css
img {
  height: 300px;
  width: 250px;
}

.correct-ratio {
  object-fit: cover;
}
```

The `object-fit` property on the `.correct-ratio` class fixed the distorted ratio for us. We did lose some of the photo (sides), but with most things, we want to maintain the original ratio.

<div class="try-it">
  <h2>Try It: Sizing Images</h2>
  <p>Open up a new CodePen. Find 3 photos from <a target="blank" href="https://www.pexels.com/">Pexels</a> and create image tags for each of them in the new CodePen. Get a mix of images that are vertical and horizontal.</p>
  <p>Style the photos so they appear to be the same size, and make sure they aren't squished!</p>
</div>
