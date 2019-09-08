import { home } from "./home.js";
import { writeCommandOutput } from "../cli.js";

let currentLevel = home;

export function setLevel(level) {
  currentLevel = level;
}

export function getLevel() {
  return currentLevel;
}

export function runCommand(command) {
  const [name, ...other] = command.split(" ");
  const filteredOther = other.filter(cmd => cmd.trim());
  const commandDetails = currentLevel.commands[name];
  if (command === "") {
    writeCommandOutput("");
  } else if (!commandDetails) {
    writeCommandOutput(`Command '${command}' not found`);
  } else {
    commandDetails(filteredOther);
  }
}
