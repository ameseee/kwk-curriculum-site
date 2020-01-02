---
title: JS Extension: Refactoring
---

## Refactor Tractor

Our `appendScholar` example above has grown to 15 lines of code - that's quite long. It's borderline messy and hard to people new to this code to read. So, let's **refactor** it!

Refactoring is something we do once our code already works, but it's like editing it. We go back over it and look for opportunities to make it more readable or concise. When we notice that a function has more than 1 or 2 jobs, we need to refactor.

In the `appendScholar` function, it is gathering all the scholar information from the user, organizing it in an object, and then appending it:

```javascript
function appendScholar() {
  var name = $('.name').val();
  var studying = $('.studying').val();
  var city = $('.city').val();

  var scholarInfo = { name: name, studying: studying, city: city };

  cardContainer.append(`
    <div class="name-card">
      <p class="name">
        ${scholarInfo.name} is studying ${scholarInfo.studying} in ${scholarInfo.city}!
      </p>
    </div>
  `);
}
```

We're to create what is commonly referred to as a **helper** function, which will take one of the jobs. We can then call it from inside the other function.

```javascript
function getScholarInfo() {
  var name = $('.name').val();
  var studying = $('.studying').val();
  var city = $('.city').val();

  var scholarInfo = { name: name, studying: studying, city: city };

  appendScholar(scholarInfo);
}

function appendScholar(scholar) {
  cardContainer.append(`
    <div class="name-card">
      <p class="name">
        ${scholar.name} is studying ${scholar.studying} in ${scholar.city}!
      </p>
    </div>
  `);
}
```

<div class="try-it">
  <h2>Turn & Talk: Refactoring</h2>
  <p>Break this code down with your partner.</p>
  <ul>
    <li>Do we see any new code, compared to the original <code class="try-it-code">appendScholar</code> function?</li>
    <li>What is happening on the last line of <code class="try-it-code">getScholarInfo</code>? What is that line doing?</li>
    <li>Why is the <code class="try-it-code">appendScholar</code> function taking an argument?</li>
    <li>Which of these functions should be called in the event listener? Why?</li>
  </ul>
</div>
<br>

To make sure everyone is on the same page...

- Do we see any new code, compared to the original `appendScholar` function?
  * A new function was declared, but other than that, code was just moved around.
- What is happening on the last line of `getScholarInfo`?
  * `appendScholar(scholarInfo);`
- What is that line doing?
  * We are calling the helper, `appendScholar` and passing it 1 argument, the object of `scholarInfo`.
- Why is the `appendScholar` function taking an argument?
  * This function is the one that actually appends the information. We have to pass it the argument with they info so it has something to append.
- Which of these functions should be called in the event listener? Why?
  * The event listener should call `getScholarInfo` because that step has to be taken before the `appendScholar` can do its job.

<div class="try-it">
  <h2>Try It: Refactoring</h2>
  <p>Familiarize yourself with the code in <a href="https://codepen.io/turing-kwk/pen/GLbvdX">this CodePen</a>. Then, fork it to your account. Write down the steps you are going to take to refactor the <code class="try-it-code">appendNewUser</code> function. (Hint - there is more than on way to do this successfully!)</p>
  <p>Now, implement the code to refactor the <code class="try-it-code">addNewUser</code> function. Make sure the app is still working as expected.</p>
</div>
