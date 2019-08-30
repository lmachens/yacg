import { writeCommandOutput } from "../cli.js";

export const breakfast = {
  type: "item",
  name: "breakfast",
  body: function() {
    writeCommandOutput(`You are not hungry.`);
  }
};
