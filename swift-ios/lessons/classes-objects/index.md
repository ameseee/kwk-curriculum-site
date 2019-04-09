# Classes and Objects

## Learning Goals

* Students will be able to create a class and objects
* Students will be able to explain the difference between a class and an object
* Students will be able to create dynamic objects using the `init` function and properties

## Technical Vocabulary

* Class
* Object
* Initializer
* Property
* Actions

## Classes

When we work with classes, we think about our code in terms of objects. A class is like a blueprint, or a cookie cutter for our code. It's a is a chunk of code, usually in it's own file, that can hold data and function for one. It kind of serves as a factory - think about a car factory - they have a blueprint, then make thousands of cars from that blueprint. The cars from this blueprint will have a lot in common, but each may have it's own differences - colors, fabric for seats, etc.

Together, we are going to make a student class. It will be a blueprint for a student, then we will make individual students using that blueprint.

### Turn & Talk

With your partner, make a list of things that all students have - they don't have all to be the same. The first thing on the list might be "name".

We are about to write a Student class, but first, here are a few things you may want to know about classes:
* start with keyword `class`, lowercased
* class name is next, 1st letter capitalized
* open code block with curly brackets

```
class Student {
  // code will go here
}

var newStudent = Student()
print(newStudent)
```

The code above isn't much, but it is a class! When this file runs, we will see something like `__lldb_expr_3.Student` print out, which looks funky, but what matters most is the ending of `.Student`. This tells us that the value of the `newStudent` variable was created from the Student class.

Let's add some **properties** to our class:

```
class Student {
  var grade = 10
  var studying = "Swift"
  var name = "Ophelia"
}

var newStudent = Student()
print(newStudent)
```

A **property** is a piece of information that we want to attach to each object made from a class. Right now, every student object we create with the Student class will be labeled as in grade 10, studying Swift, and named Ophelia.

To illustrate this, we can add some print statements using the dot notation:

```
print(newStudent)
print(newStudent.grade)
print(newStudent.studying)
print(newStudent.name)
```

It's safe to say all students in _this camp_ are studying Swift, but it's unlikely that every student is in grade 10, and extremely unlikely that everyone has the same name.

Luckily, Swift gives us a way to personalize each object when it's created. It will look similar to the way we pass arguments to functions. We will do with with an **initializer**.

## Initializer

the initializer is a special function inside of a class. `init` is a keyword, if you write a function called `init` inside of a class, it will be called when you create an object from that class. One difference is that we _don't_ use the `func` keyword.

`init` runs once and only once: when we create a new object from the class. It is written inside the class, below any property variables we declare for that class. It can take arguments, which can help make our class dynamic, in this case, give each student their own name.

Let's add this init function into our class, giving it an argument of studentName, which is a string.

```
class Student {

  var grade = 10
  var studying = "Swift"
  var name = ""     // default this to an empty string!

  init(studentName : String) {
    name = studentName
  }

}
```

Inside of init, we've re-assigned `name` to whatever studentName was passed in as. This won't work quite yet, because when we call `Student()`, we are not passing it a `studentName` argument like it expects. Let's pass it Student(studentName : "Viola") and re-run.

```swift
var newStudent = Student(studentName : "Viola")
```

You should now see the print statement reflecting the new name that was passed in.

### Practice

If you didn't code along, get update on what we have for the student class. Then, add another argument and re-assignment in `init` for the gradeLevel so that we can have students in different grades.

## Actions

Classes can have properties AND actions! Actions are simply functions that are associated with a class. Like `init`, they are written inside the `{}` curly braces of the declared class. This means that every object created from a class, will have **access** to this function. Let's write one so we can see it in action.

Here's an example, building on our Student class:

```swift
class Student {

  var studying = "Swift"
  var name = ""
  var grade = 0

  init(studentName : String, studentGrade: Int) {
    name = studentName
    grade = studentGrade
  }

  func writeCode() {
    "\(name) is busy writing code!"
  }

}
```

Now we can check that is it working by calling the method on the object. This looks a lot like the syntax when we call on properties, but we need to **call** the function using the `()`.

```swift
var newStudent = Student(studentName: "Amy", studentGrade : 11)
newStudent.writeCode()
```

`writeCode()` is a function, but more specifically an **action** for this class, and this class only. You can even try calling it in the file without the newStudent, preceding it, and see an error!

### Practice

Update your code so that you have the `writeCode` action. Then, add another method of your choice to the student class! Call the action on an object to make sure it's working as expected.

## Classes vs. Objects

Classes are the blueprints or cookie cutters. Objects are created from the class - in many cases we will pass an argument in to create a class that changes it's properties. There can be MANY objects that are created from just one class!

### Practice

Go back into your code and create at least 3 more student objects using the student class.

Now, to prepare ourselves for the Aviatrix project, we are going to use a different tool to run our code.

Open up Xcode and follow these directions to start it:

* `Create a new Xcode project`
* Under `Choose a template for your new project`, select `macOS`
* Under `Application`, select `Command Line Tool`
* Click the blue `Next` button in the bottom right corner
* You will be prompted to save this file. For `Product Name`, type in "ClassesAndObjects", then click the blue `Create` button in the bottom right corner
* You will see a `main.swift` file in the file tree on the far left, inside of the ClassesAndObjects folder. Right click on the folder, select `New File`, make sure `Swift File` is selected, then click `Next`
* Name the file `TheNameOfYourClass`, then click `Create`
* Inside the `TheNameOfYourClass` file, copy and paste your class, nothing else.
* Inside the main.swift file, copy and paste everything else.
* To run the code, click the play button in the top left corner of the screen.

The exact same thing is happening, but we now have our code organized out into files with a single responsibility. 

## Vocabulary Reflection

* Class
* Object
* Initializer
* Property
* Actions

## Practice

### Part 1: Choose Your Own Class

* With your partner, brainstorm another class. Remember, we used Student because all students share some things, and also had some unique things about them. If you are struggling for an idea, Car and Dog are both commonly used to practice work with classes 🚗 🐶
* With your partner, write a list of properties your class should have. What is true about every ____? (If you are talking about a car, every car has wheels...)
* What function, or action, do you want your _____ to take? (If it's a dog, I would want it to bark, sit, fetch...) Come up with at least 2 actions!
* Write your class in an Xcode MocOS, Terminal Project
* Create variables for the properties your class needs
* Write the actions for your class
* In main.swift, create at least one object with this class and do some printing to make sure your class is behaving as expected
* Add in an `init` function so you can pass your class something specific to the object you are creating. (For a car, I would definitely want to make sure the color could change!)

### Part 2: Super and Sub Classes

* Read this [blog post](https://www.weheartswift.com/swift-classes-part-2/)
* What is a scenario where you could use a superclass and subclass?
* If you still have time, try to build the superclass and subclass you brainstormed. You can just create a new file in the project you've been working in.
