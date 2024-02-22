### [Windows Terminal](https://github.com/microsoft/terminal)

#### Install

Click on the down arrow symbol `˅` from menu bar. This will open a drop down menu from which select Settings option. Alternatively use `Ctrl + ,` to open Settings directly.

In the `profile.json` settings file for Windows Terminal, find the `schemes` section and paste the content of `dracula-pro.json`.

Example:

```json
"schemes": [
    {
        "name" : "Dracula PRO",
        "background" : "#22212C",
        "black" : "#22212C",
        "blue" : "#9580FF",
        "brightBlack" : "#504C67",
        "brightBlue" : "#AA99FF",
        "brightCyan" : "#99FFEE",
        "brightGreen" : "#A2FF99",
        "brightPurple" : "#FF99CC",
        "brightRed" : "#FFAA99",
        "brightWhite" : "#FFFFFF",
        "brightYellow" : "#FFFF99",
        "cyan" : "#80FFEA",
        "foreground" : "#F8F8F2",
        "green" : "#8AFF80",
        "purple" : "#FF80BF",
        "red" : "#FF9580",
        "white" : "#F8F8F2",
        "yellow" : "#FFFF80"
    }
]
```

#### Activate

Once the color scheme has been defined, it's time to enable it. Find the `profiles` section and add a `colorScheme` value to the default profile.

Example:

```json
"profiles": {
    "defaults": {
        "colorScheme" : "Dracula PRO"
    }
}
```