import { writeCommandOutput } from "../cli.js";

export const notes = {
  type: "item",
  name: "notes",
  body: function() {
    writeCommandOutput(`Enter <code>ls</code> to look at your surroundings.<br />
      Move to a new location with <code>cd LOCATION</code>.<br />
      Interact with things with <code>cat ITEM</code>.<br />
      If you forgot where you are, use the <code>pwd</code> command.`);
  }
};
