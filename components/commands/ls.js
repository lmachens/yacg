import { writeCommandOutput } from "../cli.js";

export function ls(props, level) {
  if (level.childs.length === 0) {
    return;
  }
  const listItems = level.childs
    .sort(compareChilds)
    .map(child => `<li class="${child.type}">${child.name}</li>`)
    .join("\n");
  writeCommandOutput(`<ul>${listItems}</ul>`);
}

function compareChilds(first, second) {
  return first.name.localeCompare(second.name);
}
