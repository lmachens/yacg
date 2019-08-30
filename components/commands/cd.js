import { writeCommandOutput } from "../cli.js";
import { setLevel } from "../levels/index.js";
import { home } from "../levels/home.js";

export function cd(props, level) {
  if (!props.length) {
    setLevel(home);
  } else {
    const path = props[0];
    if (path === ".") {
      return;
    }
    if (path === "..") {
      return setLevel(home);
    }
    const child = level.childs.find(child => child.name === path);
    if (!child) {
      return writeCommandOutput(`cd: no such file or directory: ${path}`);
    }
    if (child.type !== "level") {
      return writeCommandOutput(`cd: ${path} is not a location`);
    }
    setLevel(child);
  }
}
