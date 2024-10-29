# Terminaljs

**Terminaljs** is a simple, customizable terminal emulator written in JavaScript, designed to create a web-based terminal experience.

## Installation

To install the terminal, you can use npm:

```bash
npm i @santacrc/terminaljs
```

Or you can include it via CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/terminal.css">
<script src="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/functions.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/terminal.js"></script>
```

## Usage

To set up the terminal in your HTML file, create the following elements:

- `<pre id="asciiText">` to display ASCII art.
- `<pre id="instructions">` to show any instructions.
- `<pre id="output">` to display the output of commands.
- `<div id="prompt">` that contains the command input and cursor.
- `<div id="interlaced">` to display an interlaced effect.
- `<div id="glare">` to create a glare effect.

### Example HTML Structure

Here’s a full HTML example demonstrating the required structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASCII Terminal</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/terminal.css">
    <script src="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/functions.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/terminal.js"></script>
    <script> 
      // Example of extending terminal functionality with a new command
      commands['joke'] = {
        description: 'Tell a random joke',
        function: joke,
      };

      function joke() {
        const jokes = [
          "Why did the scarecrow win an award? Because he was outstanding in his field!",
          "I told my wife she was drawing her eyebrows too high. She looked surprised.",
          "Why don’t skeletons fight each other? They don’t have the guts.",
          "What did the ocean say to the beach? Nothing, it just waved.",
          "I used to play piano by ear, but now I use my hands.",
          "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
          "Why can't you give Elsa a balloon? Because she will let it go.",
          "I'm reading a book on anti-gravity. It's impossible to put down!",
          "How does a penguin build its house? Igloos it together.",
          "Why was the math book sad? Because it had too many problems."
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
      }
    </script>
</head>
<body>
  <pre id="asciiText">
  _    _      _ _        __          __        _     _ 
 | |  | |    | | |       \ \        / /       | |   | |
 | |__| | ___| | | ___    \ \  /\  / /__  _ __| | __| |
 |  __  |/ _ \ | |/ _ \    \ \/  \/ / _ \| '__| |/ _` |
 | |  | |  __/ | | (_) |    \  /\  / (_) | |  | | (_| |
 |_|  |_|\___|_|_|\___/      \/  \/ \___/|_|  |_|\__,_|
  </pre>
  <pre id="instructions"></pre>
  <pre id="output"></pre>
  <div id="prompt">
    <span id="command-input"></span><span id="cursor" class="blink"></span>
  </div>

  <div id="interlaced"></div>  
  <div id="glare"></div>
</body>
</html>
```

Once set up, the terminal is ready to use. You can type commands, and the output will appear in the `output` section.

## Commands

The terminal includes a few default commands:

| Command | Description                              |
|---------|------------------------------------------|
| `clear` | Clears the screen                        |
| `help`  | Lists all available commands             |
| `hello` | Displays "Hello World"                   |
| `apod`  | Fetches the Astronomy Picture of the Day |
| `echo`  | Requires arguments; echoes the provided arguments |


## Extending the Terminal

You can easily add new commands by adding objects to the `commands` object. Each new command should have the following properties:

- **`description`**: A string describing the purpose of the command.
- **`function`**: A function to be executed when the command is typed.
- **`noShow`**: A boolean indicating if the command should be hidden from the help list.
- **`hasArgs`**: A boolean specifying if the command requires arguments.

### Example: Adding a New Command

To add a command directly in your HTML file, you can use this format:

```html
<script> 
  commands['joke'] = {
    description: 'Tell a random joke',
    function: joke,
  };

  function joke() {
    const jokes = [
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "Why don’t skeletons fight each other? They don’t have the guts.",
      "What did the ocean say to the beach? Nothing, it just waved.",
      "I used to play piano by ear, but now I use my hands.",
      "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
      "Why can't you give Elsa a balloon? Because she will let it go.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "How does a penguin build its house? Igloos it together.",
      "Why was the math book sad? Because it had too many problems."
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }
</script>
```

### Using a Custom Script to Extend the Command List

To add commands from an external JavaScript file, simply add this file to your project and call it after loading `terminal.js`. In your custom script file, you can add commands like this:

```javascript
// custom-commands.js
commands['date'] = {
  description: 'Displays the current date and time',
  function: () => new Date().toLocaleString(),
};

commands['greet'] = {
  description: 'Greets the specified user by name',
  function: (name) => `Hello, ${name}!`,
  hasArgs: true,
};
```

Then, include it in your HTML:

```html
<script src="path/to/custom-commands.js"></script>
```

With this setup, you can easily create and manage commands across different files, making your terminal extensible and modular.