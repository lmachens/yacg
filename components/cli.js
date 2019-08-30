import { runCommand, getLevel } from "./levels/index.js";
import { getItems } from "./items/index.js";

const cmdCursor = document.querySelector(".cmd__cursor");
const cmdInput = document.querySelector(".cmd__input");
const cmdOutput = document.querySelector(".cmd__output");
const terminalOutput = document.querySelector(".terminal-output");
const commandList = document.querySelector("#command-list");
const itemList = document.querySelector("#item-list");
const cmdPrompt = document.querySelector(".cmd__prompt");

const ENTER_KEY = 13;

export function createPromptLine(command) {
  const line = createLine(command);
  const prompt = document.createElement("span");
  const level = getLevel();
  prompt.innerHTML = level.path;
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
  document.body.addEventListener("keydown", function() {
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

      displayCommandList();
      setPromptPath();
    } else {
      cmdOutput.innerHTML = event.target.value;
    }
  });
}

export function displayCommandList() {
  const level = getLevel();
  commandList.innerHTML = Object.keys(level.commands)
    .map(command => `<code>${command}</code>`)
    .join(", ");
}

export function displayItemList() {
  const items = getItems();
  itemList.innerHTML =
    items.map(item => `<span class="item">${item.name}</span>`).join(", ") ||
    "No items";
}

function setPromptPath() {
  const level = getLevel();
  cmdPrompt.innerHTML = level.path;
}
