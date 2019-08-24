const cmdInput = document.querySelector(".cmd__input");
const cmdCursor = document.querySelector(".cmd__cursor");
const cmdOutput = document.querySelector(".cmd__output");
const terminalOutput = document.querySelector(".terminal-output");
const guide = document.getElementById("guide");
const ENTER_KEY = 13;

document.body.addEventListener("click", function() {
  cmdInput.focus();
});

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

setInterval(function() {
  cmdCursor.classList.toggle("cmd__cursor--inverted");
}, 500);

function createPromptLine(command) {
  const line = createLine(command);
  const prompt = document.createElement("span");
  prompt.innerHTML = ">";
  prompt.classList = "cmd__prompt";
  line.insertBefore(prompt, line.childNodes[0]);
  return line;
}

function createLine(text) {
  const line = document.createElement("div");
  const textNode = document.createTextNode(text);
  line.appendChild(textNode);
  return line;
}

function runCommand(command) {
  const commandDetails = commands[command];
  let result = "";
  guide.src = "";
  if (command === "") {
    result = "";
  } else if (!commandDetails) {
    result = `Command '${command}' not found`;
  } else {
    result = `Show '${command}' guide`;
    guide.src = commandDetails.guideSrc;
  }
  const commandOutputLine = createLine(result);
  terminalOutput.appendChild(commandOutputLine);
}

const commands = {
  cat: {
    guideSrc: "https://explainshell.com/explain/1/cat"
  },
  ls: {
    guideSrc: "https://explainshell.com/explain/1/ls"
  }
};
