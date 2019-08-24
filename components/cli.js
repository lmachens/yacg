import { runCommand } from "./commands.js";

const cmdCursor = document.querySelector(".cmd__cursor");
const cmdInput = document.querySelector(".cmd__input");
const cmdOutput = document.querySelector(".cmd__output");
const terminalOutput = document.querySelector(".terminal-output");
const ENTER_KEY = 13;

export function createPromptLine(command) {
  const line = createLine(command);
  const prompt = document.createElement("span");
  prompt.innerHTML = ">";
  prompt.classList = "cmd__prompt";
  line.insertBefore(prompt, line.childNodes[0]);
  return line;
}

export function createLine(content) {
  const line = document.createElement("div");
  line.innerHTML = content;
  return line;
}

export function writeCommandOutput(content) {
  const commandOutputLine = createLine(content);
  terminalOutput.appendChild(commandOutputLine);
}

export function startCursorBlink() {
  setInterval(function() {
    cmdCursor.classList.toggle("cmd__cursor--inverted");
  }, 500);
}

export function registerCliFocusOnClick() {
  document.body.addEventListener("click", function() {
    cmdInput.focus();
  });
}

export function registerKeyUpListener() {
  cmdInput.addEventListener("keyup", function(event) {
    if (event.keyCode === ENTER_KEY) {
      const command = event.target.value.trim();
      const promptLine = createPromptLine(command);
      terminalOutput.appendChild(promptLine);
      runCommand(command);
      cmdOutput.innerHTML = "";
      cmdInput.value = "";
    } else {
      cmdOutput.innerHTML = event.target.value;
    }
  });
}
