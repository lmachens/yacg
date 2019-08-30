import { cd } from "../commands/cd.js";
import { ls } from "../commands/ls.js";
import { pwd } from "../commands/pwd.js";
import { cat } from "../commands/cat.js";
import { breakfast } from "../items/breakfast.js";

export const kitchen = {
  type: "level",
  name: "kitchen",
  path: "~/kitchen",
  childs: [breakfast],
  commands: {
    cat: function(props) {
      cat(props, kitchen);
    },
    cd: function(props) {
      cd(props, kitchen);
    },
    ls: function(props) {
      ls(props, kitchen);
    },
    pwd: function(props) {
      pwd(props, kitchen);
    }
  }
};
