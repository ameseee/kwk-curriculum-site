---
title: StoryBoard
---

## Learning Goals

* Add UI elements to the StoryBoard using the Object Library
* Make UI look clean on all device sizes using constraints
* Add a home screen icon into the project

## Technical Vocabulary

* StoryBoard
* UI
* Constraints
* Object Library

## Xcode Projects

Up until now, we've mainly worked in Xcode Playgrounds, which are a great place to run code, but we can't build real iOS apps in it. Xcode _Projects_ is a place where we can! A lot more than writing code goes into building an iOS app, but we do it all in Xcode. It is a big program with a lot of tools; we will take it one step at a time. [Here's](./assets/xcode-map.png) a map of the main features in Xcode.

Either watch the video below, or watch your instructor walk through how to navigate an Xcode Project.

<p class="to-do">insert video</p>

## StoryBoard & Object Library

Before we write all the Swift code we've been learning to make our app DO something, we want to completely set up the **UI (user interface)**. We will drag and drop components of the UI from the Object Library onto the **StoryBoard**.

Either watch the video below, or watch you instructor walk through how to add objects from the Object Library to the StoryBoard.

<p class="to-do">insert video</p>

<div class="try-it">
  <h2>Try It: StoryBoard & Object Library</h2>
  <p>Open a new Xcode, iOS, Single View App project.</p>
  <p>In your new project, drag and drop at least 3 UI Objects (View, Image, Label) in from the Object Library. Run your project in the simulator.</p>
  <p>Now, look at your project on a different device. Does it look right? In the next section, we will learn how to lay out our objects so they look great on all devices.</p>
</div>

## Constraints

Everything looks great on my iPhone 8 screen, but in the simulator... not so much. Also, on the iPad Pro, everything is on the far left. **Constraints** are settings on UI Objects that make them appear the way we expect on ever device

<p class="to-do">insert video</p>

<div class="try-it">
  <h2>Try It: StoryBoard & Object Library</h2>
  <p>Building on your project, add constraints to each UI Object. Make sure to get <em>one</em> object looking as expected before moving on to the next.</p>
</div>

## Nice-To-Know: Nav Bar and Tool Bar

The `Nav Bar` and `Tool Bar` are components of most apps we use on our phones. Follow the directions below to add them to your app!

* Drag and drop a `Navigation Bar` onto the StoryBoard
* Drag and drop a `Bar Button Item` - notice where you can place them
* Drag and drop a `ToolBar` onto the StoryBoard
* Drag and drop a `Bar Button Item` - notice where you can place them, you can also use `Flexible Space Bar Button Item` to control spacing.

## Nice-To-Know: Home Screen Icon

On the simulator, click the 'Home' button, and notice our app icon is pretty boring. Follow the directions below to add one to your app:

* To add an icon for iPad, it must be exactly 152x152. In Google Images search, you can select the 'Tools' button, then 'Size' dropdown, then 'Exactly' option.
* Drag and drop the image from your finder, into the '2x' box right above 'iPad App, iOS 7 - 11 76pt'
<p class="to-do">verify iPads that students will have with Tara</p>
* To see it appear, make sure you are running your simulator with a ___ iPad.

## iOS: StoryBoard

You are now building **real** iOS applications! To get some more practice, complete the exercise below. Feel free to reference any of the videos or your Try It project if you need help.

<div class="practice">
  <h2>Practice: StoryBoard</h2>
  <p>Plan out an app (it could be one screen on your favorite app, the app you're dreaming about making, or just a few simple elements!) by drawing it out on a sketch paper. Label the different parts of your app with the names of the Objects from Object Library you will need to use. Keep in mind the Design Principles we talked about!</p>
  <p>In your new project, drag and drop at least 3 UI Objects (View, Image, Label) in from the Object Library. Each time you add one, do the following:</p>
  <ul>
    <li>Check the appearance on the simulator</li>
    <li>Set constraints on each UI Object</li>
    <li>Check the simulator again</li>
  </ul>
  <p>Now, add an icon image. Run in simulator to make sure it was loaded in correctly!</p>
  <h3>Extension</h3>
  <p>Start over! Drag a Navigation Bar onto the View Controller. Edit the title. Drag 1 or more Navigation Item onto the Navigation Bar - play around with the different icons that are built in that you can use! Finish the UI for the rest of your app now that you have a Navigation Bar! Add an icon image - this time, make sure this will appear on any iPad by also including a 76x76 image in the 1x box.</p>
</div>
