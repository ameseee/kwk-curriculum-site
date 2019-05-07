---
title: Alarm Clock/POM Timer
---

Applying what you've learned about Swift and StoryBoards, then pushing yourself to do some problem-solving and research, you are going to build an alarm clock!

You can decide if it's a countdown timer - set a timer for 30 minutes to study, or a timer that will go off at a certain time.

### Must-Haves

- A way for the user to "set" the alarm
- A current time/time left notification
- An alert when the alarm is up!

### Tips

- If you want this to work even when the user closes out of the application then comes back in, you'll need to use `CoreData`
- You'll most likely need to utilize `Timer.scheduledTimer` and `timer.invalidate()`.
- If you are planning to have a pause functionality, build the app _without_ that first, then add it on once you have the timer working as you want outside of the pause functionality.

Here's an example. It is currently counting down in seconds rather than minutes to more easily capture the functionality in this gif:

<img alt="Screenshot of study timer, ticking each second" src="{{ site.url }}/swift-ios/projects/alarm-clock/assets/example.gif">
