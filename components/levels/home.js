import { kitchen } from "./kitchen.js";
import { cd } from "../commands/cd.js";
import { ls } from "../commands/ls.js";
import { pwd } from "../commands/pwd.js";
import { notes } from "../items/notes.js";
import { cat } from "../commands/cat.js";

export const home = {
  type: "level",
  name: "home",
  path: "~",
  childs: [kitchen, notes],
  commands: {
    cat: function(props) {
      cat(props, home);
    },
    cd: function(props) {
      cd(props, home);
    },
    ls: function(props) {
      ls(props, home);
    },
    pwd: function(props) {
      pwd(props, home);
    }
  }
};
