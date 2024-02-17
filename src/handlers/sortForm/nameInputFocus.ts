import { positionSortFormRelativeToNameInput } from "../../views/helpers/positionSortFormRelativeToNameInput"

export function handleNameInputFocus() {
  positionSortFormRelativeToNameInput()

  document.addEventListener("scroll", positionSortFormRelativeToNameInput)
}