---
title: Intro to HTML
---

## Learning Goals

* Understand what HTML stands for and it's purpose
* Recognize and use some common HTML elements
* Identify and use attributes on HTML elements

## Technical Vocabulary

- HTML
- HTML Element
- HTML Tag
- Attribute

## Warm Up

In your notebook, jot down your answers. Then, we'll discuss as a class.
- What are you favorite websites/mobile apps?
- What is it about them that you like? The look? The functionality/purpose?

## Overview

Of all of the major technologies used on the web, on either the front- or the back- end, HTML is the oldest. In the beginning, the web was just a bunch of HTML documents that you wrote by hand. They had these cool things called hyperlinks that would allow a user to click on a word on one page and be taken to another page.

**Every webpage you have visited was built with HTML!**

## Syntax

At the end of the day, HTML is made up two things: text, and **tags** that mark up that text. (HTML stands for hyper text markup language!)

Let’s say that we had some text and we wanted to communicate that this text was a paragraph.

```
This text is a paragraph.
```

In our HTML code, we’d wrap the text in paragraph tags. The code would look like this:

```html
<p>This text is a paragraph.</p>
```

You’ll notice that there are tags on both ends of the text. The entire code block above, the tags and text inside, make up an **HTML Element**.

<img class="html-tags-detail" src="./assets/html-tags-detail-how-to.jpg">

We use `<p>` (the opening tag) to tell the browser that everything that’s about to follow is part of a paragraph and `</p>` (the closing tag) to tell the browser that this paragraph is done. When a user visits our site, the browser loads up the HTML and parses it into the elements that will eventually make up our user interface. The `p` stands for paragraph in this case. We can't make up tags - HTML is a language that provides a wide variety of tags that we must utilize.

Here is an example of a slightly more complex HTML document:

```html
<h1>Very Important Heading</h1>

<p>This is an introduction paragraph. Designers typically use "Lorem Ipsum" to fill out space in their designs while they wait for the real content. Lorem Ipsum looks kind of like Latin, but it's actually completely bogus. The nice part is that it has roughly the same distribution of word sizes as English.</p>

<h2>Lorem Ipsum Example</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```

<div class="try-it">
  <h2>Try It: Building a Basic Page</h2>
  <p>Open up your CodePen account, and create a new Pen.</p>
  <p>Use what you know about headings and paragraph tags to create at least three headings of any size (h1 - h6) and three paragraph elements in your new CodePen. The topic is your choice!</p>
  <p>Need some filler text? Check out <a href="https://loremipsum.io/ultimate-list-of-lorem-ipsum-generators/">this Lorem Ipsum Generator.</a></p>
</div>

## Links

To add a link, we use the `<a>` tag. It has an opening and closing tag, and it utilizes attributes!

The `<a>` tag, like the `<img>` tag, also has an attribute. Instead of `src`, we use `href` or hyper reference. The value of this attribute should be the web address, including http://, where you want the link to go.

For example:

```html
<a href="https://www.karliekloss.com/">Karlie Kloss</a>
```

<div class="try-it">
  <h2>Try It: Adding Links</h2>
  <p>In the same CodePen you started before, add a few links to your HTML.</p>
  <p><strong>Medium Challenge:</strong> Make an HTML list and add your links as list items. <em>You may need to Google search to learn how to create an HTML list.</em></p>
</div>

## Images and Attributes

We use HTML tags to “mark up” text to show its semantic meaning. The browser uses these tags to build up the document. Most tags have an opening and closing tag, but a few do not. For example, images (defined using the `<img>` tag) do not have a closing tag.

Consider the following:

```html
<img src="http://indonesiatatler.com/images/i/story-20170113165507-kwk-hero-image-670x447_resized_670x447.jpg" alt="Karlie Kloss kicking off a Kode with Klossy camp">
```

There are two new things happening here:

**First**, we have an `<img>` tag that is somewhat unique in that it doesn’t have a closing tag like all of the others we’ve seen so far.

**Second**, our `<img>` tag has extra information inside it!

- Our browser can present an image, but it has to know _which_ image we want to it present. That’s where the `src` attribute comes in. It tells the browser what the source of our image is - we give it a link (an address!) to the image we want to render.
- We also add the `alt` attribute contains text that identifies the image to a screen reader. The alt text is displayed if the picture can’t be displayed for some reason. It helps all users, not just those using screen readers!

<img class="img-tag-anatomy" src="./assets/img-tag-anatomy.png">

<div class="try-it">
  <h2>Try It: Adding Images</h2>
  <p>First, copy and paste the code above into your CodePen. Does the image of Karlie appear on your site? (It should!)</p>
  <p>Now, follow the directions below 2-3 times to add in images of your own!</p>
  <ul>
    <li>Go to <a href="https://unsplash.com/">Unsplash</a>, <a href="https://www.pexels.com/">Pexels</a>, or Google and find an image you'd like to use</li>
    <li>Right-click it, then select "Copy Image Address"</li>
    <li>In your HTML, write an image tag, then use <code class="try-it-code">cmd + v</code> to paste the image address into the quotes for your <code class="try-it-code">src</code> attribute!</li>
  </ul>
  <p>Are some images showing up way larger than you'd like? We will learn how to control that with CSS soon. For now, you can add this line of code to the CSS file in your CodePen: <code class="try-it-code">img { height: 300px; } </code></p>
</div>

## Commonly Used Elements

There are close to 100 elements available to us when we write HTML! You don't need to know all of them, but there are a few that you'll find extremely helpful. We'll learn some today, and more in the next lesson.

Follow the directions your instructor gives you to explore the following elements:

- Set 1: `button`,`code`
- Set 2: `em`, `strong`
- Set 3: `input`, `textarea`

<br>

Let's put everything we've learned so far together by completing one last round of practice.

<div class="practice">
  <h2>Practice: HTML</h2>
  <p>Save the CodePen you were working on throughout class. Create a new pen for this challenge.</p>
  <p>Using any text and image you'd like, write a short bio like the one below. Try to use all the HTML elements you've learned about today.</p>
  <br>
  <img src="./assets/shantell-martin.png">
  <p>Just for a frame of reference, a total of 10 elements were used to create the bio above, and 6 unique elements were used!</p>
</div>
