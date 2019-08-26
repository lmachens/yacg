import {
  startCursorBlink,
  registerCliFocusOnClick,
  registerKeyUpListener,
  displayCommandList
} from "./components/cli.js";

displayCommandList();
registerCliFocusOnClick();
registerKeyUpListener();
startCursorBlink();
