import { Store } from "@controllers/store";
import { initViews } from "./views/initViews";

(function () {
  console.log("YGG - Search and Sort v1.0.5");
  Store.init();
  initViews();
})();
