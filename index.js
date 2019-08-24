import {
  startCursorBlink,
  registerCliFocusOnClick,
  registerKeyUpListener
} from "./components/cli.js";
import { displayCommandList } from "./components/commands.js";

displayCommandList();
registerCliFocusOnClick();
registerKeyUpListener();
startCursorBlink();
