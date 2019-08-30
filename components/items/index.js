import { displayItemList } from "../cli.js";
import { writeCommandOutput } from "../cli.js";

let items = [];

export function addItem(item) {
  if (hasItem(item)) {
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

export function getItem(item) {
  return items.find(existingItem => existingItem.name === item.name);
}

export function hasItem(item) {
  return !!getItem(item);
}
