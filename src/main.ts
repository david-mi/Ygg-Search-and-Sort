import { Store } from "@controllers/store";
import { initViews } from "./views/initViews";

(function () {
  console.log("YGG - Auto sort by seed v1.2.0");
  Store.init()
  initViews()
})();
