import { level1 } from "./level1.js";
import { cd } from "../commands/cd.js";
import { ls } from "../commands/ls.js";

const childs = [level1, level1, level1, level1];
export const home = {
  name: "home",
  path: "~",
  childs,
  commands: {
    cd: function(props) {
      cd(props, home);
    },
    ls: function(props) {
      ls(props, home);
    }
  }
};
