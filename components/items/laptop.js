import { writeCommandOutput } from "../cli.js";
import { addItem } from "./index.js";

export const laptop = {
  type: "item",
  name: "laptop",
  body: function() {
    writeCommandOutput(`Your laptop.`);
    addItem(laptop);
  }
};
