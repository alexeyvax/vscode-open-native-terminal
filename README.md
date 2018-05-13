# Open-native-terminal

You can open native terminal with any path,
just click right button on your mouse,
then select option called **Open in native terminal**

![example](https://github.com/alexeyvax/vscode-open-native-terminal/blob/master/assets/example.gif?raw=true)

![example-image](https://github.com/alexeyvax/vscode-open-native-terminal/blob/master/assets/example.png?raw=true)

## Show tooltips when your terminal has opened

You can enable tooltips, set up the option to **true**

```
  "open-native-terminal.show-tooltips": true,
```

The default value - **false**


## Only Linux OS:

Also we can add your default terminal to settings.json

use "open-native-terminal.use-default-terminal" with your favorite terminal:
- **gnome-terminal**,
- **konsole**,
- **mate-terminal**,
- **x-terminal-emulator**,
- etc...

for example:
```
{
  "open-native-terminal.use-default-terminal": "mate-terminal",
}
```
