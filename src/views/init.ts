import { sortFormWrapper } from "./components/sortFormWrapper/sortFormWrapper"
import { bindEvents } from "./bind"

export function initViews() {
  document.body.append(sortFormWrapper)
  bindEvents()
}