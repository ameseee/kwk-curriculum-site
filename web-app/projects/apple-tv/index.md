---
title: Apple TV
---

Applying what you've learned about HTML, CSS, and JavaScript, then pushing yourself to do some problem-solving and research, you are going to build the functionality of letting a computer AirPlay to an Apple TV.

### Must-Haves

- A randomly-generated four-digit number should appear on the page
- An input field for the user to type in the number they see
- A button for the user to click when they've typed their input
- A message letting the user know if they typed the code in correctly or not

Here's a screenshot of what it could look like:

<img class="medium" src="./assets/apple-tv.png" alt="Application has a 4-digit number and place for user to enter text">
<br>
<br>

And here's a giphy of the small application in action:

<img class="medium" src="./assets/apple-tv.gif" alt="User types incorrect number and gets an error, then types correct number and gets 'in'">

### Tips

When you grab the value from an input field, it comes through as a string (yes, even if they only typed numbers!) You can use `parseInt()` to convert that input into a number.

Example: `var newNumber = parseInt("1723");` `newNumber` stores the number of `1723` instead of the string `"1723"`.

## Iteration 0

Write the HTML and CSS to create your desired layout!

## Iteration 1

Generate a random 4-digit number and store it in a variable at the top of your file. Display that 4-digit number in the browser.

## Iteration 2

Listen to the click of the button. In the event handler, compare the number that the user entered to the number displayed on above (the random number you generated).
- If they match, clear out the 4-digit number and replace it with a message letting your user know they were successful. You might want to use [`.html()`](https://api.jquery.com/html/)!
- If they don't match, insert a small error message to let the user know they weren't successful. Don't hide the 4-digit number though, they'll need to see that in order to try again. You might want to hide an error message using `visibility: hidden;` in CSS in a rule that you add and remove with jQuery.
