---
title: Intro to HTML
---

## Learning Goals

* Understand what HTML stands for and it's purpose
* Know how to build a site with text content, links, and images

**Note** - for the Try It and Practice sessions, you should be working in a CodePen Pen.

## Technical Vocabulary

- HTML
- HTML Element
- HTML Tag
- Attribute
- Nesting

## Warm Up

In your notebook, jot down your answers. Then, we'll discuss as a class.
- What are you favorite websites/mobile apps?
- What is it about them that you like? The look? The functionality/purpose?

## Overview

Of all of the major technologies used on the web, on either the front- or the back- end, HTML is the oldest. In the beginning, the web was just a bunch of HTML documents that you wrote by hand. They had these cool things called hyperlinks that would allow a user to click on a word on one page and be taken to another page.

At the end of the day, HTML is made up two things: text, and **tags** that mark up that text. (HTML stands for hyper text markup language!)

Let’s say that we had some text and we wanted to communicate that this text was a paragraph.

```
This text is a paragraph.
```

We’d wrap the text in paragraph tags.

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
  <p>Use what you know about headings and paragraph tags to create at least three headings of any size (h1 - h6) and three paragraph elements in your CodePen. The topic is your choice!</p>
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
  <p>Want a challenge? Make an HTML list and add your links as list items.</p>
</div>

## Images and Attributes

We use HTML tags to “mark up” text to show its semantic meaning. The browser uses these tags to build up the document. Most tags have an opening and closing tag, but a few do not. For example, images (defined using the `<img>` tag) do not have a closing tag.

Consider the following:

```html
<img src="http://indonesiatatler.com/images/i/story-20170113165507-kwk-hero-image-670x447_resized_670x447.jpg" alt="Karlie Kloss kicking off a Kode with Klossy camp">
```

There are two things happening here:

First, we have an `<img>` tag that is somewhat unique in that it doesn’t have a closing tag like all of the others we’ve seen so far.

Second, our `<img>` tag has extra information inside it!

- Our browser is more than happy to present an image, but it has to know which image we want to it present. That’s where the `src` attribute comes in. It tells the browser what the source of our image is - we give it a link (an address!) to the image we want to render.
- We also add the `alt` attribute contains text that identifies the image to a screen reader. The alt text is displayed if the picture can’t be displayed for some reason. It helps all users, not just those using screen readers!

<img class="img-tag-anatomy" src="./assets/img-tag-anatomy.png">

<div class="try-it">
  <h2>Try It: Adding Images</h2>
  <p>Let's update our page in CodePen with two (or more!) images.</p>
  <p>First, copy and paste the code above into your CodePen. Does the image of Karlie appear on your site?</p>
  <p>Now, go to <a href="https://unsplash.com/">Unsplash</a>, <a href="https://www.pexels.com/">Pexels</a>, or Google and find an image you'd like to use. Right-click it, then select "Copy Image Address". In your HTML, write an image tag, then use <code class="try-it-code">cmd + v</code> to paste the image address in.</p>
</div>



Every HTML document has one `head` element and one `body` element. The `head` holds a lot of information about the site that the user won't see in the browser. The `body` wraps everything that the user does see in the browser. When we work in CodePen, we don't _have_ to use the `body` element, but it's good to know that it exists because we'll be seeing it later.

Let's put everything we've learned so far together by completing one last round of practice.

<div class="practice">
  <h2>Practice: HTML</h2>
  <p>If you'd like to save your work from class, save the pen in CodePen, then create a new one for this section.</p>
  <p>Using the unicorn lorem ipsum below (but selecting your own photo), recreate this site. The links can go to anywhere you'd like!</p>
  <p>Surprise pegasus surprise app pop pigeon delight. Unicorn unicorn wereunicorn pegasus pigeon delight pop social social. Pony pop pony, kittens kittens pigeon pony puppy unicorn pegasus pigeon. Social wereunicorn kittens app kittens delight delight pony, delight rainbows surprise social app. Surprise social delight unicorn kittens unicorn pony pop rainbows.</p>
  <br>
  <img src="./assets/recreate-unicorn.png">
</div>
