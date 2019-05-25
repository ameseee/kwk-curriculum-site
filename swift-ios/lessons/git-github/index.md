---
title: Git & GitHub
---

## Learning Goals

* Use terminal to navigate to a project & use version control
* Create a GitHub repository and push local code to it

## Technical Vocabulary

- Git
- version control
- terminal
- GitHub
- local repository
- remote repository

## Version Control

Have you ever used GoogleDocs? Have you noticed the feature where you can save as you go, then look back and see when changes were made and who made them? That's what version control does for our code.

**Version control** is a tool that keeps track of the differences in code bases at different points in time. One common software for this is called **git**. We interact with git from the **terminal**. These are tools that all professional developers use.

## Navigating the Terminal

The terminal is like the "programming version" of your finder. In it, you can access and open any file, or directory, on your computer, and do much more. We won't go too far in depth, but you do need to know a few commands in order to navigate to a project:

To go into files, use `cd`. The following command will take me into my Desktop directory:

```bash
$ cd Desktop
```

To see what we have inside of a directory, use `ls`. For this command, the _only_ thing we type is `ls`; it is short for "list". It will list everything inside of the directory you are currently in.

```bash
$ ls
=> class-objects      object-interaction     aviatrix        
```

If I wanted to see what was inside the aviatrix directory, I could run:

```bash
$ cd aviatrix
$ ls
=> AviatrixApp		AviatrixApp.xcodeproj
```

If we now want to leave aviatrix and go back to the Desktop, we can `cd` out, or up:

```bash
$ cd ..
ls
=> class-objects      object-interaction     aviatrix  
```

(make sure you include that space between `cd` and `..`)

## Git/Local Repository

The git commands work similar in the terminal. When we work with a project on our machine, we are working on the **local** repository. Local refers to being physically here, on this machine. Here are the main commands we will use at camp:

- `git init` - creates a git project; this is only used once per project
- `git add .` - this stages your work to be committed
- `git commit -m "Message about your work"` - this commits your work to the project's history
- `git status` - this gives you information about your project, tells you if you have any changes to add or commit

<div class="try-it">
  <h2>Try It: Local Repository</h2>
  <p>In Xcode, create a new project. Title it "practice-git". Add something to the StoryBoard.</p>
  <p>In your terminal, <code class="try-it-code">cd</code> into your "practice-git" directory and run <code class="try-it-code">git init</code>.</p>
  <p>Now, run <code class="try-it-code">git status</code> and read the output.</p>
  <p>Run <code class="try-it-code">git add .</code>, then re-run <code class="try-it-code">git status</code> and read the output.</p>
  <p>Run <code class="try-it-code">git commit -m "Initial commit"</code>, then re-run <code class="try-it-code">git status</code> and read the output.</p>
</div>

## GitHub/Remote Repository

GitHub is the cloud version of Git. Even though you committed your work, only your computer knows about it. When code is shared on GitHub, you can share it with other developers, or access it from your computer at home. It's also nice to have in case something were ever to happen to your computer, you still have your work. If you've ever used Microsoft Word - Word is like Git, and GoogleDogs is like GitHub. When our work is on GitHub, it's called a **remote** repository.

Go to <a target="blank" href="https://github.com/">GitHub</a> and create an account.

When you are logged in to your account, click the plus sign at the top right corner of the page, and select "New repository". In the repository name field, type in "practice-git". Click "Create repository".

What we've done is create a repository on GitHub named the same thing as our local repository. We now need to get them to know about each other so they can both have all your code.

You now see a page with three options. Look to the section that looks like this:

<img class="medium" src="{{ site.url }}/web-app/lessons/git-github/assets/create-repo.png" alt="Directions to create from existing repo from command line">

Copy that first line, then paste it into your terminal (you should still be in the responsive-design directory while doing this). Now, copy and paste in the second line.

Go back to GitHub and refresh the browser. The page should change quite a bit, you should see something more like this:

<img class="small" src="{{ site.url }}/web-app/lessons/git-github/assets/repo.png" alt="Screen shot of a repository page on GitHub">

## Updating GitHub

We use version throughout a project, not just at the very end. So, when we are done with a chunk of your work, you'll want to commit and push up to GitHub. You'll follow the same steps:

- `git status`
- `git add .`
- `git status`
- `git commit -m "Message about your work"`
- `git status`

<div class="try-it">
  <h2>Try It: Updating GitHub</h2>
  <p>In Xcode, establish an outlet or action for an object.</p>
  <p>In your terminal, run the commands necessary to commit and push to GitHub.</p>
  <p>Go back to the GitHub repository and refresh the page. You should see your most recent commit, and if you click into the `ViewController.swift` file, you should see the outlet or action you just created!</p>
</div>
