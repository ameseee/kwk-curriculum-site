---
title: Terminal
---

## Learning Goals

* Use terminal to navigate to a project
* Use terminal to create directories and files
* Use terminal to open projects in the browser

## Technical Vocabulary

- terminal
- command
- directory

## Navigating the Terminal

**Note:** All of the examples below start with a `$`. This indicates the terminal's prompt for a user to type in a command. You do not need to type in that `$`, just the command following it.

The terminal is like the "programming version" of your finder. In it, you can access and open any file, or directory, on your computer, and do much more. We won't go too far in depth, but you do need to know a few commands in order to navigate to a project. To open the terminal, press `cmd + space`, start typing in `terminal`, then hit `enter/return`.

To go into files, use `cd`. The following command will take me into my Desktop directory:

```bash
$ cd Desktop
```

To see what we have inside of a directory, use `ls`. For this command, the _only_ thing we type is `ls`; it is short for "list". It will list everything inside of the directory you are currently in.

```bash
$ ls
=> flexbox      html-in-atom     responsive-design        
```

If I wanted to see what was inside the flexbox directory, I could run:

```bash
$ cd flexbox
$ ls
=> index.html       styles.css
```

If we now want to leave flexbox and go back to the Desktop, we can `cd` out, or up:

```bash
$ cd ..
$ ls
=> flexbox      html-in-atom     responsive-design   
```

(make sure you include that space between `cd` and `.`)

## Creating Directories & Files

We can also use the terminal to create **directories**, or folders, and files.

To create a directory, use the `mkdir` command, then the desired name of the directory. To create a directory titled "intro-to-css", we would run:

```bash
$ mkdir intro-to-css
```

It's important to not that you cannot have spaces between words in directory or file names; you'll typically see the dash, `-`, used to separate words.

Now that we have an `intro-to-css` directory, we need to make some files. First, let's change into that directory:

```bash
$ cd intro-to-css
```

Now, let's create two files using the `touch` command:

```bash
$ touch index.html
touch styles.css
```

We won't get any output, or feedback, from running those, we can run `ls` to see the list of files inside of `intro-to-css`:

```bash
$ ls
=> index.html     styles.css
```

## Opening a Project in the Atom & Browser

Now that we have this directory and empty files, we need to write some code! We can actually open the project in Atom from the terminal. Running `atom .` opens up _all_ directories/files inside of your current directory.

```bash
$ atom .
```

Once you've written some code and want to check it out in the browser, you can open it from the terminal as well! Assuming the name of your HTML file is `index.html`, run the following:

```bash
$ open index.html
```

Chrome should open up and show your page. Since your HTML will be responsible for pulling in the CSS and JavaScript files, this is all you need to do!

<div class="practice">
  <h2>Practice: Terminal</h2>
  <p>Follow all of the directions below using <em>only</em> your terminal.</p>
  <p>On your Desktop, create a new directory called <code class="try-it-code">practice-terminal</code>. Inside of it, create 3 files: <code class="try-it-code">index.html</code>, <code class="try-it-code">styles.css</code>, and <code class="try-it-code">index.js</code>.</p>
  <p>Open your project in Atom and add some HTML. Now, open the site in Chrome and make sure you can see whatever should be on the screen!</p>
</div>
