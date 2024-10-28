/**
 * Fabian Alvarez © 2024 https://fabianalvarez.dev
 * Add a specified delay in milliseconds
 */
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

// Write text to a target element with a specified delay in ms
async function writeText(target, content, delay = 5) {
  for (let i = 0; i < content.length; i++) {
    target.innerHTML += content[i];
    window.scrollTo(0, document.body.scrollHeight);
    await wait(delay);
  }
}

// Handle keypresses on the document, printing them to an 'input' span.
// Input content will be interpreted as a command and output will be written to an output element.
function handleKeypress(e, input, output) {
  const noInputHasFocus = () => !['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName);

  if (noInputHasFocus()) {
    if (e.key === 'Enter') {
      const command = input.innerText;
      input.innerHTML = '';
      output.innerHTML += `<br><strong>${command}</strong><br>`;
      writeText(output, execute(command));
    } else if (e.key === 'Backspace') {
      input.innerHTML = input.innerHTML.slice(0, -1);
    } else {
      input.insertAdjacentText('beforeend', e.key);
    }
  }
}

// Accept a command, execute it, and return any output.
function execute(command) {
  command = command.toLowerCase();
  if (commands[command]) {
    return commands[command].function();
  }
  return "Command not found. Enter 'help' for a list of commands.";
}

// Execute page loading asynchronously once content has loaded
document.addEventListener('DOMContentLoaded', async () => {
  const asciiText = document.getElementById('asciiText');
  const asciiArt = asciiText.innerText;
  asciiText.innerHTML = '';

  const instructions = document.getElementById('instructions');
  const prompt = document.getElementById('prompt');
  const cursor = document.getElementById('cursor');

  await wait(1000);
  await writeText(asciiText, asciiArt);
  await wait(500);
  await writeText(instructions, "Enter a command. Enter 'help' to see a list of commands.");
  
  prompt.prepend('>');
  cursor.innerHTML = '_';

  const input = document.getElementById('command-input');
  const output = document.getElementById('output');
  document.addEventListener('keydown', (e) => handleKeypress(e, input, output));
});
