# Open-native-terminal

You can open native terminal with any path,
just click right button on your mouse,
then select option called **Open in native terminal (current folder)** or **Open in native terminal (root folder)**

![example](https://github.com/alexeyvax/vscode-open-native-terminal/blob/master/assets/example.gif?raw=true)

![example-image](https://github.com/alexeyvax/vscode-open-native-terminal/blob/master/assets/example.png?raw=true)

![example-open-image](https://github.com/alexeyvax/vscode-open-native-terminal/blob/master/assets/open.png?raw=true)

## Only for Unix (Linux OS and Mac OS)

Also we can add default terminal to settings.json

use "open-native-terminal.use-default-terminal" with your favorite terminal:

### Linux

- **gnome-terminal**,
- **konsole**,
- **mate-terminal**,
- **x-terminal-emulator**,
- etc...

### Mac

- **Iterm**,
- **Iterm2**,
- etc...

for example in settings:

![settings](https://github.com/alexeyvax/vscode-open-native-terminal/blob/master/assets/settings.png?raw=true)

Note: *if your terminal doesn't open, check the entered name and check that the needed terminal exists*

for example in settings.json:

```
{
  Linux:

  "open-native-terminal.use-default-terminal": "mate-terminal",

  or Mac

  "open-native-terminal.use-default-terminal": "Iterm",
}
```
