---
title: Set Up a Project in Atom
---

When we build projects in CodePen, we don't have to do some of the configuration to get all our code files to talk to each other because CodePen does that for us! As we begin building bigger projects and using Atom as our text editor, we will need to take a few steps as we start every project.

## Link CSS to HTML

In order for our page to know about the CSS styles we write for it, we have to link the CSS stylesheet into our HTML document. The snippet below is what that link looks like, assuming the name of your CSS file is `styles.css` and that it's in the same directory as your HTML document:

```html
<link rel="stylesheet" type="text/css" href="./styles.css">
```

This `link` element should be nested inside the `head` of your HTML document. The reason that CSS needs to be linked in the `head` is that we want to have the styles before the document is downloaded and rendered to the screen. If the CSS comes in later, we run the risk of showing our users a flash of our page without styles, then another flash when the styles are downloaded.

## Link JavaScript to HTML

Now that your page is looking great, we add functionality with JavaScript. Unlike CSS, we want to bring this in at the end. In our JavaScript file, we usually reference DOM elements. In order to do this, those elements already need to exist. So, we bring in our JavaScript as the last element nested inside the `body`. This example assumes the name of your JavaScript file is `index.js` and that it's in the same directory as your HTML document.

```html
<script type="text/javascript" src="./index.js"></script>
```
