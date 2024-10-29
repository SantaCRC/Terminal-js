# Terminaljs
A simple terminal emulator written in JavaScript that can be used to create a web-based terminal.

## Installation
To install the terminal, you can use npm:
```bash
npm i @santacrc/terminaljs
```
but you can also use the CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/terminal.css">
<script src="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/functions.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/terminal.js"></script>
```

## Usage
You need to create several elements in your HTML file to use the terminal:
- A pre element with the id `asciiText` to show the ASCII art.
- A pre element with the id `instructions` to show the instructions.
- A pre element with the id `output` to show the output of the commands.
- A div element with the id `prompt` that contains the command input and the cursor.
- A div element with the id `interlaced` to show the interlaced effect.
- A div element with the id `glare` to show the glare effect.
  
this is an example of how to use the terminal:
```html
<html>
    <header>
        <title>ASCII Terminal</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/terminal.css">
        <script src="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/functions.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@santacrc/terminaljs/terminal.js"></script>
        <!-- Block of code to show how to extends functions -->
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
    </header>
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
The terminal is ready to use, you can type commands and see the output.

## Commands
The terminal has some default commands, to show the list of commands you can type `help` and press enter in the terminal.
also this is a table with the default commands:

| Command | Description |
| --- | --- |
| `help` | Show the list of commands |
let commands = {
    '': {
        // Placeholder command to demonstrate the `noShow` property. This command will be hidden in the help list.
        description: 'Empty command',
        function: () => '\n',
        noShow: true,
    },
    'clear': {
        description: 'Clear the screen',
        function: clearScreen,
    },
    'help': {
        description: 'List available commands',
        function: displayHelp,
    },
    'hello': {
        description: 'Display "Hello World"',
        function: helloWorld,
    },
    'apod': {
        description: 'Fetch the Astronomy Picture of the Day',
        function: getAPOD,
    }
};

## Extending the terminal
You can add new commands to the terminal by adding a new object to the `commands` object, the object should have the following properties:
- `description`: A string with the description of the command.
- `function`: A function that will be executed when the command is typed.
- `noShow`: A boolean that indicates if the command should be hidden in the help list.
- 
