import { cd } from "../commands/cd.js";
import { ls } from "../commands/ls.js";

export const level1 = {
  name: "level1",
  path: "~/level1",
  childs: [],
  commands: {
    cd: function(props) {
      cd(props, level1);
    },
    ls: function(props) {
      ls(props, level1);
    }
  }
};
