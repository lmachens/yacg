import { displayItemList } from "../cli.js";
import { writeCommandOutput } from "../cli.js";

let items = [];

export function addItem(item) {
  if (hasItem(item.name)) {
    return;
  }
  items.push(item);
  writeCommandOutput(`<em>You take ${item.name}.</em>`);
  displayItemList();
}

export function removeItem(item) {
  const index = items.findIndex(
    existingItem => existingItem.name === item.name
  );
  if (index === -1) {
    return;
  }
  items.slice(index);
  displayItemList();
}

export function getItems() {
  return items;
}

export function getItem(name) {
  return items.find(existingItem => existingItem.name === name);
}

export function hasItem(name) {
  return !!getItem(name);
}
