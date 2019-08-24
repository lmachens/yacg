import { writeCommandOutput } from "./cli.js";

const commandList = document.getElementById("command-list");

const commands = {
  cat: function() {
    writeCommandOutput("<a href='#'>Test Link</a>");
  },
  ls: function() {
    writeCommandOutput("List");
  }
};

export function runCommand(command) {
  const commandDetails = commands[command];
  if (command === "") {
    writeCommandOutput("");
  } else if (!commandDetails) {
    writeCommandOutput(`Command '${command}' not found`);
  } else {
    commandDetails();
  }
}

export function displayCommandList() {
  commandList.innerHTML = Object.keys(commands)
    .map(command => `<code>${command}</code>`)
    .join(", ");
}
