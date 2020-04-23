# Don't

**Prevent window/tab change detection using prototype hacking and events propagation blocking.**

This code is designed to cripple the Page Visibility API so web pages can no longer detect `Alt+Tab`bing, switching windows, tab, ...
This does not touch any mouse and keyboard related APIs and events. This means that things like [ifvisible.js](https://github.com/serkanyersen/ifvisible.js/) can still detected you being "idle" when you're not moving a mouse (but it can not detect changing windows and tabs).

Use at your own risk.
