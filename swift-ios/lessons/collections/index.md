# Collections

## Learning Goals

* Students will understand what an array is and why they are useful
* Students will learn how to iterate over arrays
* Students will learn how to create an array & dictionaries and access data from them
* Students will know why we sometimes choose to use dictionaries over arrays

## Technical Vocabulary

* Array
* Index
* Element
* Dictionary
* Key / Value pair
* Initialize
* Iterate

## Collections

Collections are data types that hold multiple things - think about your grandma's cat statue collection - there is probably more than one, right?

In Swift, we will be working with two types of collections: **arrays** and **dictionaries**. Arrays and dictionaries have some things in common, but they are distinctly different data types, and used for different purposes.

## Arrays

Arrays are useful whenever you need to keep track of an ordered list of things. This is similar to how we keep track of lists in the real world. When we write out a grocery shopping list, we use _one_ piece of paper to keep track of all the items we need.

An array is an _ordered_ collection that stores multiple values of the same type. An array can store any kind of element - from integers to strings to objects. Elements inside an array are separated by a comma.

Now that we know a bit about arrays, we want to talk about how to create them. We can **initialize** them in 1 of 2 ways:

- Empty
- With data

### Creating an Empty Array

The code below shows the syntax to initialize, or create, an empty array. In the data types lesson, we talked about creating a variable before you know the value, and if you want to do that, you need to tell Swift what data type that variable will hold. We are using the same concept here:

```swift
var arrayOfStrings = [String]()

var arrayOfIntegers = [Int]()
```

The examples above create empty arrays which can in the future hold strings and integers respectively.

If you've worked in other languages, you may have noticed that it's possible to hold different data types in an array. Swift has very strict rules, and doesn't allow this. The thinking behind this is - if we have a list of things that go together, they should be the same data type. Maybe this is a list of names (strings) or grades that one student got (integers).

### Creating an Array with Data

Instead of declaring an empty array, we can also declare an array that starts with data, like this:

```swift
var shoppingList = ["Bread", "Cheese", "Milk", "Bacon"]
```
This array is stored in the variable `shoppingList`, so anytime we call this variable, we will get back this whole list!

### Turn and Talk

* With your partner, explain the following:
  - What is an array?
  - Why are they useful?
  - How do you initialize an array?

### Accessing Information

Each element in an array is automatically assigned a number called an **index**. This index can be used to access a specific element inside the array. Indices begin at 0 and count up. If we look back at our `shoppingList` array, the following would be true:

```swift
var shoppingList = ["Bread", "Cheese", "Milk", "Bacon"]
```

* "Bread" has an index of 0
* "Cheese" has an index of 1
* "Milk" has an index of 2
* "Bacon" has an index of 3  

By using the square brackets, we can use the index to access a specific value in an array.

```swift
var shoppingList = ["Bread", "Cheese", "Milk", "Bacon"]

shoppingList[2]
=> "Milk"

shoppingList[0]
=> "Bread"
```

Side note: The lines `=> "Milk"` and `=> "Bread"` are indicating the return value of the previous code; it's just a way to notate what happens after writing some code.

### Updating Information

We can also update elements with the square bracket syntax we looked at earlier. We access the index value that we would like to change, and then reassign a new value for that index with a  `=`

```swift
var shoppingList = ["Bread", "Cheese", "Milk", "Bacon"]

shoppingList[2] = "Candy"

=> ["Bread", "Cheese", "Candy", "Bacon"]
```

### Adding Information

A common way to add something to an already existing array is to use the append() method - which will add an element to the end of the array

```swift
var shoppingList = ["Bread", "Cheese", "Candy", "Bacon"]
shoppingList.append("Pasta")

=> ["Bread", "Cheese", "Candy", "Bacon", "Pasta"]

```

### Removing Information

A common way of removing elements is to use the remove(at:) method - which will remove an element at whatever index you type in after the `at:`

```swift
var shoppingList = ["Bread", "Cheese", "Candy", "Bacon", "Pasta"]
shoppingList.remove(at: 0)

=> ["Cheese", "Candy", "Bacon", "Pasta"]

```

### Practice

Create an array of 3 adorable animals, and store it in a variable. Then, take these steps:
- Access the second animal using `[]` notation
- Add another adorable animal
- Change one of the adorable animals
- Remove the third animal from the array

## Iterating Over Elements in an Array

When you need to perform an operation on all of an array's elements, you can **iterate** over the array.  The most common way to do this is to use a `for-in` loop. Looking back at our shopping list from earlier, we can use a `for-in` loop to print every value in the array.

Here is an example of the syntax:

```swift
for item in shoppingList {
  print("We need some " + item)
}

=> "We need some Cheese"
=> "We need some Milk"
=> "We need some Candy"
=> "We need some Pasta"
```

The benefit of this is it saves us time. When we want do to the same thing for lots of items, we only have to write that command _once_. If we didn't use an array and use this `for-in` loop, out code would look like this:

```swift
print("We need some " + item[0])
print("We need some " + item[1])
print("We need some " + item[2])
print("We need some " + item[3])
```

Right now, this doesn't seem so bad. What if we had 100 items on our grocery list? 1000? That's a lot of lines of code to write and a lot of places we would need to update it every time we added or removed and item.

## Arrays IRL

Think about Instagram or Facebook - where might those applications use arrays? Write a list, then compare notes with your partner.


<br>
<br>
<br>
<br>

Applications like Instagram probably utilize arrays **a lot**. Each user has a list of followers and people they follow, they have a list of photos stored to their account, there is a list of people who liked each photo, probably more! What Instagram is doing, is iterating over those lists, then telling the program to render those to your laptop or phone so you can see the data.

