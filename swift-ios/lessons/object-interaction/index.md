# Object Interaction

## Learning Goals

* Students will be able to explain the difference between a class and an object
* Students will be able to write a program where 2 or more classes interact

## Technical Vocabulary

* Class
* Object
* Initializer
* Property
* Action

## Creating Objects with Classes

Up until now, we've only written classes to the extent that we can print details about an object created from those classes. When we build more complex programs, we typically have many classes, and the objects from those classes interact in some way.

Let's look at an example, step by step.

With your partner:
- Explain what is happening on each line of the following code snippet
- Predict what will print to the console for the three print statements at the bottom

```swift
// Fridge.swift

class Fridge {

  var brand = ""
  var color = ""
  var temperature = 0

  init(fridgeBrand : String, fridgeColor : String, fridgeTemp : Int) {
    brand = fridgeBrand
    color = fridgeColor
    temperature = fridgeTemp
  }
}
```

```swift
// main.swift

var fridge = Fridge(fridgeBrand: "Maytag", fridgeColor: "White", fridgeTemp: 34)
print(fridge.brand)
print(fridge.color)
print(fridge.temperature)
```

As of now, our fridge can't **do** much, it just sits there once it's created with its properties. Let's a property where the Fridge can store foods (let's call it contents), then an action that lets the Fridge add new foods to it.

<div class="try-it">
  <h2>Turn & Talk</h2>
  <p>What data type should our <code>contents</code> property be? (String, Integer, Array, Dictionary) Explain your reasoning.</p>
</div>

### Update Fridge

Let's update our fridge with that contents property:

```swift
class Fridge {

  var brand = ""
  var color = ""
  var temperature = 0
  var contents = [String]()

  init(fridgeBrand : String, fridgeColor : String, fridgeTemp : Int) {
    brand = fridgeBrand
    color = fridgeColor
    temperature = fridgeTemp
  }

}
```

Since we are starting with an empty array, we know that at some point we are going to add things to it. Think back to our Arrays lesson, we learned about the `append` method. For our fridge action, it might look like this:

```swift
func addFood(food : String) {
  contents.append(food)
}
```

<div class="try-it">
  <h2>Try It: Add contents to Fridge</h2>
  <p>Write a Fridge class in Xcode, and write several print statements to see what data is stored in your properties. Then, call <code>fridge.addFood("your favorite food")</code>, and then another print statement for <code>fridge.contents</code>. Do you have "your favorite food" in your fridge now?</p>
  <p>Check in with your partner and make sure you both have this working.</p>
</div>

## Build a Second Class

We have a bit going on with our fridge, but no interaction yet. Let's make a food class, then we'll come back and edit our fridge.

```swift
class Food {

  var name = ""
  var calories = 0

  init(foodName : String, numberCalories : Int) {
    name = foodName
    calories = numberCalories
  }

}
```

## Object Interaction

Now that we have Food objects with a little more information than a string, we can start making our Fridge and Food objects interact. In `addFood`, we will actually create a food object with that string that is passed in. This means we also need to pass in an Int to `addFood` for the calories. Let's update that method:

```swift
func addFood(food : String, calories : Int) {
    var newFood = Food(foodName: food, numberCalories: calories)
    foods.append(newFood)
}
```

Notice that the food object is stored in a variable called `newFood`. On the next line, we are still using the `append` method, this time appending a food object instead of the food string.

<div class="try-it">
  <h2>Try It: Loop over Fridge contents</h2>
  <p><strong>First</strong>, update your Fridge and Food classes to reflect what we've talked about, then add the following to your `main.swift` file:</p>
  <code>var fridge = Fridge(fridgeBrand: "Maytag", fridgeColor: "White", fridgeTemp: 34)</code><br><br>
  <code>print(fridge.foods)</code><br>
  <code>fridge.addFood(food: "cheese", calories: 100)</code><br>
  <code>fridge.addFood(food: "RX Bar", calories: 230)</code><br>
  <code>fridge.addFood(food: "Fruit Snacks", calories: 90)</code><br>
  <code>print(fridge.foods)</code><br><br>
  <p>What you see printed out probably looks something like: `[]` `[object_interaction.Food, object_interaction.Food, object_interaction.Food]`. Notice there are three elements in this array, which seems to match the three times `addFood` was called, but I want more info about each element.</p>
  <p><strong>Second</strong>, write a `for-in` loop to print out the name and calories of each food in the fridge.</p>
</div>

## Object Interaction

There are many ways objects can interact; we will mainly work with code that looks like what we did with the fridge and foods today.

To recap:
- We wrote two classes that had a relationship (a fridge has a collection of foods)
- We wrote an action on the fridge that adds foods
- The method takes in any arguments that are required to create a food, then creates a food, then appends that food to the fridge's property.

## Vocabulary Reflection

* Class
* Object
* Initializer
* Property
* Action

<div class="practice">
  <h2>Practice: Object Interaction</h2>
  <h3>Part 1: Campers and Camps</h3>
  <p>Your job is to build a Student/Scholar/Camper class and a Camp class. You can choose what properties each class has on it. The Camp class should have an <code>addCamper</code> action on it, which creates a Student/Scholar/Camper object and stores that in a list of all the campers.</p>
  <h3>Part 2: Camps and KWK</h3>
  <p>Build a KWK class that creates and stores camps. The KWK class should have a year property. Make sure your camp has a location and title (Web Application or Swift/iOS).</p>
</div>
