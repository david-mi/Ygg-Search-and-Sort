import { overrideDefaultStyles } from "./helpers/overrideDefaultStyles"
import { bindEvents } from "./bind"

export function initViews() {
  overrideDefaultStyles()
  bindEvents()
}



