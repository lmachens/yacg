import { writeCommandOutput } from "../cli.js";

export function cat(props, level) {
  if (!props.length) {
    return writeCommandOutput(`cat: missing item name`);
  } else {
    const path = props[0];
    const child = level.childs.find(child => child.name === path);
    if (!child) {
      return writeCommandOutput(`cat: can not find item ${path}`);
    }
    if (child.type !== "item") {
      return writeCommandOutput(`cat: ${path} is a location`);
    }
    child.body();
  }
}
