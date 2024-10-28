/**
 * Fabian Alvarez © 2024 https://fabianalvarez.dev
 * Dict of commands, their descriptions, and functions
 */
const commands = {
    '': {
        description: 'Empty command',
        function: () => '\n',
        noShow: true,
    },
    'clear': {
        description: 'Clear the screen',
        function: () => {
            document.getElementById('asciiText').style.display = 'none';
            document.getElementById('output').innerHTML = '';
            return '';
        }
    },
    'test': {
        description: 'Test command',
        function: () => 'Test successful!'
    },
    'help': {
        description: 'List of commands',
        function: () => help()
    },
    'hello': {
        description: 'Hello World',
        function: helloWorld
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