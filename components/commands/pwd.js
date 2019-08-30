import { writeCommandOutput } from "../cli.js";

export function pwd(props, level) {
  writeCommandOutput(`You are in ${level.name}.`);
}
