/**
 * Fabian Alvarez © 2024 https://fabianalvarez.dev
 * Dict of commands, their descriptions, and functions
 */
const commands = {
    '': {
        // Empty command only to show the noShow property, this command will not be shown in the help list
        description: 'Empty command',
        function: () => '\n',
        noShow: true,
    },
    'clear': {
        description: 'Clear the screen',
        function: () => clearScreen(),
    },
    'xkcd': {
        description: 'Get the current XKCD comic',
        function: () => xkcd()
    },
    'help': {
        description: 'List of commands',
        function: () => help()
    },
    'hello': {
        description: 'Hello World',
        function: () => helloWorld()
    }
};

// Function to return "Hello World"
function helloWorld() {
    return 'Hello World';
}

// Special function of help command
function help() {
    var text = 'Enter a command to execute. Commands available:\n';
    for (var key in commands) {
        if (commands[key].noShow) {
            continue;
        }
        else {
        text += key + ' - ' + commands[key].description + '\n';
        }
    }
    return text;
}

// Function to clear the screen
function clearScreen() {
    document.getElementById('asciiText').style.display = 'none';
    document.getElementById('output').innerHTML = '';
    return '';
}

// get current xkcd comic
function xkcd() {
    return fetch('https://xkcd.com/info.0.json')
        .then(response => response.json())
        .then(data => {
            return `<img src="${data.img}" alt="${data.alt}" title="${data.title}">`;
        });
}