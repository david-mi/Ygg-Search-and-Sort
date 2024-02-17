import { sortFormElement } from "./components/sortForm/sortForm"
import { bindEvents } from "./bind"

export function initViews() {
  document.body.append(sortFormElement)
  bindEvents()
}