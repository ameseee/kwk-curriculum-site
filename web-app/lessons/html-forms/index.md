---
title: HTML Forms
---

## Learning Goals

* Understand the structure of an HTML form
* Create and style an HTML form

## Technical Vocabulary

- form
- input
- label
- type

## Forms

So far, we’ve done an excellent job of displaying information to the user, but we haven’t really asked them for their input. HTML also includes a set of elements for building forms. Forms are an important part of a website. They allow users to send data to the web site. Most of the time that data is sent to the web server, but the web page can also intercept it to use it on its own.

## Form Basics: Inputs and Buttons

There is a lot to forms that we’ll go more into depth with in a moment, but to start we’ll focus on two elements:

- `<input>` creates an input field. `<input>` is like `<img>` in that it does not require or support a closing tag. It can take an optional type attribute that helps validate user input in some browsers (click <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">here</a>) to find out more).
- `<button>` creates a button. `<button>` on the other hand does support a closing tag.

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="html,result" data-user="turing-kwk" data-slug-hash="qwyyqe" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Check It Out: Inputs and Buttons">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/qwyyqe/">
  Check It Out: Inputs and Buttons</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

## Forms: Next Level

Basic input and button elements are a great starting point, but to build a truly usable form we need to use the following base elements:

- `form`
- `label`
- `input`
- type attribute

As you look at the code for forms, you will notice quite a bit of nesting; this is necessary. It's important to indent properly to made you code more readable!

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="html,result" data-user="turing-kwk" data-slug-hash="QPBBda" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Check It Out: Simple HTML Form">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/QPBBda/">
  Check It Out: Simple HTML Form</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

## What can you do within a form?

Most often, we ask users for text. If they are registering for an event like camp, we probably ask for their name, age, address, and food allergies. Sometimes we ask for an age/birthdate, sometimes we ask them to "check all that apply". We can have special inputs based on the information we are asking our users for. Here are some common input types you've probably seen. Can you predict what they do?

- `<input type="password"`
- `<input type="number"`
- `<input type="date"`
- `<input type="color"`

<div class="try-it">
  <h2>Try It: HTML Forms</h2>
  <p>In a new CodePen, create an HTML with at least 4 inputs. (Your submit button can count as an input.)</p>
  <p>Finished early? Check out other types of input you have available with HTML <a target="blank" href="https://www.w3schools.com/html/html_form_input_types.asp">here</a>. Also, check out the <code class="try-it-code">textarea</code> element.</p>
</div>

## Styling Forms

These forms have all the right components, but don't look very professional. Because `<input>` is an inline element, each input is bumping up against each other. See how much of a difference just a few CSS rules can make, and lookout for anything new in the HTML:

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="css,result" data-user="turing-kwk" data-slug-hash="YMjRMN" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Check It Out:  HTML Form with Styles">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/YMjRMN/">
  Check It Out:  HTML Form with Styles</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

On the other hand, this doesn't quiet yet look like a professional form. Wrapping the `<input>` inside the label is something you may or may not want to do - it makes it harder to line up the start of the input fields.  

<div class="try-it">
  <h2>Try It: Styling Forms</h2>
  <p>Find some inspiration. Go to one of your favorite websites and find a form that you want to recreate. Need some help with ideas? Look at <a target="blank" href="https://app.pairin.com/">Pairin</a>, <a target="blank" href="https://github.com/">GitHub</a> (you'll have to logout), or <a target="blank" href="https://www.codecademy.com/login">Codecademy</a>.</p>
  <p>While your form won't <em>do</em> anything yet, we can style it up to look just as good as a professional site. In the next lesson, we'll dig into that functionality!</p>
</div>
