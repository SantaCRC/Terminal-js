/**
 * Fabian Alvarez © 2024 https://fabianalvarez.dev
 * Add a specified delay in milliseconds
 */
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

// Function to write text to a target element with a specified delay between each character
async function writeText(target, content, delay = 5) {
  for (let i = 0; i < content.length; i++) {
    target.innerHTML += content[i]; // Add one character at a time
    window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom as text is added
    await wait(delay); // Wait the specified delay before adding the next character
  }
}

// Handle keypresses and interpret input as commands, printing results to the output
function handleKeypress(e, input, output) {
  const noInputHasFocus = () => !['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName);

  if (noInputHasFocus()) {
    if (e.key === 'Enter') {
      const command = input.innerText; // Capture the command entered
      input.innerHTML = ''; // Clear the input field
      output.innerHTML += `<br><strong>${command}</strong><br>`; // Display entered command in output
      writeText(output, execute(command)); // Write the result of the command execution with a delay
    } else if (e.key === 'Backspace') {
      input.innerHTML = input.innerHTML.slice(0, -1); // Remove the last character on Backspace
    } else {
      input.insertAdjacentText('beforeend', e.key); // Add typed character to the input
    }
  }
}

// Execute a command based on user input and return the corresponding output
function execute(command) {
  command = command.toLowerCase();
  if (commands[command]) {
    return commands[command].function();
  }
  return "Command not found. Enter 'help' for a list of commands.";
}

// Initialize the page and display ASCII art and instructions with delay
document.addEventListener('DOMContentLoaded', async () => {
  const asciiText = document.getElementById('asciiText');
  const asciiArt = asciiText.innerText; // Store the ASCII art text
  asciiText.innerHTML = ''; // Clear the initial content

  const instructions = document.getElementById('instructions');
  const prompt = document.getElementById('prompt');
  const cursor = document.getElementById('cursor');

  await wait(1000); // Initial delay before displaying ASCII art
  await writeText(asciiText, asciiArt); // Display ASCII art with typewriter effect
  await wait(500); // Delay before displaying instructions
  await writeText(instructions, "Enter a command. Enter 'help' to see a list of commands.");

  // Set up the command prompt appearance
  prompt.prepend('>');
  cursor.innerHTML = '_';

  // Set up event listener for capturing user input
  const input = document.getElementById('command-input');
  const output = document.getElementById('output');
  document.addEventListener('keydown', (e) => handleKeypress(e, input, output));
});
