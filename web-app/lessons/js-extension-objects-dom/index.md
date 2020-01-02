---
title: JS Extension: Using Objects with DOM Manipulation
---

## Objects

On most sites, we provide more than one piece of information, usually it's at least three. The more data we have to deal with, the more variables we have, it gets harder to read and messier to update... etc. If you are dealing with 3 or more pieces of information from a user, it's recommended to store them in an **object**. Here's an example:

```javascript
function appendScholar() {
  event.preventDefault();

  var firstName = $('.first-name').val();
  var studying = $('.studying').val();
  var city = $('.city').val();

  var scholarInfo = { firstName: firstName, studying: studying, city: city };

  cardContainer.append(`
    <div class="name-card">
      <p class="name">
        ${scholarInfo.firstName} is studying ${scholarInfo.studying} in ${scholarInfo.city}!
      </p>
    </div>
  `);
}
```

The full project that the snippet above works with can be found in [this CodePen](https://codepen.io/turing-kwk/pen/WNbXbWq).

What's different about this is, instead of interpolating the `firstName`, `studying`, and `city` variables, we are first packaging them up in an object.
- The object is stored in a variable called `scholarInfo`
- The object has three key/value pairs in it
- In the key/value pair `firstName: firstName,` - the first instance of `firstName:` is declaring a new key in the object. The second instance of `firstName;` is assigning the value of that key to the value of the `firstName` variable we declared a few lines above. The same pattern is followed for the second and third keys!

## Benefits of Using Objects

For this isolated project, it's hard to see the benefits of using an object. By using the object, we actually added some code!

Move on to the self-guided resource on [Refactoring](../js-extension-refactoring) to see the benefits play out.
