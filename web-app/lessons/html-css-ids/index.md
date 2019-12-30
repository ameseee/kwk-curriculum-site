---
title: HTML & CSS: Classes & IDs
---

IDs are similar to classes, but add one more layer of complexity. On the surface, they look and behave a lot like our classes. IDs are really meant to only be used once. Classes can, and usually are, used multiple times. Here's an example of an ID in action:

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
  <p>Looking at the HTML and CSS above, what color do you predict each paragraph will be?</p>
  <p>Based on what you know about the syntax for rules for classes, what do you think the syntax for IDs is?</p>
</div>

### Syntax

As you may have predicted in the last activity, the syntax for selecting elements by ID is similar to that of classes.

```css
/* this rule will target ANY element with the ID of "nasa-suit-cost" on it */
#nasa-suit-cost {
  color: midnightblue;
}
```

Since we are targeting an ID, we have to be really specific in telling the computer how to do that - when it sees a `#` it will look for an ID name that matches the words following the `#`.

The rule above will look for every element — regardless of type — that has the ID of `nasa-suit-cost` and style it with a midnightblue color. Again, if we are using IDs correctly, we should only have _one element_ that has this ID.

### Class or ID?

You may be noticing that classes and IDs do essentially the same thing. They do! So, why do we have both?

Classes can be used by many elements. If you want several elements to share styles, they should all get the same class name. IDs should only be used by one single element.

You can think of them in terms of a common school situation:
- **Class:** The class all shares a teacher. That teachers name may be written in every single planner, or on the top of a paper that is submitted.
- **ID:** Every scholar has their own lunch number, or phone number, etc. that is unique to that ONE scholar. It should only be used for them.

At the end of the day, it won't mess anything up if you use the "wrong" one. If you aren't sure, it's good to default to using a class.

### Classes _and_ IDs

Occasionally, you'll see the use of a class _and_ an ID on the same element. Why?

There may be several reasons for this. When it comes to styling, we may have two paragraphs that should have a lot in common. But one of them should also have a unique style. Both paragraphs can have the class with all the styles they share, then the second has an ID with its unique styles.
