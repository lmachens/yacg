import {
  startCursorBlink,
  registerCliFocusOnClick,
  registerKeyUpListener,
  displayCommandList,
  displayItemList
} from "./components/cli.js";

displayCommandList();
displayItemList();
registerCliFocusOnClick();
registerKeyUpListener();
startCursorBlink();
