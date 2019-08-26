import { writeCommandOutput } from "../cli.js";

export function ls(props, level) {
  if (level.childs.length === 0) {
    return;
  }
  const listItems = level.childs
    .map(child => `<li>${child.name}</li>`)
    .join("\n");
  writeCommandOutput(`<ul>${listItems}</ul>`);
}