## Array Practice

### Part 1: Hobbies
- Create an array of your top five favorite hobbies
- Change at least one of the values in the array
- Add a new hobby to the array
- Remove the second hobby from the array
- Print the value of the third element of the array
- You should have five hobbies in your array. Using a `for in` loop and string interpolation, iterate over the values in your array in order to print five strings that say "I love ______!"

#### Part 2: Do some research!

There are several ways to add, remove, and modify values in an array. There is also a variety of other ways to iterate over arrays. Using Google and the Swift documentation, find a _different_ way to do each of the following:

- add an element
- remove an element
- modify an element
- iterate

## Dictionaries

Dictionaries are another way to hold multiple pieces of data (collection). There is one big difference between them and arrays: Dictionaries are not ordered by index (0, 1, 2, etc.), instead, each piece of data has a 'label' instead of a number. We call the labels `keys` and the data `values`. `key/value pairs` is a term you will hear a lot.

### When to use Dictionaries

We just got the hang of arrays and are feeling pretty great about them - why do we also need dictionaries?
* When we don't care about the order of items (array)
* When we need an _associative_ relationship (title for some info)

If I wanted to make a list of all the dogs in my apartment building, I should use an array. They are all strings, they are all the same thing. I don't care about how old they are, or their owners, names, or anything else.

If I wanted to make a list of all the dogs in my apartment building and their birthday so that we can throw a party for each of them, I should use an array. There is an _associative_ relationship between each dog and it's birthday.

### Practice -  Array or Dictionary?

Turn and Talk: For each set of data, would an array or dictionary be better to store it? Why?

- List of all of the students in class
- List of states and their capitals
- List of things to pack for vacation
- Names of all the Instagram accounts I follow
- List of students and their birthdays


## Dictionary Syntax

### Creating Dictionaries

A cell phone vendor wants to keep a list of all the phones they sell so they can market it on their website. Let's make them a dictionary. The key will be the brand and the value will be the name of the phone. We can create a variable called `phones`, which is currently an empty dictionary which will hold a String in the key and a String in the value.

```swift
var phones : [String : String] = [:]

print(phones)
=> [:]
```

We can also initialize a dictionary _with_ data. See the syntax below:

```swift
var phones = [
  "apple": "iPhone",
  "google": "Pixel 2"
  ]
```

### Practice

Create a dictionary with a list of 3 people (yourself, family, friends, or other students here!) and their birthdays.

Use `print()` statements to verify your syntax is correct. Then use a `print()` statement to practice accessing specific pieces of data. Try to print your birthday by using the `[]` notation.

### Adding Data to Dictionaries

To add key/value pairs to my empty dictionary, we use also use `[]` notation. Instead of using a number like we will use a string - the label, or **key** for this set of data. Then, we will use the `=` to assign the value.

```swift
phones["apple"] = "iPhone"
phones["google"] = "Pixel 2"

print(phones)
=> ["apple": "iPhone", "google": "Pixel 2"]
```

Since we access values with the key, _keys must be unique_, meaning you can't have two things with the same key:

```swift
print(phones["apple"])

=> Optional("iPhone")
```

Notice that `Optional("iPhone")` was printed - not just the string "iPhone", like you probably expected. Swift is very specific and wants to make sure that there **is data** stored in the dictionary (in this case, phones["apple"]) before doing anything with the data; if it were `nil` it could cause problems in bigger programs.To tell Swift we are sure there is data, we do something called 'unwrapping' - by typing an exclamation point after the closing bracket.

```swift
print(phones["apple"]!)

=> "iPhone"
```

### Removing Data to Dictionaries

Let's say the company discontinues a phone and the vendor will no longer have them for sale. We need to help them remove this key/value pair for their dictionary so they don't have any angry customers. Unlike arrays, we don't have a special method that does this, we just set the value to `nil`.

```swift
print(phones["apple"]!)

phones["apple"] = nil

print(phones["apple"]!)
```

If we run this code, we will see quite an error! That's because the key "apple" no longer exists.

# **JUST** get the keys

Let's say we want a list of all the companies that make the phones, but we _don't_ want to have to look at the phone names. Check out the code below, then we'll explain what's happening.

```
phones.keys
Array(phones.keys)
```

`phones.keys` gives us a `keys` object with "apple", and "google" but is difficult to use because `keys` is not a commonly used data type. Typically, you'll see iOS developers wrap `Array()` around, in this case, the `phones.keys` so that `keys` objects can be converted into an array, which is much more friendly!

## Practice

### Part 1: Friend/Family Tree
Create a dictionary with keys that are family or friend titles (i.e. "sister", "bestFriend") and values that are the name of that family member or friend. Pets are family, too!
- Aim to have at least 10 family members of friends in your 'tree'
- Print to the console the entire dictionary
- Print to the console 3 individual names
- Remove someone from your tree  😔 (You can add them back if you want!)

### Part 2: Nested Collections

Create a dictionary in which the keys are strings and the values are arrays of strings. This is called a _nested_ collection, because it has collections inside of a collection.
* Need ideas for topics?
  - Re-write your family tree with arrays (it's ok to only have 1 item in some arrays). This will make keeping track of cousins easier in some cases!
  - Keys: dogs, cats, dinosaurs. Values: ["German Shepard", "Shih-Tzu", "Great Dane"], etc.

## Vocabulary Reflection

* Array
* Index
* Element
* Dictionary
* Key / Value pair
* Initialize
* Iterate
