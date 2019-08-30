import { cd } from "../commands/cd.js";
import { ls } from "../commands/ls.js";
import { pwd } from "../commands/pwd.js";
import { cat } from "../commands/cat.js";
import { laptop } from "../items/laptop.js";

export const office = {
  type: "level",
  name: "office",
  path: "~/office",
  childs: [laptop],
  commands: {
    cat: function(props) {
      cat(props, office);
    },
    cd: function(props) {
      cd(props, office);
    },
    ls: function(props) {
      ls(props, office);
    },
    pwd: function(props) {
      pwd(props, office);
    }
  }
};
