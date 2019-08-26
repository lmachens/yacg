import { writeCommandOutput } from "../cli.js";

export function ls(props, level) {
  const listItems = level.childs
    .map(child => `<li>${child.name}</li>`)
    .join("\n");
  writeCommandOutput(`<ul>${listItems}</ul>`);
}
