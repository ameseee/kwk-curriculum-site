# Iteration 0: Static To-Dos

## Learning Goals

* Implement wireframes into a UI
* Create navigation controllers and segues

### Getting Started

* On your laptop, find the Xcode application by typing `cmd + space`, typing in `xcode`, then press return
* Click `Create a new Xcode project`
* Under `Choose a template for your new project`, select `iOS`
* Under `Application`, select `Single View App`
* Click the blue `Next` button in the bottom right corner
* ❗️You must check the `Use Core Data` box!❗️
* You will be prompted to save this file. For `Product Name`, type in "whatever name your want to officially title your app", then click the blue `Create` button in the bottom right corner
* **NOTE:** This will be your ACTUAL project! From now on, you won't really be creating new projects, just opening this one up and working from wherever you left off.
* In your terminal, navigate to the directory. Run `git init` to initialize a local Git repository. Then run `git add .` and `git commit -m "Initial commit"` to save this starting place in your Git history.

## What we're building

This is a really cool ToDo List application that has never been built before 🙄😛🤗. You can create a new ToDo, indicate if it is important, and delete it from your list once you have completed it. Genius!

<img class="extra-small" src="{{ site.url }}/swift-ios/projects/to-do-list/assets/to-do-list.gif">

## Setup

* Head over to `Main.storyboard` and delete the existing View Controller

* From the Navigation Pane, delete the `ViewController.swift` file associated with that View Controller (Move to Trash)

* From the Object Library, add a `Table View Controller` to the Storyboard

* With the `Table View Controller` selected in the Storyboard, embed it in a `Navigation Controller` (select this option from Editor)

<img class="medium" src="{{ site.url }}/swift-ios/projects/to-do-list/assets/embed-in-nav.png">

This should have added a `Navigation Controller` to the Storyboard and added a `Navigation Item` to our Table View Controller. We now want to make sure that this is our point of entry for our ToDo List application.

* With the Navigation Controller selected, make sure `Is Initial View Controller` is checked in the Attributes Inspector

If we select the `Navigation Item` in the `Table View Controller`, we can now add a Title to our app (ToDo List or whatever you prefer)

<img class="medium" src="{{ site.url }}/swift-ios/projects/to-do-list/assets/nav-item.png">

We now want to add a `Bar Button Item` that will take us to another View to add a ToDo. You can customize this however you like.

<img class="medium" src="{{ site.url }}/swift-ios/projects/to-do-list/assets/bar-button-item.png">

Great! Let's connect this Table View to some code!

* Create a ToDoTableViewController file (File -> New -> File... -> Cocoa Touch Class -> Next).

Don't forget to make this a subclass of `UITableViewController` and connect it to the `TableViewController` on your storyboard!

<img class="medium" src="{{ site.url }}/swift-ios/projects/to-do-list/assets/connect-to-do-table-vc.png">

## Create a Custom ToDo class

* Create a new file (File ➡ New ➡ File... ➡ Swift File ➡ Next) and name it `ToDo` (this will create a ToDo.swift file in our project)
* Delete `import Foundation` and add `import UIKIt`
* Create a ToDo class that has 2 properties... `name` and `important` - if you need a refresher on how to create a class and add properties, take a look back at [this lesson]({{ site.url }}/swift-ios/lessons/classes-objects)

It probably makes sense to initialize `name` to an *empty string* and `important` to the boolean *false*. And that's all we need to do for our ToDo class!

## Create Some Static ToDos

* Back in our `ToDoTableViewController`, we need to make a function that will create toDos and return an array of toDos (we'll hard-code this for now and replace it a little later when we hook up CoreData)

```swift
func createToDos() -> [ToDo] {

  let swift = ToDo()
  swift.name = "Learn Swift"
  swift.important = true

  let dog = ToDo()
  dog.name = "Walk the Dog"
  // important is set to false by default

  return [swift, dog]
}
```
* We also need to create a toDos property on our `ToDoTableViewController` class (above our viewDidLoad func)

```swift
var toDos : [ToDo] = []
```

* Inside `func viewDidLoad()`, delete all the commented out code and reassign toDos to our createToDos function (now toDos will be the array of toDos we returned from the function)

```swift
override func viewDidLoad() {
  super.viewDidLoad()

  toDos = createToDos()
}
```

Let's clean this file up a little more. You can delete all the other functions in this file **except** the `tableView` function with `numberOfRowsInSection`, the `tableView` function with `cellForRowAt`, and the last `prepare` function that has to do with segue navigation (you can leave this commented out for now).

* In the `tableView` function with the argument `numberOfRowsInSection`, we want to return `toDos.count`

```swift
override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
  return toDos.count
}
```

* In the `tableView` function with the argument `cellForRowAt`, we want to copy the string **reuseIdentifier**
* Now go back to the Storyboard and click right under Prototype Cells to highlight the Table View Cell
* In the Attributes Inspector, paste **reuseIdentifier** into the `Identifier` field
* Now inside that same `tableView` function, we need to access a single toDo

```swift
override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
  let cell = tableView.dequeueReusableCell(withIdentifier: "reuseIdentifier", for: indexPath)

  let toDo = toDos[indexPath.row]

  return cell
}
```

* Now let's add some code to get our toDos to show up and to indicate if the toDo has been marked important

```swift
override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
  let cell = tableView.dequeueReusableCell(withIdentifier: "reuseIdentifier", for: indexPath)

  let toDo = toDos[indexPath.row]

  if toDo.important {
    cell.textLabel?.text = "❗️" + toDo.name
  } else {
    cell.textLabel?.text = toDo.name
  }

  return cell
}
```

**BOOM!** You should now be able see our hard-coded toDos in the Table View when you run the application!

### Commit Your Work

In your terminal, make sure you are still in the viewfinder directory. Add and commit your changes. Your commit message should be something like "Complete Iteration 0".

Let's keep going! [Move on to Iteration 1]({{ site.url }}/swift-ios/projects/to-do-list/i1)
