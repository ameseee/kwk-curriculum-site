---
title: JS Extension: Using Objects with DOM Manipulation
---

## Appending Lots of Info

On most sites, we provide more than one piece of information, usually it's at least three. The more data we have to deal with, the more variables we have, it gets harder to read and messier to update... etc. If you are dealing with 3 or more pieces of information from a user, it's recommended to store them in an **object**. Here's an example:

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

As a class, let's discuss what is happening here. Why would this be a benefit? (If you're not quite sure yet, that's ok!)
