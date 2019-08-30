import { writeCommandDialog } from "../cli.js";
import { hasItem } from "./index.js";
import { laptop } from "./laptop.js";

export const mom = {
  type: "item",
  name: "mom",
  body: function() {
    let message;
    if (hasItem(laptop)) {
      message = `<em>Your mom looks angry. She is yelling at you:</em><br>
      What are you waiting for? Hurry up!`;
    } else {
      message = `<em>Your mom looks angry. She is yelling at you:</em><br>
      Why are you still here? Shouldn't you go to coding school? Take your laptop and hurry up!`;
    }
    writeCommandDialog(message, "mom");
  }
};
