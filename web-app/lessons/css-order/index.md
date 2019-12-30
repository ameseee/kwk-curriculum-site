---
title: CSS: Does Order Matter?
---

You may have wondered if the order your CSS rules are written in, matters. Let's explore to start answering that question ourselves!

<!-- send them to a CodePen I've made to make sure that something gets messed up... -->

<div class="try-it">
  <h2>Try It: Does Order Matter?</h2>
  <p>Go into one of your CodePens and try switching around the order of rules. Do you see any changes?</p>
  <p>Now, try switching around the order of property/values within a rule. Do you see any changes?</p>
</div>

The answer is: yes and no.

CSS stands for Cascading Style Sheets. It is read from top to bottom. In very rare cases, you will see that switching the order of rules or property/values within a rule will change the appearance of your site. For what we're doing here at camp, it's probably more important to be aware of the hierarchy of element ➡ class ➡ ID when targeting something to write a rule for.
